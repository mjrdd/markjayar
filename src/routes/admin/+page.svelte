<script lang="ts">
	import type { PageServerData } from "./$types";

	export let data: PageServerData;

	$: console.log(data);
</script>

<svelte:head>
	<title>Admin | Dashboard</title>
</svelte:head>

<header class="navbar">
	<div>
		<span>Admin</span>
	</div>
	<div>
		<form method="POST" action="/logout?redirectTo=/admin/login" style="display: contents">
			<button type="submit" class="nav-btn">Log out</button>
		</form>
	</div>
</header>

<div class="app-content">
	<div>
		<button>Add</button>
	</div>

	<div class="table-wrapper">
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>NAME</th>
					<th>URL</th>
				</tr>
			</thead>
			<tbody>
				{#each data.officialUrls ?? [] as item}
					<tr>
						<td>{item.id}</td>
						<td>{item.name}</td>
						<td><a href={item.url}>{item.url}</a></td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<style lang="postcss">
	.navbar {
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		background-color: blueviolet;
		height: 4rem;
		color: white;
	}

	.navbar > * {
		display: flex;
		align-items: center;
		padding: 0 1.5rem;
	}

	.nav-btn {
		cursor: pointer;
		border: 1px solid transparent;
		border-radius: 4px;
		background-color: transparent;
		padding: 0.5rem 0.75rem;
		color: inherit;

		&:hover {
			background-color: hsla(0 0% 0% / 0.2);
		}
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
