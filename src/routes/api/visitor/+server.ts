import { ClientResponseError } from "pocketbase";
import type { RequestHandler } from "./$types";

export const POST = (async ({ locals, getClientAddress }) => {
	const COLLECTION_NAME = "visitors";
	const collection = locals.pb.collection(COLLECTION_NAME);
	const clientAddress = getClientAddress();

	try {
		const record = await collection.getFirstListItem(`ip_address="${clientAddress}"`);

		if (!record) {
			await collection.create({
				ip_address: getClientAddress()
			});
		}

		return new Response(undefined, { status: 200 });
	} catch (err) {
		if (err instanceof ClientResponseError) {
			return new Response(err.message, { status: err.status });
		}

		return new Response(undefined, { status: 500 });
	}
}) satisfies RequestHandler;
