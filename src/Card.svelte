<script>

	import {cards} from "./CardStore";

	export let showLabel = false;
	export let id = 0;

	let size;

</script>

<div tabindex="0" bind:clientWidth={size} style="max-width: 120px;" class="group shadow-md focus:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden outline-none bg-white">
	<p class="text-sm p-2 text-center">{$cards[id].label}</p>

	{#if $cards[id].data.type !== "text"}
		<div style="background-position: -{($cards[id].id * 120 + (120-size) / 2)}px 0px; height: 120px;" class="{$cards[id].data.type} bg-cover flex flex-col-reverse">
			<p class="group-hover:opacity-100 group-focus:opacity-100 {showLabel ? "" : "opacity-0"} transition-opacity duration-200 text-xs text-center p-1 backdrop-filter backdrop-blur-sm bg-white bg-opacity-60">{$cards[id].data.data[$cards[id].id]}</p>
		</div>

	{:else}
		<div style="height: 120px;" class="flex justify-center flex-col">
			<p class="{$cards[id].data.data.length < 10 ? "text-3xl" : "text-base"} text-center font-light p-2">{$cards[id].data.data[$cards[id].id]}</p>
		</div>

	{/if}

</div>

<style>
	.character {
		background-image: url("/spritesheet.png");
	}
	.location {
		background-image: url("/locations.png");
	}
</style>