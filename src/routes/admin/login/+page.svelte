<script lang="ts">
	import "$styles/authForm.css";
	import type { ActionData } from "./$types";

	export let form: ActionData;
	$: console.log(form);
</script>

<div class="page-container">
	<div class="auth-form form-container">
		<form method="POST">
			<label class="form-field">
				<span>Email Address</span>
				<input
					type="email"
					name="email"
					autocomplete="off"
					required
					value={form?.email ?? ""}
					aria-autocomplete="none"
					aria-required="true" />
			</label>

			<label class="form-field">
				<span>Password</span>
				<input
					type="password"
					name="password"
					autocomplete="off"
					required
					aria-autocomplete="none"
					aria-required="true" />
			</label>

			<button type="submit" class="btn btn-primary form-submit-btn">Log in</button>
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
