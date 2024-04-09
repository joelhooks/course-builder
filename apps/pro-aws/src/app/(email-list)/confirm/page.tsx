import { Metadata } from 'next/types'
import { Signature } from '@/app/(email-list)/_components/signature'
import { Layout } from '@/components/app/layout'

import { Email } from '../_components/email'

export const metadata: Metadata = {
	title: 'Confirm your subscription',
}

export default async function ConfirmSubscriptionPage() {
	return (
		<Layout>
			<main className="flex flex-grow flex-col items-center justify-center px-5 py-24">
				<div className="flex max-w-xl flex-col items-center justify-center text-center font-light">
					<h1 className="font-text font-heading mx-auto w-full max-w-lg py-8 text-3xl font-bold sm:text-4xl">
						Confirm your email address
					</h1>
					<div className="prose sm:prose-lg prose-p:text-balance mx-auto leading-relaxed">
						<p>
							We sent an email to{' '}
							<strong>
								<Email />
							</strong>{' '}
							with a confirmation link. Click the link to finish your
							subscription.
						</p>
						<p>
							Didn't get an email? Check your spam folder or other filters and
							add <strong>{process.env.NEXT_PUBLIC_SUPPORT_EMAIL}</strong> to
							your contacts.
						</p>
						<p>
							Thanks, <br />
							<Signature />
						</p>
					</div>
				</div>
			</main>
		</Layout>
	)
}
