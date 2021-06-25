<script>

	import { onDestroy } from "svelte"

	import characters from "./info/characters.js"
	import locations from "./info/locations.js"
	import species from "./info/species.js"
	const children = ["None", "1", "2", "3", "4", "5+"];

	export let relation;
	export let type;
	export let active = false;

	let data, size, id, interval;

	$: {
		if (active) {
			interval = setInterval(() => id = Math.floor(Math.random()*data.length), 100);
		} else {
			clearInterval(interval);
		}
	}

	$: {
		switch (type) {
			case "char":
				data = characters;
				break;
			
			case "place":
				data = locations;
				break;
		
			case "species":
				data = species;
				break;

			case "children":
				data = children;
				break;

			default:
				data = null;
				break;
		}
		id = Math.floor(Math.random()*data.length);
	}

	onDestroy(() => clearInterval(interval));

</script>

<div tabindex="0" bind:clientWidth={size} style="max-width: 120px;" class="group shadow-md focus:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden outline-none bg-white">
	<p class="text-sm p-2 text-center font-semibold">{relation}</p>

	{#if type === "char" || type === "place"}
		<div style="background-position: -{(id * 120 + (120-size) / 2)}px 0px; height: 120px;" class="{type} bg-cover flex flex-col-reverse">
			<p class="group-hover:opacity-100 group-focus:opacity-100 opacity-0 transition-opacity duration-200 text-xs text-center p-1 backdrop-filter backdrop-blur-sm bg-white bg-opacity-60">{data[id]}</p>
		</div>

	{:else}
		<div style="height: 120px;" class="flex justify-center flex-col">
			<p class="text-base text-center font-light p-2">{data[id]}</p>
		</div>

	{/if}
</div>

<style>
	.char {
		background-image: url("/spritesheet.png");
	}
	.place {
		background-image: url("/locations.png");
	}
</style>