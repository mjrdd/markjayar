<script lang="ts">
	import { MetaTags } from "svelte-meta-tags";
	import Socials from "./Socials.svelte";
</script>

<MetaTags title="markjayar" description="Welcome to markjayar" />

<div class="wrapper">
	<div class="flex flex-col justify-center bg-black">
		<div class="my-6 mx-auto w-full max-w-screen-lg p-6 text-center md:text-left">
			<h1 class="select-none text-2xl font-light tracking-[0.5em] sm:tracking-[1em] md:text-4xl">
				markjayar
			</h1>
			<div class="my-10">
				<Socials />
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.wrapper > * {
		@apply relative;
		height: 100vh;
		height: 100dvh;
		background: conic-gradient(
			hsl(202 80% 24% / 0.15),
			hsl(224 64% 33% / 0.15),
			hsl(242 47% 34% / 0.15),
			hsl(264 67% 35% / 0.15),
			hsl(274 66% 32% / 0.15),
			hsl(297 64% 28% / 0.15),
			hsl(336 69% 30% / 0.15),
			hsl(342 75% 30% / 0.15),
			hsl(342 75% 30% / 0.15),
			hsl(336 69% 30% / 0.15),
			hsl(297 64% 28% / 0.15),
			hsl(274 66% 32% / 0.15),
			hsl(264 67% 35% / 0.15),
			hsl(242 47% 34% / 0.15),
			hsl(224 64% 33% / 0.15),
			hsl(202 80% 24% / 0.15)
		);
		background-size: 800% 800%;
		animation: bg-conic-gradient-animation 30s ease infinite;

		&::before {
			@apply absolute inset-0 -z-10 bg-black;
			content: "";
		}
	}

	@keyframes bg-conic-gradient-animation {
		0%,
		100% {
			background-position: 20% 20%;
		}
		25% {
			background-position: 80% 20%;
		}
		50% {
			background-position: 80% 80%;
		}
		75% {
			background-position: 20% 80%;
		}
	}

	h1 {
		@apply text-transparent;
		background: linear-gradient(
			to right,
			theme("colors.purple.400"),
			theme("colors.purple.300"),
			theme("colors.purple.200"),
			theme("colors.pink.200"),
			theme("colors.pink.300"),
			theme("colors.pink.400")
		);
		background-clip: text;
		background-size: 400% 400%;
		animation: bg-linear-gradient-animation 30s ease infinite;
	}

	@keyframes bg-linear-gradient-animation {
		0%,
		100% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
	}
</style>
