<script>
	import Card from "./Card.svelte";
	import Tailwind from "./Tailwind.svelte";
	import {newCards, cards} from "./CardStore"
import { onMount } from "svelte";

	let showLabel = false;
	let interval = 0;

	onMount(newCards);

	function toggleActive() {
		if (interval) {
			clearInterval(interval);
			interval = 0;
		} else {
			interval = setInterval(newCards, 100);
		}
	}
	

</script>

<Tailwind/>

<div class="min-h-screen bg-gray-100 font-work-sans">
	<div class="container mx-auto py-8 px-2 sm:px-8">
	
		<h1 class="text-3xl md:text-5xl text-center font-medium text-gray-800 mb-8 outline-none">Touhou Slot Machine</h1>
		<p class="text-center text-gray-700 mb-8">This project is a remake of the original <a href="https://maribelhearn.com/slots" target="blank" class="text-indigo-600">Touhou Slot Machine</a> using svelte and reusing its assets. I loved the idea and wanted to do it my way in my spare time.</p>

		<section class="flex flex-col md:flex-row items-center align-middle justify-center m-8">
			<button on:click={toggleActive} class="p-3 m-4 rounded-xl shadow-md block bg-indigo-600 hover:bg-indigo-700 transition-colors duration-150 text-white font-bold text-center w-40 focus:outline-none">{interval === 0 ? "Insert Coin" : "Stop"}</button>
			
			<label for="input-show-label" class="flex align-baseline select-none">
				<input id="input-show-label" class="appearance-none" bind:checked={showLabel} type="checkbox">
				<div class="bg-white shadow-md border-indigo-600 border-2 rounded-md h-6 w-6 inline-block mr-2">
					<svg class:hidden={!showLabel} class="h-full w-full text-indigo-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M5 12l5 5l10 -10" /></svg>
				</div>
				Show Labels
			</label>
		</section>

		<div class="max-w-sm mx-auto grid grid-cols-3 place-content-stretch items-center gap-2 sm:gap-6">
			{#each $cards as card, i}
				<Card {showLabel} id={i}/>
			{/each}
		</div>
	</div>
</div>