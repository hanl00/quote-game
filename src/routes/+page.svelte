<script lang="ts">
	let name = '';
</script>

<h1>Can you find the real quote?</h1>
<form method="POST">
	<label>
		Enter a name of a famous person
		<input name="name" type="text" placeholder="Name input" bind:value={name}/>
	</label>
	<button><a href={`/game?name=${name}`}>Start Game</a></button>
</form>

