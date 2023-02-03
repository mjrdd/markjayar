import { z } from "zod";
import { Admin, ClientResponseError } from "pocketbase";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load = (async ({ locals }) => {
	if (locals.pb.authStore.model) {
		throw redirect(303, locals.pb.authStore.model instanceof Admin ? "/admin" : "/");
	}
}) satisfies PageServerLoad;

const dataSchema = z.object({
	email: z.string().email().min(10),
	password: z.string()
});

export const actions: Actions = {
	default: async ({ locals, request }) => {
		const data = Object.fromEntries(await request.formData()) as z.infer<typeof dataSchema>;

		try {
			dataSchema.parse(data);
			await locals.pb.admins.authWithPassword(data.email, data.password);
		} catch (err) {
			if (err instanceof z.ZodError) {
				return fail(400, { email: data.email, ...err.flatten() });
			}

			if (err instanceof ClientResponseError) {
				return fail(err.status, { email: data.email, message: err.message });
			}
		}

		throw redirect(303, "/admin");
	}
};
