<script lang="ts">
	import Socials from "./Socials.svelte";
	import Background from "./Background.svelte";
</script>

<svelte:head>
	<title>markjayar</title>
	<meta name="description" content="Welcome to markjayar" />
</svelte:head>

<Background />

<section>
	<div class="card">
		<h1>markjayar</h1>
		<Socials />
	</div>
</section>

<style lang="postcss">
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		color: #fff;
	}

	.card {
		background-color: hsla(0 0% 0% / 0.45);
		padding: 1.2rem;
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
