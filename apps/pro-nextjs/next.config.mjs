/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import createMDX from '@next/mdx'
import { withSentryConfig } from '@sentry/nextjs'
import { withAxiom } from 'next-axiom'

await import('./src/env.mjs')

const withMDX = createMDX({
	// Add markdown plugins here, as desired
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
		providerImportSource: '@mdx-js/react',
	},
})

/** @type {import("next").NextConfig} */
const config = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				port: '',
			},
			{
				protocol: 'https',
				hostname: 'image.mux.com',
				port: '',
			},
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
				port: '',
			},
		],
	},
	pageExtensions: ['mdx', 'ts', 'tsx'],
	transpilePackages: ['@coursebuilder/ui'],
	async redirects() {
		return [...sanityTutorialRedirects]
	},
}

export default withSentryConfig(withAxiom(withMDX(config)), {
	// For all available options, see:
	// https://github.com/getsentry/sentry-webpack-plugin#options

	org: 'skill-recordings',
	project: 'pro-nextjs',

	// Only print logs for uploading source maps in CI
	silent: !process.env.CI,

	// For all available options, see:
	// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

	// Upload a larger set of source maps for prettier stack traces (increases build time)
	widenClientFileUpload: true,

	// Automatically annotate React components to show their full name in breadcrumbs and session replay
	reactComponentAnnotation: {
		enabled: true,
	},

	// Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
	// This can increase your server load as well as your hosting bill.
	// Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
	// side errors will fail.
	tunnelRoute: '/monitoring',

	// Hides source maps from generated client bundles
	hideSourceMaps: true,

	// Automatically tree-shake Sentry logger statements to reduce bundle size
	disableLogger: true,

	// Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
	// See the following for more information:
	// https://docs.sentry.io/product/crons/
	// https://vercel.com/docs/cron-jobs
	automaticVercelMonitors: true,
})

export const sanityTutorialRedirects = [
	// tutorial: forms-management-with-next-js-app-router
	{
		source:
			'/tutorials/forms-management-with-next-js-app-router/forms/intro-to-forms-with-nextjs-app-router',
		destination:
			'/tutorials/forms-management-with-next-js-app-router/intro-to-forms-with-nextjs-app-router',
		permanent: true,
	},
	{
		source:
			'/tutorials/forms-management-with-next-js-app-router/forms/nextjs-app-setup',
		destination:
			'/tutorials/forms-management-with-next-js-app-router/nextjs-app-setup',
		permanent: true,
	},
	{
		source:
			'/tutorials/forms-management-with-next-js-app-router/forms/client-side-form-validation',
		destination:
			'/tutorials/forms-management-with-next-js-app-router/client-side-form-validation',
		permanent: true,
	},
	{
		source:
			'/tutorials/forms-management-with-next-js-app-router/forms/implement-a-route-handler-for-json-post-requests',
		destination:
			'/tutorials/forms-management-with-next-js-app-router/implement-a-route-handler-for-json-post-requests',
		permanent: true,
	},
	{
		source:
			'/tutorials/forms-management-with-next-js-app-router/forms/creating-an-api-route-for-form-data',
		destination:
			'/tutorials/forms-management-with-next-js-app-router/creating-an-api-route-for-form-data',
		permanent: true,
	},
	{
		source:
			'/tutorials/forms-management-with-next-js-app-router/forms/creating-a-server-action-for-form-data',
		destination:
			'/tutorials/forms-management-with-next-js-app-router/creating-a-server-action-for-form-data',
		permanent: true,
	},
	{
		source:
			'/tutorials/forms-management-with-next-js-app-router/forms/implement-a-server-action-for-handling-form-data',
		destination:
			'/tutorials/forms-management-with-next-js-app-router/implement-a-server-action-for-handling-form-data',
		permanent: true,
	},
	{
		source:
			'/tutorials/forms-management-with-next-js-app-router/forms/implement-async-server-side-validation',
		destination:
			'/tutorials/forms-management-with-next-js-app-router/implement-async-server-side-validation',
		permanent: true,
	},
	{
		source:
			'/tutorials/forms-management-with-next-js-app-router/forms/wrapping-up-the-forms-tutorial',
		destination:
			'/tutorials/forms-management-with-next-js-app-router/wrapping-up-the-forms-tutorial',
		permanent: true,
	},
	// tutorial: state-management
	{
		source:
			'/tutorials/state-management/state-management-with-react-context/intro-to-state-management-with-next-js-app-router',
		destination:
			'/tutorials/state-management/intro-to-state-management-with-next-js-app-router',
		permanent: true,
	},
	{
		source:
			'/tutorials/state-management/state-management-with-react-context/add-cart-support-with-react-context',
		destination:
			'/tutorials/state-management/add-cart-support-with-react-context',
		permanent: true,
	},
	{
		source:
			'/tutorials/state-management/state-management-with-react-context/add-cart-support-with-react-context/exercise',
		destination:
			'/tutorials/state-management/add-cart-support-with-react-context/exercise',
		permanent: true,
	},
	{
		source:
			'/tutorials/state-management/state-management-with-react-context/add-cart-support-with-react-context/solution',
		destination:
			'/tutorials/state-management/add-cart-support-with-react-context/solution',
		permanent: true,
	},
	{
		source:
			'/tutorials/state-management/state-management-with-react-context/initialize-the-cart-with-server-data',
		destination:
			'/tutorials/state-management/initialize-the-cart-with-server-data',
		permanent: true,
	},
	{
		source:
			'/tutorials/state-management/state-management-with-react-context/initialize-the-cart-with-server-data/exercise',
		destination:
			'/tutorials/state-management/initialize-the-cart-with-server-data/exercise',
		permanent: true,
	},
	{
		source:
			'/tutorials/state-management/state-management-with-react-context/initialize-the-cart-with-server-data/solution',
		destination:
			'/tutorials/state-management/initialize-the-cart-with-server-data/solution',
		permanent: true,
	},
	{
		source:
			'/tutorials/state-management/state-management-with-react-context/integrating-user-reviews-and-ratings-into-a-product-detail-page',
		destination:
			'/tutorials/state-management/integrating-user-reviews-and-ratings-into-a-product-detail-page',
		permanent: true,
	},
	{
		source:
			'/tutorials/state-management/state-management-with-react-context/integrating-user-reviews-and-ratings-into-a-product-detail-page/exercise',
		destination:
			'/tutorials/state-management/integrating-user-reviews-and-ratings-into-a-product-detail-page/exercise',
		permanent: true,
	},
	{
		source:
			'/tutorials/state-management/state-management-with-react-context/integrating-user-reviews-and-ratings-into-a-product-detail-page/solution',
		destination:
			'/tutorials/state-management/integrating-user-reviews-and-ratings-into-a-product-detail-page/solution',
		permanent: true,
	},
	{
		source:
			'/tutorials/state-management/redux-for-state-management/using-redux-in-an-app-router-application',
		destination:
			'/tutorials/state-management/using-redux-in-an-app-router-application',
		permanent: true,
	},
	{
		source:
			'/tutorials/state-management/redux-for-state-management/using-redux-in-an-app-router-application/exercise',
		destination:
			'/tutorials/state-management/using-redux-in-an-app-router-application/exercise',
		permanent: true,
	},
	{
		source:
			'/tutorials/state-management/redux-for-state-management/using-redux-in-an-app-router-application/solution',
		destination:
			'/tutorials/state-management/using-redux-in-an-app-router-application/solution',
		permanent: true,
	},
	{
		source:
			'/tutorials/state-management/redux-for-state-management/add-a-review-slice-to-the-redux-store',
		destination:
			'/tutorials/state-management/add-a-review-slice-to-the-redux-store',
		permanent: true,
	},
	{
		source:
			'/tutorials/state-management/redux-for-state-management/add-a-review-slice-to-the-redux-store/exercise',
		destination:
			'/tutorials/state-management/add-a-review-slice-to-the-redux-store/exercise',
		permanent: true,
	},
	{
		source:
			'/tutorials/state-management/redux-for-state-management/add-a-review-slice-to-the-redux-store/solution',
		destination:
			'/tutorials/state-management/add-a-review-slice-to-the-redux-store/solution',
		permanent: true,
	},
	{
		source:
			'/tutorials/state-management/zustand-for-state-management/state-management-with-zustand',
		destination: '/tutorials/state-management/state-management-with-zustand',
		permanent: true,
	},
	{
		source:
			'/tutorials/state-management/zustand-for-state-management/state-management-with-zustand/exercise',
		destination:
			'/tutorials/state-management/state-management-with-zustand/exercise',
		permanent: true,
	},
	{
		source:
			'/tutorials/state-management/zustand-for-state-management/state-management-with-zustand/solution',
		destination:
			'/tutorials/state-management/state-management-with-zustand/solution',
		permanent: true,
	},
	{
		source:
			'/tutorials/state-management/jotai-for-state-management/the-atomic-model-of-state-management-with-jotai',
		destination:
			'/tutorials/state-management/the-atomic-model-of-state-management-with-jotai',
		permanent: true,
	},
	{
		source:
			'/tutorials/state-management/jotai-for-state-management/the-atomic-model-of-state-management-with-jotai/exercise',
		destination:
			'/tutorials/state-management/the-atomic-model-of-state-management-with-jotai/exercise',
		permanent: true,
	},
	{
		source:
			'/tutorials/state-management/jotai-for-state-management/the-atomic-model-of-state-management-with-jotai/solution',
		destination:
			'/tutorials/state-management/the-atomic-model-of-state-management-with-jotai/solution',
		permanent: true,
	},
	{
		source:
			'/tutorials/state-management/outro/summarizing-state-management-options-in-next-js-app-router',
		destination:
			'/tutorials/state-management/summarizing-state-management-options-in-next-js-app-router',
		permanent: true,
	},
]
