<script lang="ts">
	import { onMount } from "svelte";
	import { createBackgroundScene } from "./backgroundScene";
	import Socials from "./Socials.svelte";

	let canvasElement: HTMLCanvasElement;
	let scene: ReturnType<typeof createBackgroundScene>;

	onMount(() => {
		scene = createBackgroundScene(canvasElement);

		return () => {
			scene.destroy();
		};
	});
</script>

<svelte:head>
	<title>markjayar</title>
	<meta name="description" content="Welcome to markjayar" />
</svelte:head>

<canvas class="fixed inset-0 -z-10 bg-transparent" bind:this={canvasElement} />

<section class="flex h-screen items-center justify-center">
	<div class="my-1 w-full max-w-max rounded bg-black bg-opacity-50 py-4 px-6 text-white">
		<h1
			class="mb-6 text-center indent-[4vw] text-[min(6vw,3rem)] font-bold tracking-[4vw] transition-all">
			markjayar
		</h1>
		<Socials />
	</div>
</section>
