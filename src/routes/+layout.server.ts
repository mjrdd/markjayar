import type { LayoutServerLoad } from "./$types";

export const load = (async ({ fetch }) => {
	try {
		await fetch("/api/recordVisitor", {
			method: "POST"
		});
	} catch (err) {
		console.log(err);
	}
}) satisfies LayoutServerLoad;
