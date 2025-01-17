import * as React from 'react'
import { Suspense } from 'react'
import { headers } from 'next/headers'
import { notFound, redirect } from 'next/navigation'
import Spinner from '@/components/spinner'
import {
	stripePaymentAdapter,
	stripeProvider,
} from '@/coursebuilder/stripe-provider'
import { courseBuilderAdapter } from '@/db'
import { getServerAuthSession } from '@/server/auth'
import { axiom } from '@/server/axiom-client'
import { redis } from '@/server/redis-client'
import { Mail } from 'lucide-react'

import * as LoginLink from '@coursebuilder/commerce-next/post-purchase/login-link'
import * as PurchaseSummary from '@coursebuilder/commerce-next/post-purchase/purchase-summary'
import { convertToSerializeForNextResponse } from '@coursebuilder/commerce-next/utils/serialize-for-next-response'
import { syncStripeDataToKV } from '@coursebuilder/core/lib/subscription/sync-stripe-data'
import { logger } from '@coursebuilder/core/utils/logger'

const getServerSideProps = async (session_id: string) => {
	if (!session_id) {
		logger.error(new Error(`No session_id found: ${session_id}`))
		throw new Error(`No session_id found: ${session_id}`)
	}

	try {
		const session = await stripePaymentAdapter.getCheckoutSession(session_id)

		if (!session.customer || typeof session.customer === 'string') {
			throw new Error('No customer found in session')
		}

		// Sync to Redis immediately
		const { subscriptionInfo } = await syncStripeDataToKV({
			stripe: stripePaymentAdapter,
			redis,
			customerId: session.customer.id,
			source: 'success-page',
			axiom,
		})

		if (!subscriptionInfo) {
			throw new Error('No subscription info found after sync')
		}

		const {
			email,
			subscriptionIdentifier,
			product: merchantProduct,
		} = subscriptionInfo

		logger.debug('Got subscription info', {
			email,
			subscriptionIdentifier,
			merchantProduct,
		})

		const stripeProductName = merchantProduct.name

		const subscription = await courseBuilderAdapter.getSubscriptionForStripeId(
			subscriptionIdentifier,
		)

		logger.debug('Got subscription', { subscription })

		if (!subscription || !email) {
			logger.error(new Error('Subscription or email not found'))
			throw new Error('Subscription or email not found')
		}

		const product = await courseBuilderAdapter.getProduct(
			subscription.productId,
		)

		logger.debug('Got product', { product })
		return {
			subscription: convertToSerializeForNextResponse(subscription),
			email,
			product: convertToSerializeForNextResponse(product) || null,
			stripeProductName,
		}
	} catch (error) {
		logger.error(error as Error)
		notFound()
	}
}

const LoginLinkComp: React.FC<{ email: string }> = ({ email }) => {
	return (
		<LoginLink.Root email={email} className="border-b pb-5">
			<LoginLink.Status />
			<LoginLink.Title />
			<LoginLink.CTA className="mt-4 inline-flex items-center gap-3">
				<div className="bg-primary/20 text-primary flex h-10 w-10 items-center justify-center rounded-full p-3">
					<Mail className="h-4 w-4" />
				</div>
				<span>
					Login link sent to: <strong className="font-semibold">{email}</strong>
				</span>
			</LoginLink.CTA>
			<LoginLink.Description className="text-sm opacity-75 sm:text-base" />
		</LoginLink.Root>
	)
}

export default async function ThanksSubscriptionPage(props: {
	searchParams: Promise<{ session_id: string; provider: string }>
}) {
	const searchParams = await props.searchParams
	await headers()

	const { session_id } = searchParams

	return (
		<Suspense fallback={<PageLoading />}>
			<SubscriptionThanksPageLoaded session_id={session_id} />
		</Suspense>
	)
}

function PageLoading() {
	return (
		<main className="container min-h-[calc(100vh-var(--nav-height))] border-x px-5 py-8 sm:py-16">
			<div className="mx-auto flex w-full max-w-4xl flex-col gap-5">
				<h1 className="text-center text-lg font-medium sm:text-xl lg:text-2xl">
					Validating Your Subscription, Hang Tight...
				</h1>
				<div className="mx-auto">
					<Spinner className="text-center" />
				</div>
			</div>
		</main>
	)
}

async function SubscriptionThanksPageLoaded({
	session_id,
}: {
	session_id: string
}) {
	const token = await getServerAuthSession()

	const { subscription, email, product, stripeProductName } =
		await getServerSideProps(session_id)

	if (email === token?.session?.user?.email) {
		logger.debug('User already logged in, redirecting to welcome page', {
			subscriptionId: subscription.id,
		})
		return redirect('/welcome?subscriptionId=' + subscription.id)
	}

	const title = `Thank you for subscribing to ${stripeProductName}`
	const loginLink = <LoginLinkComp email={email} />

	return (
		<main className="container min-h-[calc(100vh-var(--nav-height))] border-x px-5 py-8 sm:py-16">
			<div className="mx-auto flex w-full max-w-4xl flex-col gap-5">
				<PurchaseSummary.Root title={title} product={product} email={email}>
					<div className="flex flex-col items-center gap-10 sm:flex-row">
						<PurchaseSummary.ProductImage />
						<div className="flex w-full flex-col items-start">
							<PurchaseSummary.Status />
							<PurchaseSummary.Title />
							<PurchaseSummary.Description />
						</div>
					</div>
				</PurchaseSummary.Root>
				{loginLink}
			</div>
		</main>
	)
}
