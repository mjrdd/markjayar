import { redirect, type Handle } from "@sveltejs/kit";

const redirects: {
	[key: string]: string;
} = {
	"/youtube": "https://www.youtube.com/channel/UCn_0Rcmn415xw9cDp_py6dA",
	"/twitter": "https://twitter.com/mjayar95",
	"/instagram": "https://www.instagram.com/mjayardev",
	"/twitch": "https://www.twitch.tv/markjayar",
	"/github": "https://github.com/mjrdd",
	"/tiktok": "https://www.tiktok.com/@mjayar95"
};

export const handle: Handle = async ({ event, resolve }) => {
	const path = event.url.pathname;

	if (path in redirects) {
		throw redirect(303, redirects[path]);
	}

	return resolve(event);
};
