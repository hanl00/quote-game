<script lang="ts">
	import Button from '@smui/button';
	import type { PageData } from './$types';
	import { cleanQuote, shuffle } from '../../utils/utils';

	export let data: PageData;

	let quotes = data.openAIResponse.text?.split('",');

	let choices = [
		{
			quote: cleanQuote(quotes?.[0]),
			result: true
		},
		{
			quote: cleanQuote(quotes?.[1]),
			result: false
		},
		{
			quote: cleanQuote(quotes?.[2]),
			result: false
		}
	];
	console.log('🚀 ~ file: +page.svelte:9 ~ choices', choices);

	shuffle(choices);
	let selected: any;
	$: console.log(selected);

	let cardBackShowing = false;

	const toggleBackFront = (e: any) => {
		// if same card clicked twice to toggle front and back
		if (selected === Number(e.target.dataset.cardId)) {
			selected = null;
			cardBackShowing = !cardBackShowing;
		} else {
			cardBackShowing = !cardBackShowing;
			selected = Number(e.target.dataset.cardId);
		}
	};
</script>

<h1>Can you find the real quote?</h1>

<div class="row">
	{#each choices as { quote, result }, i}
		<div class="flip-box">
			<div class="flip-box-inner" class:show-back={selected === i}>
				<div class="flip-box-front card">
					<div class="flip-box-text">
						<p>{quote}</p>
					</div>
				</div>
				<div class:flip-box-back={true} class:container={true} class:win={result}>
					<div class="flip-box-text">
						<h2>{result ? 'WIN' : 'LOSE'}</h2>
					</div>
				</div>
			</div>

			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<footer on:click={toggleBackFront} data-card-id={i}>View Answer</footer>
		</div>
	{/each}
</div>

<div><Button class="buttonStyle" variant="raised" href={`/`}>Try Again!</Button></div>

<style>
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

	.row {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	/* The flip box container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
	.flip-box {
		background-color: transparent;
		width: 175px;
		height: 225px;
		margin: 0 20px 40px;
		perspective: 1000px; /* Remove this if you don't want the 3D effect */
		border-color: #000000;
		border: 2px solid;
		box-shadow: 4px 4px #000000;
	}

	/* This container is needed to position the front and back side */
	.flip-box-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.8s;
		transform-style: preserve-3d;
	}

	/* Do an horizontal flip when you move the mouse over the flip box container */
	/* 	.flip-box:hover .flip-box-inner {
	transform: rotateY(180deg);
} */
	.show-back {
		transform: rotateY(180deg);
	}

	/* Position the front and back side */
	.flip-box-front,
	.flip-box-back {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden; /* Safari */
		backface-visibility: hidden;
	}

	/* Style the front side */
	.flip-box-front {
		background-color: #0d9ba3;
	}

	/* Style the back side */
	.flip-box-back {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		color: white;
		width: 175px;
		height: 225px;
		transform: rotateY(180deg) translateX(6px);
		background-color: red;
	}

	.flip-box-text {
		margin: 28px 12px;
	}

	.win {
		background-color: green;
	}

	footer {
		width: 175px;
		font-weight: 800;
		margin-top: 12px;
		padding: 5px 2px;
		text-align: center;
		border: 2px solid black;
		cursor: pointer;
		transition: 0.3s all;
		color: #fff;
		background-color: #000;
		border: 1px solid black;
	}

	/* Add some shadows to create a card effect */
	.card {
		font-weight: 650;
		font-size: large;
		font-family: monaco, monospace;
	}

	/* Some left and right padding inside the container */
	.container {
		margin-left: 6px;
	}
</style>
