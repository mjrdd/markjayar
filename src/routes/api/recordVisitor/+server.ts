import { ClientResponseError } from "pocketbase";
import type { RequestHandler } from "./$types";

export const POST = (async ({ locals, getClientAddress }) => {
	try {
		await locals.pb.collection("visitors").create({
			ip_address: getClientAddress()
		});

		return new Response(null, { status: 200 });
	} catch (err) {
		if (err instanceof ClientResponseError) {
			return new Response(err.message, { status: err.status });
		}

		return new Response(null, { status: 500 });
	}
}) satisfies RequestHandler;
