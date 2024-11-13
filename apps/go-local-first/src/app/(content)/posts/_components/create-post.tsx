'use client'

import { useRouter } from 'next/navigation'
import { PostUploader } from '@/app/(content)/posts/_components/post-uploader'
import { createPost } from '@/lib/posts-query'
import { getVideoResource } from '@/lib/video-resource-query'
import { FilePlus2 } from 'lucide-react'
import pluralize from 'pluralize'

import type { ContentResource } from '@coursebuilder/core/schemas'
import {
	Button,
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTrigger,
} from '@coursebuilder/ui'
import { NewResourceWithVideoForm } from '@coursebuilder/ui/resources-crud/new-resource-with-video-form'

export function CreatePost() {
	const router = useRouter()
	return (
		<NewResourceWithVideoForm
			className="[&_label]:fluid-lg [&_label]:font-heading [&_[data-sr-button]]:h-10 [&_label]:font-semibold"
			onResourceCreated={async (resource: ContentResource) => {
				router.push(
					`/${pluralize(resource.type)}/${resource.fields?.slug || resource.id}/edit`,
				)
			}}
			createResource={createPost}
			getVideoResource={getVideoResource}
		>
			{(handleSetVideoResourceId: (id: string) => void) => {
				return <PostUploader setVideoResourceId={handleSetVideoResourceId} />
			}}
		</NewResourceWithVideoForm>
	)
}

export function CreatePostModal() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline" type="button" className="w-full gap-1">
					<FilePlus2 className="h-4 w-4" /> New Post
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader className="fluid-3xl font-heading font-semibold">
					New Post
				</DialogHeader>
				<CreatePost />
			</DialogContent>
		</Dialog>
	)
}