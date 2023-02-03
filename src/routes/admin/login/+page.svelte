<script lang="ts">
	import "$styles/authForm.css";
	import type { ActionData } from "./$types";

	export let form: ActionData;

	$: console.log(form);
</script>

<div class="page-container">
	<div class="auth-form form-container">
		<h1>Admin Login</h1>
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

			<button type="submit" class="btn-submit">
				<span>Login</span>
				<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
					<path
						fill="currentColor"
						fill-rule="evenodd"
						d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
				</svg>
			</button>
		</form>
	</div>
</div>

<style lang="postcss">
	.page-container {
		display: flex;
		flex-grow: 1;
		justify-content: center;
	}
</style>
