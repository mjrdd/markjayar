<script lang="ts">
	import { onMount } from "svelte";
	import { createBackground } from "$lib/background";
	import Socials from "./Socials.svelte";

	let canvas: HTMLCanvasElement;

	onMount(() => {
		createBackground(canvas);
	});
</script>

<svelte:head>
	<title>markjayar</title>
	<meta name="description" content="Welcome to markjayar" />
</svelte:head>

<canvas bind:this={canvas} />

<section>
	<div>
		<h1>markjayar</h1>
		<Socials />
	</div>
</section>

<style lang="postcss">
	canvas {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		width: 100vw;
		height: 100vh;
	}

	section {
		display: grid;
		place-items: center;
		height: 100vh;
		color: #fff;
	}

	h1 {
		transition: all 0.3s ease-in-out;
		margin-bottom: 1.5rem;
		font-weight: 600;
		font-size: 2rem;
		letter-spacing: 1em;
		text-align: center;
		text-indent: 1em;

		@media (min-width: 768px) {
			font-size: 3rem;
		}
	}
</style>
