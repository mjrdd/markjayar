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
			payload: ~~(Math.random() * 10) + 40
		});
	}
</script>

<svelte:head>
	<title>Sudoku</title>
</svelte:head>

<div class="page">
	<section>
		<div class="board-wrapper">
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
		gap: 1rem;
		margin: 0 1rem;
	}

	.board-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	canvas {
		aspect-ratio: 1 / 1;
		width: min(100%, 520px);
	}

	aside {
		display: flex;
		justify-content: center;
		gap: 1em;
		width: min(100%, max-content);
	}

	button {
		cursor: pointer;
		border: 1px solid hsl(0 0% 85%);
		border-radius: 2px;
		background-color: hsl(0 0% 95%);
		padding: 0.5rem 0.75rem;
		font-size: inherit;

		&:hover {
			background-color: hsl(0 0% 90%);
		}
	}
</style>
