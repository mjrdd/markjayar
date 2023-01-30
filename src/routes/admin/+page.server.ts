import { Admin } from "pocketbase";
import { redirect } from "@sveltejs/kit";
import { map, pick } from "lodash-es";
import type { PageServerLoad } from "./$types";

export const load = (async ({ locals }) => {
	if (!locals.pb.authStore.model) {
		throw redirect(303, "/admin/login");
	}

	if (!(locals.pb.authStore.model instanceof Admin)) {
		throw redirect(303, `/user/${locals.pb.authStore.model.username}`);
	}

	try {
		const records = await locals.pb.collection("official_urls").getList(1, 20);

		return {
			officialUrls: map(records.items, (item) => pick(item, ["id", "name", "url"]))
		};
	} catch (err) {
		console.log(err);
	}
}) satisfies PageServerLoad;
