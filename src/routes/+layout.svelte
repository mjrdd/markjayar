<script lang="ts">
	import "@mjrdd/inter";
	import "../app.css";
</script>

<div class="app">
	<slot />
</div>

<style lang="postcss">
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		min-height: 100dvh;
	}
</style>
