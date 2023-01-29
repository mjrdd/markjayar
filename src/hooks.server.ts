import type { Handle } from "@sveltejs/kit";
import { POCKETBASE_URL } from "$env/static/private";
import PocketBase, { Admin } from "pocketbase";

export const handle = (async ({ event, resolve }) => {
	event.locals.pb = new PocketBase(POCKETBASE_URL);
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "");

	try {
		if (!event.locals.pb.authStore.isValid) {
			throw 403;
		}

		event.locals.pb.authStore.model instanceof Admin
			? event.locals.pb.admins.authRefresh()
			: event.locals.pb.collection("users").authRefresh();
	} catch (err) {
		event.locals.pb.authStore.clear();
	}

	const response = await resolve(event);

	response.headers.append("set-cookie", event.locals.pb.authStore.exportToCookie());

	return response;
}) satisfies Handle;
