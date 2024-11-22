'use client'

import * as React from 'react'
import {
	NewPost,
	POST_TYPES_WITH_VIDEO,
	PostType,
	PostTypeSchema,
} from '@/lib/posts'
import { zodResolver } from '@hookform/resolvers/zod'
import { FileVideo } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
	type ContentResource,
	type VideoResource,
} from '@coursebuilder/core/schemas'
import {
	Button,
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@coursebuilder/ui'
import { cn } from '@coursebuilder/ui/utils/cn'

const NewResourceWithVideoSchema = z.object({
	title: z.string().min(2).max(90),
	videoResourceId: z.string().min(4, 'Please upload a video'),
})

type NewResourceWithVideo = z.infer<typeof NewResourceWithVideoSchema>

const FormValuesSchema = NewResourceWithVideoSchema.extend({
	postType: PostTypeSchema,
	videoResourceId: z.string().optional(),
})

type FormValues = z.infer<typeof FormValuesSchema>

export function NewResourceWithVideoForm({
	getVideoResource,
	createResource,
	onResourceCreated,
	availableResourceTypes,
	className,
	children,
}: {
	getVideoResource: (idOrSlug?: string) => Promise<VideoResource | null>
	createResource: (values: NewPost) => Promise<ContentResource>
	onResourceCreated: (resource: ContentResource, title: string) => Promise<void>
	availableResourceTypes?: PostType[] | undefined
	className?: string
	children: (
		handleSetVideoResourceId: (value: string) => void,
	) => React.ReactNode
}) {
	const [videoResourceId, setVideoResourceId] = React.useState<
		string | undefined
	>()
	const [videoResourceValid, setVideoResourceValid] =
		React.useState<boolean>(false)
	const [isValidatingVideoResource, setIsValidatingVideoResource] =
		React.useState<boolean>(false)

	const form = useForm<FormValues>({
		resolver: zodResolver(FormValuesSchema),
		defaultValues: {
			title: '',
			videoResourceId: undefined,
			postType: availableResourceTypes?.[0] || 'lesson',
		},
	})

	async function* pollVideoResource(
		videoResourceId: string,
		maxAttempts = 30,
		initialDelay = 250,
		delayIncrement = 250,
	) {
		let delay = initialDelay

		for (let attempt = 1; attempt <= maxAttempts; attempt++) {
			const videoResource = await getVideoResource(videoResourceId)
			if (videoResource) {
				yield videoResource
				return
			}

			await new Promise((resolve) => setTimeout(resolve, delay))
			delay += delayIncrement
		}

		throw new Error('Video resource not found after maximum attempts')
	}

	const [isSubmitting, setIsSubmitting] = React.useState(false)

	const onSubmit = async (values: FormValues) => {
		try {
			setIsSubmitting(true)
			if (values.videoResourceId) {
				await pollVideoResource(values.videoResourceId).next()
			}
			const resource = await createResource(values as any)
			console.log({ resource })
			if (!resource) {
				// Handle edge case, e.g., toast an error message
				console.log('no resource in onSubmit')
				return
			}

			onResourceCreated(resource, form.watch('title'))
		} catch (error) {
			console.error('Error polling video resource:', error)
			// handle error, e.g. toast an error message
		} finally {
			form.reset()
			setVideoResourceId(videoResourceId)
			form.setValue('videoResourceId', '')
			setIsSubmitting(false)
		}
	}

	async function handleSetVideoResourceId(videoResourceId: string) {
		try {
			console.log('inside handleSetVideoResourceId')
			setVideoResourceId(videoResourceId)
			setIsValidatingVideoResource(true)
			form.setValue('videoResourceId', videoResourceId)
			console.log('setValue videoResourceId: ', videoResourceId)
			await pollVideoResource(videoResourceId).next()

			setVideoResourceValid(true)
			console.log('setting video resource valid')
			setIsValidatingVideoResource(false)
		} catch (error) {
			setVideoResourceValid(false)
			console.log('setting video resource INVALID')
			form.setError('videoResourceId', { message: 'Video resource not found' })
			setVideoResourceId('')
			form.setValue('videoResourceId', '')
			setIsValidatingVideoResource(false)
		}
	}

	const selectedPostType = form.watch('postType')

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className={cn('flex flex-col gap-5', className)}
			>
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Title</FormLabel>
							<FormDescription>
								A title should summarize the resource and explain what it is
								about clearly.
							</FormDescription>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{availableResourceTypes && (
					<FormField
						control={form.control}
						name="postType"
						render={({ field }) => {
							const descriptions = {
								lesson: 'A traditional egghead lesson video',
								article: 'A standard article',
								podcast:
									'A podcast episode that will be distributed across podcast networks via the egghead podcast',
								course:
									'A collection of lessons that will be distributed as a course',
							}

							return (
								<FormItem>
									<FormLabel>Type</FormLabel>
									<FormDescription>
										Select the type of resource you are creating.
									</FormDescription>
									<FormControl>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											<SelectTrigger className="capitalize">
												<SelectValue placeholder="Select Type..." />
											</SelectTrigger>
											<SelectContent>
												{availableResourceTypes.map((type) => (
													<SelectItem
														className="capitalize"
														value={type}
														key={type}
													>
														{type}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</FormControl>
									{field.value && (
										<div className="bg-muted text-muted-foreground mx-auto mt-2 max-w-[300px] whitespace-normal break-words rounded-md p-3 py-2 text-sm">
											{descriptions[field.value as keyof typeof descriptions]}
										</div>
									)}
									<FormMessage />
								</FormItem>
							)
						}}
					/>
				)}
				{POST_TYPES_WITH_VIDEO.includes(selectedPostType) && (
					<FormField
						control={form.control}
						name="videoResourceId"
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									{videoResourceId ? 'Video' : 'Upload a Video'}
								</FormLabel>
								<FormDescription>
									<span className="block">
										You can upload a video later if needed.
									</span>
									Your video will be uploaded and then transcribed
									automatically.
								</FormDescription>
								<FormControl>
									<Input type="hidden" {...field} />
								</FormControl>
								{!videoResourceId ? (
									children(handleSetVideoResourceId)
								) : (
									<div className="mt-5 flex w-full justify-between border-t pt-5">
										<div className="flex flex-col divide-y">
											<span className="text-primary flex items-center gap-2 py-1 text-sm">
												<FileVideo className="h-4 w-4" />
												<span>{videoResourceId}</span>
											</span>
										</div>
										<Button
											type="button"
											variant="outline"
											size="sm"
											onClick={() => {
												setVideoResourceId('')
												form.setValue('videoResourceId', '')
											}}
										>
											clear
										</Button>
									</div>
								)}
								{isValidatingVideoResource && !videoResourceValid ? (
									<FormMessage>Processing Upload</FormMessage>
								) : null}

								<FormMessage />
							</FormItem>
						)}
					/>
				)}
				<Button
					type="submit"
					variant="default"
					disabled={
						(videoResourceId ? !videoResourceValid : false) || isSubmitting
					}
				>
					{isSubmitting ? 'Creating...' : 'Create Draft Resource'}
				</Button>
			</form>
		</Form>
	)
}