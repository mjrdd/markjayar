<script lang="ts">
	import { fade, fly } from "svelte/transition";

	export let showModal = false;

	function onKeyboardEscape(event: KeyboardEvent) {
		if (showModal && event.key === "Escape") {
			showModal = false;
		}
	}

	function onBackdropInteraction(event: MouseEvent | TouchEvent) {
		if (event.target instanceof Element && event.target.classList.contains("modal-backdrop")) {
			showModal = false;
		}
	}
</script>

<svelte:window on:keydown={onKeyboardEscape} />

{#if showModal}
	<div
		on:mousedown={onBackdropInteraction}
		on:touchstart={onBackdropInteraction}
		transition:fade
		class="modal-backdrop fixed top-0 left-0 flex h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-600 bg-opacity-50">
		<div transition:fly={{ opacity: 0, y: 50 }} class="flex w-full max-w-lg flex-col rounded-md bg-white shadow-lg">
			<form method="POST" action="?/addUrl" class="contents">
				<div class="flex flex-shrink-0 items-center justify-between rounded-t-md p-4">
					<h5 class="text-xl font-medium leading-normal text-gray-800">Add record</h5>
				</div>
				<div class="p-4">
					<div class="mb-4">
						<label for="inputName" class="mb-2 inline-block text-gray-700">Name</label>
						<input
							type="text"
							name="name"
							id="inputName"
							class="m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-700 focus:bg-white focus:text-gray-700 focus:outline-none" />
					</div>
					<div class="mb-4">
						<label for="inputUrl" class="mb-2 inline-block text-gray-700">URL</label>
						<input
							type="text"
							name="url"
							id="inputUrl"
							class="m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-700 focus:bg-white focus:text-gray-700 focus:outline-none" />
					</div>
				</div>
				<div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md p-4">
					<button
						type="submit"
						on:click={() => console.log("HELLO")}
						class="inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
						Save
					</button>
				</div>
			</form>
		</div>
	</div>
{/if}
