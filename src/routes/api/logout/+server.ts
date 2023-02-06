import { redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const POST = (({ locals, url }) => {
	locals.pb.authStore.clear();
	throw redirect(303, url.searchParams.get("redirectTo") ?? "/");
}) satisfies RequestHandler;
