<script lang="ts">
	import type { PageServerData } from "./$types";

	export let data: PageServerData;

	$: console.log(data);
</script>

<svelte:head>
	<title>Admin | Dashboard</title>
</svelte:head>

<div class="container mx-auto p-8">
	<div class="flex justify-end space-x-2">
		<form method="POST" action="/logout?redirectTo=/admin/login" class="contents">
			<button
				type="submit"
				class="lea inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
				Log out
			</button>
		</form>
	</div>

	<div class="flex flex-col">
		<div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
				<div class="overflow-hidden">
					<table class="min-w-full">
						<thead class="border-b bg-white">
							<tr>
								<th class="px-6 py-4 text-left text-sm font-medium text-gray-900">ID</th>
								<th class="px-6 py-4 text-left text-sm font-medium text-gray-900">NAME</th>
								<th class="px-6 py-4 text-left text-sm font-medium text-gray-900">URL</th>
							</tr>
						</thead>
						<tbody>
							{#each data.officialUrls ?? [] as item}
								<tr class="border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100">
									<td class="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
										{item.id}
									</td>
									<td class="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
										{item.name}
									</td>
									<td class="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
										{item.url}
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

<style lang="postcss">
	header {
		display: flex;
		flex-wrap: nowrap;
		justify-content: flex-end;
		align-items: center;
		padding: 1rem 1.5rem;
	}

	.app-content {
		flex-grow: 1;
	}

	.table-wrapper {
		width: 100%;
		overflow-x: auto;
	}

	table {
		margin: auto;
		border: 1px solid #ddd;
		border-collapse: collapse;
		background-color: #fafafa;
	}

	thead tr {
		background-color: #eee;
	}

	th,
	td {
		padding: 0.5rem 0.75rem;
	}
</style>
