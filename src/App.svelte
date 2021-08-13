
<script>
	import Card from "./Card.svelte";
	import {newCards, cards} from "./CardStore"

	let showLabel = false;
	let interval = 0;

	function toggleActive() {
		if (interval) {
			clearInterval(interval);
			interval = 0;
		} else {
			interval = setInterval(newCards, 100);
		}
	}
	

</script>

<svelte:head>
	<title>Touhou Slot Machine</title>
</svelte:head>

<div class="min-h-screen bg-gray-100 font-work-sans">
	<div class="container mx-auto py-8 px-2 sm:px-8">
	
		<h1 class="text-3xl md:text-5xl text-center mb-8 outline-none">Touhou Slot Machine</h1>
		<p class="text-center text-gray-700 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reiciendis veniam aspernatur tempora vero. Placeat neque odit quidem soluta, quibusdam accusamus quod. Culpa nobis provident voluptatibus cum voluptates ut minus?</p>
		<button on:click={toggleActive} class="p-3 m-4 rounded-xl bg-indigo-700 text-white font-bold">Change</button>
		<input id="input-show-label" bind:checked={showLabel} type="checkbox">
		<label for="input-show-label">Show Labels</label>

		<div class="max-w-sm mx-auto grid grid-cols-3 place-content-stretch items-center gap-2 sm:gap-6">
			{#each $cards as card, i}
				<Card {showLabel} id={i}/>
			{/each}
		</div>
	</div>
</div>