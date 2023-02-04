import type { LayoutServerLoad } from "./$types";

export const load = (async ({ locals, getClientAddress }) => {
	try {
		await locals.pb.collection("visitors").create({
			ip_address: getClientAddress()
		});
	} catch (err) {
		console.log(err);
	}
}) satisfies LayoutServerLoad;
