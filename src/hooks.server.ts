import { sequence } from "@sveltejs/kit/hooks";
import type { Handle } from "@sveltejs/kit";

const socials: Handle = ({ event, resolve }) => {
	const socials: { [key: string]: string } = {
		youtube: "https://www.youtube.com/channel/UCn_0Rcmn415xw9cDp_py6dA",
		twitter: "https://twitter.com/mjayar95",
		instagram: "https://www.instagram.com/mjayardev",
		twitch: "https://www.twitch.tv/markjayar",
		github: "https://github.com/mjrdd",
		tiktok: "https://www.tiktok.com/@mjayar95"
	};

	const path = event.url.pathname.substring(1);

	if (socials[path]) {
		return new Response(null, {
			status: 303,
			headers: {
				location: socials[path]
			}
		});
	}

	return resolve(event);
};

export const handle = sequence(socials);
