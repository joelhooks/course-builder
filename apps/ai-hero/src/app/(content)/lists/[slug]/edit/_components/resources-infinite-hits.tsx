'use client'

import React from 'react'
import { SearchBox } from '@/app/(search)/q/_components/instantsearch/searchbox'
import Spinner from '@/components/spinner'
import type { List } from '@/lib/lists'
import { addPostToList } from '@/lib/lists-query'
import type { TypesenseResource } from '@/lib/typesense'
import { useInfiniteHits, useInstantSearch } from 'react-instantsearch'
import { z } from 'zod'

import { Button } from '@coursebuilder/ui'

import Hit from './hit'
import type { TreeAction } from './lesson-list/data/tree'
import { useSelection } from './selection-context'

export function ResourcesInfiniteHits({
	list,
	updateTreeState,
}: {
	list: List
	updateTreeState: React.ActionDispatch<[action: TreeAction]>
}) {
	const { items, showMore, isLastPage } = useInfiniteHits<TypesenseResource>({})
	const { refresh } = useInstantSearch()

	const {
		selectedResources,
		clearSelection,
		setIsLoading,
		isLoading,
		setExcludedIds,
	} = useSelection()

	const handleBulkAdd = async () => {
		// update the tree state right away
		setExcludedIds((prev) => [...prev, ...selectedResources.map((r) => r.id)])

		for (const resource of selectedResources) {
			updateTreeState({
				type: 'add-item',
				itemId: resource.id,
				item: {
					id: resource.id,
					label: resource.title,
					type: resource.type,
					children: [],
					itemData: resource as any,
				},
			})
		}
		// then await the API calls
		for (const resource of selectedResources) {
			setIsLoading(true)
			await addPostToList({
				postId: resource.id,
				listId: list.id,
			})
		}
		clearSelection()
		refresh()
		setIsLoading(false)
	}

	return (
		<div>
			<div className="bg-background sticky top-0 z-10 flex min-h-[57px] items-center justify-between px-5 py-2">
				{selectedResources.length > 0 ? (
					<>
						<span>{selectedResources.length} selected</span>
						{isLoading ? (
							<Spinner className="h-4 w-4" />
						) : (
							<div className="flex gap-2">
								<Button variant="ghost" onClick={clearSelection}>
									Cancel
								</Button>
								<Button onClick={handleBulkAdd}>Add Selected</Button>
							</div>
						)}
					</>
				) : (
					<span className="text-lg font-bold">Add to list</span>
				)}
			</div>
			<div className="border-b px-5 pb-4">
				<SearchBox className="mb-0 mt-1" />
			</div>
			<ul className="divide-y">
				{items.map((item) => (
					<Hit
						key={item.id}
						updateTreeState={updateTreeState}
						listId={list.id}
						hit={item}
					/>
				))}
			</ul>
			{!isLastPage && (
				<Button
					variant="ghost"
					onClick={showMore}
					disabled={isLastPage}
					className="font-semibold"
				>
					Show More
				</Button>
			)}
		</div>
	)
}