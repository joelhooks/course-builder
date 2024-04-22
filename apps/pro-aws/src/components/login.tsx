'use client'

import { signIn } from 'next-auth/react'

import { Button } from '@coursebuilder/ui'

export function Login({
	className,
	providers,
}: {
	className?: string
	providers: { id: string; name: string }[]
}) {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
			<h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-gray-100">
				Log In
			</h1>
			{providers.map((provider) => (
				<Button
					key={provider.id}
					data-button=""
					variant="outline"
					onClick={() =>
						signIn(provider.id, {
							callbackUrl: '/',
						})
					}
				>
					<svg
						width={20}
						height={20}
						viewBox={'0 0 16 16'}
						role={'img'}
						className="mr-2 flex items-center justify-center"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>{'Github'}</title>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							fill="currentColor"
							d="M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6 C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5 c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1 c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8 c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2 c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z"
						/>
					</svg>
					Log in with {provider.name}
				</Button>
			))}
		</div>
	)
}
