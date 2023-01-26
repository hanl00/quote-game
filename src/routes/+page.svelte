<script lang="ts">
	import Button from '@smui/button';
	import Textfield from '@smui/textfield';
	let name = '';
	console.log('🚀 ~ file: +page.svelte:5 ~ name', name);
</script>

<h1>Can you find the real quote?</h1>
<form method="POST">
	<Textfield
		variant="filled"
		bind:value={name}
		label="Enter a name of a famous person"
		style="width: 50%;"
		required
	/>
	<pre class="status">Value: {name}</pre>
	<Button variant="raised" href={`/game?name=${name}`}>Start Game</Button>
</form>

<style>
	/* Accessing the class with "*" in front limits
	  the scope to anything under this component's
	  elements. */
	* :global(.myClass) {
		text-decoration: none;
	}
</style>
