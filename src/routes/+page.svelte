<script lang="ts">
	import { onMount } from "svelte";
	import { createScene } from "./lib/scene3d/background";
	import Socials from "./Socials.svelte";

	let canvasElement: HTMLCanvasElement;

	onMount(() => {
		const { destroy } = createScene(canvasElement);

		return () => {
			destroy();
		};
	});
</script>

<svelte:head>
	<title>markjayar</title>
	<meta name="description" content="Welcome to markjayar" />
</svelte:head>

<canvas bind:this={canvasElement} />

<section>
	<div class="card">
		<h1>markjayar</h1>
		<Socials />
	</div>
</section>

<style lang="postcss">
	canvas {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
		background: transparent;
	}

	section {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		height: 100dvh;
	}

	.card {
		margin: 0 4px;
		border-radius: 4px;
		background-color: hsla(0 0% 0% / 0.5);
		padding: 1rem 1.5rem;
		width: min(100%, max-content);
		color: #fff;
	}

	h1 {
		transition: all 0.3s ease-in-out;
		margin-bottom: 1.5rem;
		font-weight: 600;
		font-size: min(6vw, 3rem);
		letter-spacing: 4vw;
		text-align: center;
		text-indent: 4vw;
	}
</style>
