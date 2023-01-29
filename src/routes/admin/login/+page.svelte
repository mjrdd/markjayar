<script lang="ts">
	import "$styles/auth-form.css";
	import type { ActionData } from "./$types";

	export let form: ActionData;
</script>

<div class="page-container">
	<div class="auth-form">
		<form method="POST" style="display: contents;">
			<div class="form-field">
				<label for="email">Email Address</label>
				<input
					type="email"
					name="email"
					id="email"
					autocomplete="off"
					required
					aria-required="true"
					value={form?.email ?? ""} />
			</div>
			<div class="form-errors">
				<ul>
					{#each form?.fieldErrors ?? [] as errors}
						<li>{errors}</li>
					{/each}
				</ul>
			</div>

			<div class="form-field">
				<label for="password">Password</label>
				<input
					type="password"
					name="password"
					id="password"
					autocomplete="off"
					required
					aria-required="true" />
			</div>

			<button type="submit">Log in</button>
		</form>
	</div>
</div>

<style lang="postcss">
	.page-container {
		display: flex;
		flex-grow: 1;
		justify-content: center;
		align-items: center;
	}
</style>
