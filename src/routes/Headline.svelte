<script lang="ts">
	export let label = "";

	$: chars = label.split("");
</script>

<h1
	class="my-8 flex select-none justify-center text-2xl font-light md:justify-start md:gap-4 md:text-5xl md:leading-normal">
	{#each chars as ch}
		<span class="w-10 text-center align-middle hover:font-bold">{ch}</span>
	{/each}
</h1>

<style lang="postcss">
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
		animation: bg-linear-gradient-animation 15s ease infinite;
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
