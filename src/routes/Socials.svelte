<div class="flex flex-wrap justify-center gap-6 md:justify-start">
	{#each ["youtube", "twitter", "instagram", "twitch", "github", "tiktok"] as name}
		<a
			href="/{name}"
			rel="external"
			aria-label={name}
			title={name}
			class="text-neutral-300 hover:text-blue-600">
			<iconify-icon icon="bi:{name}" class="text-sm" />
		</a>
	{/each}
</div>
