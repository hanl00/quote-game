<script lang="ts">
	import Button from '@smui/button';
	import Textfield from '@smui/textfield';
	let name = '';
</script>

<h1>Can you find the real quote?</h1>
<form method="POST">
	<Textfield
		variant="filled"
		bind:value={name}
		label="Enter a name of a famous person"
		class="textFieldStyle"
		required
	/>
	<Button class="buttonStyle" variant="raised" href={`/game?name=${name}`}>Start Game!</Button>
</form>

<style>
	* :global(.textFieldStyle) {
		box-shadow: 4px 4px #000000;
		width: 100%;
		border-color: #000000;
		border: 2px solid;
		border-radius: 8px;
	}

	* :global(.buttonStyle) {
		text-decoration: none;
		margin: 16px;
		background-color: #ffff00;
		text-transform: none;
		box-shadow: 4px 4px #000000;
		color: #000000;
		border-color: #000000;
		border: 2px solid;
	}
</style>
