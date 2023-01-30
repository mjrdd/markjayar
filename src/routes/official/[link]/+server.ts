import { ClientResponseError } from "pocketbase";
import type { RequestHandler } from "./$types";

export const GET = (async ({ locals, params }) => {
	try {
		const record = await locals.pb.collection("official_urls").getFirstListItem(`name="${params.link}"`);

		return new Response(null, {
			status: 303,
			headers: {
				location: record.url
			}
		});
	} catch (err) {
		if (err instanceof ClientResponseError) {
			return new Response(err.message, {
				status: err.status
			});
		}

		return new Response(null, {
			status: 500
		});
	}
}) satisfies RequestHandler;
