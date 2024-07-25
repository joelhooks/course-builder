import * as React from 'react'
import type { Metadata, ResolvingMetadata } from 'next'
import { LessonProvider } from '@/app/(content)/tutorials/[module]/[lesson]/_components/lesson-context'
import { ModuleProvider } from '@/app/(content)/tutorials/[module]/[lesson]/_components/module-context'
import { LessonPage } from '@/app/(content)/workshops/[module]/[lesson]/(view)/shared-page'
import { getExerciseSolution, getLesson } from '@/lib/lessons-query'
import { getModuleProgressForUser } from '@/lib/progress'
import { getWorkshop } from '@/lib/workshops-query'
import { getOGImageUrlForResource } from '@/utils/get-og-image-url-for-resource'

import Page from '../page'

export async function generateMetadata(
	{
		params,
	}: {
		params: {
			module: string
			lesson: string
		}
	},
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

export default async function LessonExercisePage({
	params,
	searchParams,
}: {
	params: {
		module: string
		lesson: string
	}
	searchParams: { [key: string]: string | string[] | undefined }
}) {
	const moduleLoader = getWorkshop(params.module)
	const lessonLoader = getLesson(params.lesson)
	const moduleProgressLoader = getModuleProgressForUser(params.module)

	return (
		<ModuleProvider moduleLoader={moduleLoader}>
			<LessonProvider lessonLoader={lessonLoader}>
				<LessonPage
					searchParams={searchParams}
					lessonLoader={lessonLoader}
					exerciseLoader={lessonLoader}
					moduleLoader={moduleLoader}
					moduleProgressLoader={moduleProgressLoader}
				/>
			</LessonProvider>
		</ModuleProvider>
	)
}
