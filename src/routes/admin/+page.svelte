<script lang="ts">
	import type { PageServerData } from "./$types";
	import ModalAddRecord from "./ModalAddRecord.svelte";

	export let data: PageServerData;

	let showModal = false;
</script>

<svelte:head>
	<title>Admin | Dashboard</title>
</svelte:head>

<div class="container mx-auto p-8">
	<ModalAddRecord bind:showModal />

	<div class="flex justify-end gap-4">
		<button
			on:click={() => (showModal = true)}
			class="inline-block rounded border border-solid border-gray-100 px-6 py-2.5 text-xs font-medium uppercase text-gray-900 shadow-md transition duration-150 ease-in-out hover:bg-gray-200 hover:shadow-lg focus:bg-gray-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-200 active:shadow-lg">
			Add
		</button>
		<form method="POST" action="/logout?redirectTo=/admin/login" class="contents">
			<button
				type="submit"
				class="inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
				Log out
			</button>
		</form>
	</div>

	<div class="flex flex-col">
		<div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
				<div class="overflow-hidden">
					<table class="min-w-full">
						<thead class="border-b bg-gray-50">
							<tr>
								<th class="px-6 py-4 text-left font-medium text-gray-900">ID</th>
								<th class="px-6 py-4 text-left font-medium text-gray-900">NAME</th>
								<th class="px-6 py-4 text-left font-medium text-gray-900">URL</th>
								<th class="px-6 py-4 text-left font-medium text-gray-900">ACTIONS</th>
							</tr>
						</thead>
						<tbody>
							{#each data.officialUrls ?? [] as item}
								<tr class="border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100">
									<td class="whitespace-nowrap px-6 py-4 font-light text-gray-900">
										{item.id}
									</td>
									<td class="whitespace-nowrap px-6 py-4 font-light text-gray-900">
										{item.name}
									</td>
									<td class="whitespace-nowrap px-6 py-4 font-light text-gray-900">
										<a href={item.url} class="text-blue-700 hover:underline">{item.url}</a>
									</td>
									<td class="px-6 py-4">
										<form method="POST" action="?/deleteRecord&id={item.id}" class="contents">
											<button type="submit" class="hover:text-red-600">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="1em"
													height="1em"
													viewBox="0 0 24 24">
													<path
														fill="currentColor"
														d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12Z" />
												</svg>
											</button>
										</form>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>
