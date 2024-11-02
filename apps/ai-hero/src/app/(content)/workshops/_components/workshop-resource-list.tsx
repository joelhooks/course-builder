'use client'

import * as React from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { createAppAbility, type AppAbility } from '@/ability'
import { CldImage } from '@/app/_components/cld-image'
import { useModuleProgress } from '@/app/(content)/_components/module-progress-provider'
import { useWorkshopNavigation } from '@/app/(content)/workshops/_components/workshop-navigation-provider'
import { findSectionIdForLessonSlug, NavigationResource } from '@/lib/workshops'
import { api } from '@/trpc/react'
import { cn } from '@/utils/cn'
import { Check, Lock, PanelLeftClose, PanelLeftOpen, Pen } from 'lucide-react'
import { useMeasure } from 'react-use'

import type { ModuleProgress } from '@coursebuilder/core/schemas'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Button,
	ScrollArea,
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@coursebuilder/ui'

type Props = {
	currentLessonSlug?: string | null
	currentSectionSlug?: string | null
	className?: string
	wrapperClassName?: string
	maxHeight?: string
	withHeader?: boolean
	isCollapsible?: boolean
}

export function WorkshopResourceList(props: Props) {
	const wrapperClassName =
		'wrapperClassName' in props ? props.wrapperClassName : ''
	const className = 'className' in props ? props.className : ''
	const withHeader = 'withHeader' in props ? props.withHeader : true
	const maxHeight =
		'maxHeight' in props ? props.maxHeight : 'h-[calc(100vh-var(--nav-height))]'
	const isCollapsible = 'isCollapsible' in props ? props.isCollapsible : true

	const workshopNavigation = useWorkshopNavigation()
	const { moduleProgress } = useModuleProgress()

	const { data: abilityRules, status: abilityStatus } =
		api.ability.getCurrentAbilityRules.useQuery({
			moduleId: workshopNavigation?.id,
		})

	const sectionId = findSectionIdForLessonSlug(
		workshopNavigation,
		props.currentLessonSlug,
	)

	const ability = createAppAbility(abilityRules || [])

	const scrollAreaRef = React.useRef<HTMLDivElement>(null)

	React.useEffect(() => {
		// scroll to active resource on mount
		const resourceToScrollToRef = document.querySelector(
			'li[data-active="true"]',
		)
		const scrollArea = scrollAreaRef.current
		if (resourceToScrollToRef && scrollArea) {
			const scrollAreaTop = scrollArea.getBoundingClientRect().top
			const activeResourceTop =
				resourceToScrollToRef.getBoundingClientRect().top
			const scrollPosition = activeResourceTop - scrollAreaTop

			scrollArea.scrollTop += scrollPosition
		}
	}, [scrollAreaRef])

	const [ref, { height: headerHeight }] = useMeasure()

	if (!workshopNavigation) {
		return null
	}

	const { resources, setIsSidebarCollapsed, isSidebarCollapsed } =
		workshopNavigation

	return (
		<nav
			className={cn('relative w-full max-w-sm flex-shrink-0', className, {
				'border-r': !isSidebarCollapsed,
				'w-0': isSidebarCollapsed && isCollapsible,
			})}
		>
			<div className={cn('sticky top-0 overflow-hidden', maxHeight)}>
				{withHeader && (
					<div
						ref={ref as any}
						className={cn(
							'relative z-10 w-full border-b pl-2 shadow-[0_20px_25px_-5px_rgb(0_0_0_/_0.05),_0_8px_10px_-6px_rgb(0_0_0_/_0.05)]',
						)}
					>
						<div className="flex w-full flex-row items-center gap-3 p-3">
							{workshopNavigation.coverImage && (
								<CldImage
									width={48}
									height={48}
									src={workshopNavigation.coverImage}
									alt={workshopNavigation.title}
								/>
							)}
							<div className="flex flex-col leading-tight">
								<div className="flex items-center gap-0.5">
									<Link
										href="/workshops"
										className="font-heading text-primary text-sm font-medium hover:underline"
									>
										Workshops
									</Link>
									<span className="opacity-50">/</span>
								</div>
								<Link
									className="font-heading text-balance text-lg font-semibold leading-tight hover:underline"
									href={`/workshops/${workshopNavigation.slug}`}
								>
									{workshopNavigation.title}
								</Link>
							</div>
						</div>
					</div>
				)}
				<ScrollArea
					className={cn('h-full')}
					style={{
						maxHeight: props.maxHeight
							? 'auto'
							: `calc(100vh - ${headerHeight}px - var(--nav-height))`,
					}}
					viewportRef={scrollAreaRef}
				>
					<Accordion
						type="single"
						collapsible
						className={cn('flex flex-col', wrapperClassName)}
						defaultValue={sectionId || resources[0]?.id}
					>
						<ol className="">
							{resources.map((resource: NavigationResource, i: number) => {
								return resource.type === 'section' ? (
									// sections
									<li key={`${resource.id}-accordion`}>
										<AccordionItem value={resource.id} className="border-0">
											<AccordionTrigger className="hover:bg-muted bg-background relative flex w-full items-center border-b px-5 py-5 text-left text-lg font-semibold leading-tight">
												<h3 className="pr-2">{resource.title}</h3>
											</AccordionTrigger>
											{resource.lessons.length > 0 && (
												// section lessons
												<AccordionContent>
													<ol className="divide-border bg-background divide-y border-b">
														{resource.lessons.map((lesson, index: number) => {
															return (
																<LessonResource
																	lesson={lesson}
																	index={index}
																	moduleProgress={moduleProgress}
																	ability={ability}
																	abilityStatus={abilityStatus}
																	key={lesson.id}
																/>
															)
														})}
													</ol>
												</AccordionContent>
											)}
										</AccordionItem>
									</li>
								) : (
									// top-level lessons
									<LessonResource
										className="border-b"
										lesson={resource}
										index={i}
										moduleProgress={moduleProgress}
										ability={ability}
										abilityStatus={abilityStatus}
										key={resource.id}
									/>
								)
							})}
						</ol>
					</Accordion>
				</ScrollArea>
			</div>
			{isCollapsible && (
				<TooltipProvider>
					<Tooltip delayDuration={0}>
						<TooltipTrigger asChild>
							<Button
								className="bg-background text-foreground hover:bg-background fixed bottom-1.5 left-1.5 z-50 hidden h-8 w-8 border p-1 transition lg:flex"
								size="icon"
								type="button"
								onClick={() => {
									setIsSidebarCollapsed(!isSidebarCollapsed)
								}}
							>
								{isSidebarCollapsed ? (
									<PanelLeftOpen className="h-4 w-4" />
								) : (
									<PanelLeftClose className="h-4 w-4" />
								)}
							</Button>
						</TooltipTrigger>
						<TooltipContent side="right">
							{isSidebarCollapsed ? 'Open sidebar' : 'Close sidebar'}
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			)}
		</nav>
	)
}

const LessonResource = ({
	lesson,
	moduleProgress,
	index,
	ability,
	abilityStatus,
	className,
}: {
	lesson: NavigationResource
	moduleProgress?: ModuleProgress | null
	index: number
	ability: AppAbility
	abilityStatus: 'error' | 'success' | 'pending'
	className?: string
}) => {
	const params = useParams()

	const isActive = lesson.slug === params.lesson

	const isCompleted = moduleProgress?.completedLessons?.some(
		(progress) => progress.resourceId === lesson.id && progress.completedAt,
	)

	return (
		<li
			key={lesson.id}
			className={cn('', className)}
			data-active={isActive ? 'true' : 'false'}
		>
			<div className="relative flex w-full items-center">
				<Link
					className={cn(
						'hover:bg-muted relative flex w-full items-baseline py-3 pl-3 pr-10 font-medium',
						{
							'bg-muted text-primary border-gray-200': isActive,
							'hover:text-primary': !isActive,
						},
					)}
					href={`/workshops/${params.module}/${lesson.slug}`}
					prefetch={true}
				>
					{isCompleted ? (
						<div
							aria-label="Completed"
							className="flex w-6 flex-shrink-0 items-center justify-center pr-1"
						>
							<Check
								aria-hidden="true"
								className="text-primary relative h-4 w-4 translate-y-1"
							/>
						</div>
					) : (
						<span
							className="relative w-6 flex-shrink-0 -translate-y-0.5 pr-1 text-center text-[10px] font-light text-gray-400"
							aria-hidden="true"
						>
							{index + 1}
						</span>
					)}
					<span className="w-full text-balance text-base">{lesson.title}</span>
					{abilityStatus === 'success' && (
						<>
							{ability.can('read', 'Content') || index === 0 ? null : (
								<Lock
									className="absolute right-5 w-3 text-gray-500"
									aria-label="locked"
								/>
							)}
						</>
					)}
				</Link>
				{abilityStatus === 'success' && (
					<div className="absolute right-2 flex w-10 items-center justify-center">
						{ability.can('create', 'Content') ? (
							<Button
								asChild
								variant="outline"
								size="icon"
								className="scale-75"
							>
								<Link href={`/workshops/${params.module}/${lesson.slug}/edit`}>
									<Pen className="w-3" />
								</Link>
							</Button>
						) : null}
					</div>
				)}
			</div>
		</li>
	)
}