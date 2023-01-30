<script lang="ts">
	import type { ActionData } from "./$types";

	export let form: ActionData;
	$: console.log(form);
</script>

<div class="page-container">
	<div class="error-container">
		{#each form?.formErrors ?? [] as errors}
			<div class="alert">{errors}</div>
		{/each}

		{#if form?.message}
			<div class="alert">{form.message}</div>
		{/if}
	</div>

	<div class="form-container">
		<form method="POST" style="display: contents;">
			<label class="form-field">
				<span>Email Address</span>
				<input
					type="email"
					name="email"
					autocomplete="off"
					required
					spellcheck="false"
					value={form?.email ?? ""}
					aria-autocomplete="none"
					aria-required="true" />
			</label>
			{#if form?.fieldErrors?.email && form.fieldErrors.email.length > 0}
				<div class="form-errors">
					<ul>
						{#each form.fieldErrors.email ?? [] as errors}
							<li>{errors}</li>
						{/each}
					</ul>
				</div>
			{/if}

			<label class="form-field">
				<span>Password</span>
				<input type="password" name="password" autocomplete="off" required aria-required="true" />
			</label>

			<button type="submit" class="btn btn-primary">Log in</button>
		</form>
	</div>
</div>

<style lang="postcss">
	.page-container {
		display: flex;
		flex-grow: 1;
		flex-direction: column;
		align-items: center;
	}

	.error-container {
		margin: 3rem 1rem 0;
	}

	.alert {
		border: 1px solid hsl(0 100% 70%);
		border-radius: var(--v-border-radius);
		background-color: hsla(0 100% 90%);
		padding: 1rem 1.5rem;
	}

	.form-container {
		margin-top: 4rem;
		width: 100%;
		max-width: 28rem;
	}

	input[type="email"],
	input[type="password"] {
		margin: 0;
		border: 0;
		background: inherit;
		padding: 0;
		width: 100%;
		font-size: 0.9rem;

		&:focus {
			outline: none;
		}
	}

	.form-field {
		display: block;
		cursor: text;
		margin-top: 1.5rem;
		border: 1px solid transparent;
		border-radius: var(--v-border-radius);
		background-color: hsla(
			var(--v-background-hue) var(--v-background-saturation) calc(var(--v-background-lightness) - 6%)
		);
		padding: 1rem 1.4rem;

		span {
			margin-bottom: 0.4rem;
			font-weight: 600;
			font-size: 0.9rem;
			text-transform: uppercase;
		}

		& > * {
			display: block;
		}

		&:has(input:focus) {
			--q-primary: hsla(var(--v-primary-hue) var(--v-primary-saturation) var(--v-primary-lightness));
			border-color: var(--q-primary);

			span {
				color: var(--q-primary);
			}
		}
	}

	.form-errors {
		color: red;
		font-size: 0.7rem;

		& > ul {
			margin: 0.4rem;
		}
	}

	button[type="submit"] {
		margin-top: 1.5rem;
		width: 100%;
	}
</style>
