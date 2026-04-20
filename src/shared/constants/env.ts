export const PUBLIC_URL_BUCKET = import.meta.env.PUBLIC_URL_BUCKET ?? ''

if (!PUBLIC_URL_BUCKET) {
	console.warn(
		'[env] PUBLIC_URL_BUCKET is not defined. Images may not load correctly.'
	)
}
