'use client'

import React from 'react'
import Link from 'next/link'
import type { List } from '@/lib/lists'
import { deleteList } from '@/lib/lists-query'
import { Trash } from 'lucide-react'

import {
	Alert,
	AlertTitle,
	Button,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@coursebuilder/ui'

export function ListsTable({
	lists,
	canCreateContent,
}: {
	lists: List[]
	canCreateContent: boolean
}) {
	const [error, setError] = React.useState<string | null>(null)
	return (
		<>
			{error && <Alert variant={'destructive'}>{error}</Alert>}
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Title</TableHead>
						<TableHead>Description</TableHead>
						<TableHead>Type</TableHead>
						<TableHead>Resources</TableHead>
						<TableHead>Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{lists.map((list) => (
						<TableRow key={list.id}>
							<TableCell>
								<Link
									href={
										canCreateContent
											? `/lists/${list.fields.slug}/edit`
											: `/lists/${list.fields.slug}`
									}
									className="text-primary hover:underline"
								>
									{list.fields.title}
								</Link>
							</TableCell>
							<TableCell>{list.fields.description}</TableCell>
							<TableCell>{list.fields.type}</TableCell>
							<TableCell>{list.resources?.length || 0}</TableCell>
							<TableCell>
								<Button
									title={
										list.resources.length > 0
											? 'Delete list'
											: 'Must be empty to delete'
									}
									disabled={list.resources.length > 0}
									size="icon"
									variant="outline"
									onClick={async () => {
										await deleteList(list.id).catch((e) => {
											setError(e)
										})
									}}
								>
									<Trash className="h-3 w-3" />
								</Button>
							</TableCell>
						</TableRow>
					))}
					{lists.length === 0 && (
						<TableRow>
							<TableCell colSpan={3} className="py-4 text-center">
								No lists found
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</>
	)
}