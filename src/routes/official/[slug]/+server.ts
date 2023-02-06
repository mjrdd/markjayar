import { ClientResponseError } from "pocketbase";
import type { RequestHandler } from "./$types";

export const GET = (async ({ locals, params }) => {
	const COLLECTION_NAME = "official_urls";
	const collection = locals.pb.collection(COLLECTION_NAME);

	try {
		const record = await collection.getFirstListItem(`name="${params.slug}"`);

		return new Response(undefined, {
			status: 303,
			headers: { location: record.url }
		});
	} catch (err) {
		if (err instanceof ClientResponseError) {
			return new Response(err.message, { status: err.status });
		}

		return new Response(undefined, { status: 500 });
	}
}) satisfies RequestHandler;
