import type { LayoutServerLoad } from "./$types";

export const load = (({ locals, getClientAddress }) => {
	locals.pb.collection("visitors").create({
		ip_address: getClientAddress()
	});
}) satisfies LayoutServerLoad;
