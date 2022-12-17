import { redirect, type Handle } from "@sveltejs/kit";

const redirects: Record<string, string> = {
	"/youtube": "https://www.youtube.com/@mjayar7432",
	"/twitter": "https://twitter.com/mjayar95",
	"/instagram": "https://www.instagram.com/mjayardev",
	"/twitch": "https://www.twitch.tv/markjayar",
	"/github": "https://github.com/mjrdd",
	"/tiktok": "https://www.tiktok.com/@mjayar95"
};

export const handle = (async ({ event, resolve }) => {
	const path = event.url.pathname;

	if (path in redirects) {
		throw redirect(308, redirects[path]);
	}

	return resolve(event);
}) satisfies Handle;
