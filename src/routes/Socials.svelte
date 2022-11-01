<div class="flex flex-wrap justify-center gap-3 md:justify-start">
	{#each ["youtube #ff0000", "twitter #00acee", "instagram #bc2a8d", "twitch #6441a5", "github #171515", "tiktok #ff0050"] as socials}
		{@const [name, color] = socials.split(" ")}
		<a
			href="/{name}"
			aria-label={name}
			title={name}
			style:--text-color={color}
			class="grid h-10 w-10 place-items-center rounded-full text-neutral-300 transition-transform hover:-translate-y-1 hover:bg-white hover:bg-opacity-10 hover:text-[var(--text-color)] hover:text-blue-600">
			<iconify-icon icon="bi:{name}" />
		</a>
	{/each}
</div>
