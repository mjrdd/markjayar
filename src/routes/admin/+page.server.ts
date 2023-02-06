import { z } from "zod";
import { Admin } from "pocketbase";
import { map, pick } from "lodash-es";
import { customAlphabet } from "nanoid/async";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

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

const addUrlSchema = z.object({
	name: z.string(),
	url: z.string().url()
});

const ID_CHARS = "0123456789abcdefghijklmnopqrstuvwxyz";
const ID_LENGTH = 10;
const nanoid = customAlphabet(ID_CHARS, ID_LENGTH);

export const actions: Actions = {
	addUrl: async ({ locals, request }) => {
		const data = Object.fromEntries(await request.formData()) as z.infer<typeof addUrlSchema>;

		try {
			addUrlSchema.parse(data);

			if (!data.name) {
				data.name = await nanoid();
			}

			await locals.pb.collection("official_urls").create(data);
		} catch (err) {
			console.log(err);
		}
	},

	deleteRecord: async ({ locals, url }) => {
		const id = url.searchParams.get("id");

		if (!id) {
			return fail(400);
		}

		try {
			await locals.pb.collection("official_urls").delete(id);
		} catch (err) {
			console.log(err);
		}
	}
};
