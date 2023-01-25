<script lang="ts">
	import type { PageData, ActionData } from './$types';
	export let data: PageData;
	console.log("🚀 ~ file: +page.svelte:4 ~ data, HERE", data)
	let name = '';
</script>

<h1>Can you find the real quote?</h1>



<div>{@html data.fakeQuote}</div>
<div>{data.realQuote}</div>

<button><a href={`/`}>Try Again</a></button>