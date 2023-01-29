import { Admin } from "pocketbase";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (async ({ locals }) => {
	if (!locals.pb.authStore.model) {
		throw redirect(303, "/admin/login");
	}

	if (!(locals.pb.authStore.model instanceof Admin)) {
		throw redirect(303, "/");
	}

	try {
		const records = await locals.pb.collection("official_urls").getList(1, 20);

		const list = records.items.map((record) => {
			return { id: record.id, name: record.name, url: record.url };
		});

		return {
			officialUrls: list
		};
	} catch (err) {
		console.log(err);
	}
}) satisfies PageServerLoad;
