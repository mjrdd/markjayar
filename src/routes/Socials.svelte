<script lang="ts">
	import Icon, { addCollection } from "@iconify/svelte";
	import GithubIcon from "@iconify-icons/bi/github";
	import InstagramIcon from "@iconify-icons/bi/instagram";
	import TiktokIcon from "@iconify-icons/bi/tiktok";
	import TwitchIcon from "@iconify-icons/bi/twitch";
	import TwitterIcon from "@iconify-icons/bi/twitter";
	import YoutubeIcon from "@iconify-icons/bi/youtube";

	addCollection({
		prefix: "bi",
		icons: {
			github: GithubIcon,
			instagram: InstagramIcon,
			tiktok: TiktokIcon,
			twitch: TwitchIcon,
			twitter: TwitterIcon,
			youtube: YoutubeIcon
		}
	});

	const socials = [
		{ name: "youtube", color: "#ff0000" },
		{ name: "twitter", color: "#00acee" },
		{ name: "instagram", color: "#bc2a8d" },
		{ name: "twitch", color: "#6441a5" },
		{ name: "github", color: "#171515" },
		{ name: "tiktok", color: "#ff0050" }
	];
</script>

<div class="flex flex-wrap justify-center gap-3" data-sveltekit-preload-data="off">
	{#each socials as { name, color }}
		<a
			href="/{name}"
			style="--hover-color: {color}"
			class="grid aspect-square w-10 place-items-center rounded-full hover:bg-white hover:bg-opacity-25 hover:text-[var(--hover-color)] md:w-11 md:text-lg">
			<Icon icon="bi:{name}" />
		</a>
	{/each}
</div>
