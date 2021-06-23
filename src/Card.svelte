<script>
	import data from "./characters.js"

	export let relation;
	export let id;

	let size;

</script>

<div tabindex="0" bind:clientWidth={size} style="max-width: 120px;" class="group shadow-md focus:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden outline-none bg-white">
	<p class="text-sm p-2 text-center">{relation}</p>
	<div style="background-position: -{(id * 120 + (120-size) / 2)}px 0px" class="char bg-cover flex flex-col-reverse">
		<p class="group-hover:opacity-100 group-focus:opacity-100 opacity-0 transition-opacity duration-200 text-xs text-center p-1 backdrop-filter backdrop-blur-sm bg-white bg-opacity-60">{data[id]}</p>
	</div>
</div>

<style>
	.char {
		/* width: 120px; */
		height: 120px;
		background-image: url("/spritesheet.png");
	}
</style>