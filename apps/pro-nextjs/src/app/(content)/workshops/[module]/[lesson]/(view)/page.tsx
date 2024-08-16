import * as React from 'react'
import type { Metadata, ResolvingMetadata } from 'next'
import { LessonPage } from '@/app/(content)/workshops/[module]/[lesson]/(view)/shared-page'
import { db } from '@/db'
import { contentResource } from '@/db/schema'
import { getLesson } from '@/lib/lessons-query'
import { getWorkshopNavigation } from '@/lib/workshops-query'
import { getOGImageUrlForResource } from '@/utils/get-og-image-url-for-resource'
import { and, eq } from 'drizzle-orm'

export async function generateStaticParams() {
	const workshops = await db.query.contentResource.findMany({
		where: and(eq(contentResource.type, 'workshop')),
	})

	const routeParams: { module: string; lesson: string }[] = []

	for (const workshop of workshops.filter((workshop) =>
		Boolean(workshop.fields?.slug),
	)) {
		const workshopNavigation = await getWorkshopNavigation(
			workshop.fields?.slug,
		)

		workshopNavigation?.resources.forEach((resource) => {
			console.log({ resource })
			if (resource.type === 'lesson') {
				routeParams.push({
					module: workshop.fields?.slug,
					lesson: resource.slug,
				})
			} else if (resource.type === 'section') {
				resource.lessons.forEach((sectionResource) => {
					if (sectionResource.type === 'lesson') {
						routeParams.push({
							module: workshop.fields?.slug,
							lesson: sectionResource.slug,
						})
					}
				})
			}
		})
	}

	return routeParams
}

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const lesson = await getLesson(params.lesson)

	if (!lesson) {
		return parent as Metadata
	}

	return {
		title: lesson.fields?.title,
		openGraph: {
			images: [getOGImageUrlForResource(lesson)],
		},
	}
}

type Props = {
	params: { lesson: string; module: string }
	searchParams: { [key: string]: string | string[] | undefined }
}

export default async function LessonPageWrapper({
	params,
	searchParams,
}: Props) {
	const lesson = await getLesson(params.lesson)

	return (
		<LessonPage params={params} lesson={lesson} searchParams={searchParams} />
	)
}
