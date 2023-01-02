<script lang="ts">
	import SudokuWorker from "./worker?worker";
	import { download, show, view } from "./game";

	const worker = new SudokuWorker();
	let loading = false;

	worker.addEventListener("message", (e) => {
		show(e.data as number[][]);
		loading = false;
	});

	function generate() {
		if (loading) return;
		loading = true;

		worker.postMessage({
			key: "generate",
			payload: ~~(Math.random() * 15) + 30
		});
	}
</script>

<svelte:head>
	<title>Sudoku</title>
</svelte:head>

<div class="page">
	<section>
		<div>
			<canvas use:view />
		</div>
		<aside>
			<button on:click={generate} disabled={loading}>Generate</button>
			<button on:click={download}>Download</button>
		</aside>
	</section>
</div>

<style lang="postcss">
	.page {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		min-height: 100dvh;
	}

	section {
		display: grid;
		margin: 0 1rem;
	}

	canvas {
		width: 560px;
		height: 560px;
	}

	aside {
		display: flex;
		gap: 1em;
		width: min(100%, max-content);
	}
</style>
