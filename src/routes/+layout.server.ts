import { POCKETBASE_URL } from "$env/static/private";
import type { LayoutServerLoad } from "./$types";

export const load = (async ({ fetch, getClientAddress }) => {
	try {
		const res = await fetch(`${POCKETBASE_URL}/api/collections/visitors/records`, {
			method: "POST",
			body: JSON.stringify({ ip_address: getClientAddress() }),
			headers: {
				"Content-Type": "application/json"
			}
		});

		console.log(res.ok);
	} catch (err) {
		console.log(err);
	}

	return {
		ip: getClientAddress()
	};
}) satisfies LayoutServerLoad;
