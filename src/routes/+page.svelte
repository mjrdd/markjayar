<script lang="ts">
	import Socials from "./Socials.svelte";
</script>

<svelte:head>
	<title>markjayar</title>
	<meta name="description" content="Welcome to markjayar" />
</svelte:head>

<section>
	<div>
		<h1>markjayar</h1>
		<Socials />
	</div>
</section>

<style lang="postcss">
	section {
		display: grid;
		place-items: center;
		height: 100vh;
	}

	h1 {
		transition: all 0.3s ease-in-out;
		margin-bottom: 1.5rem;
		font-weight: 200;
		font-size: 2rem;
		letter-spacing: 1em;
		text-align: center;
		text-indent: 1em;

		@media (min-width: 768px) {
			font-size: 3rem;
		}
	}
</style>
