<script lang="ts">
	import type { ActionData } from "./$types";

	export let form: ActionData;
	$: console.log(form);
</script>

<div class="page-container">
	<div class="form-container">
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
			{#if form?.fieldErrors?.email && form.fieldErrors.email.length > 0}
				<div class="form-errors">
					<ul>
						{#each form.fieldErrors.email ?? [] as errors}
							<li>{errors}</li>
						{/each}
					</ul>
				</div>
			{/if}

			<div class="form-field">
				<label for="password">Password</label>
				<input type="password" name="password" id="password" autocomplete="off" required aria-required="true" />
			</div>

			<button type="submit" class="btn btn-primary">Log in</button>
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

	.form-container {
		margin-inline: 1rem;
		width: 100%;
		max-width: 28rem;
	}

	input[type="email"],
	input[type="password"] {
		margin: 0;
		border: 0;
		background: inherit;
		padding: 0;
		font-size: 0.9rem;

		&:focus {
			outline: none;
		}
	}

	.form-field {
		margin-top: 1.5rem;
		border-radius: var(--v-border-radius);
		background-color: hsla(
			var(--v-background-hue) var(--v-background-saturation) calc(var(--v-background-lightness) - 6%)
		);
		padding: 1rem 1.4rem;

		& > * {
			display: block;
		}

		label {
			margin-bottom: 0.4rem;
			font-weight: 600;
			font-size: 0.9rem;
			text-transform: uppercase;
		}
	}

	.form-errors {
		color: red;
		font-size: 0.7rem;

		& > ul {
			margin: 0.4rem;
		}
	}
</style>
