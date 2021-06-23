<script>
	export let relation;
	export let char;
	export let p;

</script>

<div tabindex="0" style="max-width: 120px;" class="group shadow-md focus:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden outline-none bg-white">
	<p class="text-sm p-2 text-center">{relation}</p>
	<div style="background-position: -{p}px 0px" class="char bg-cover flex flex-col-reverse divide-opacity-5">
		<p class="group-hover:opacity-100 group-focus:opacity-100 opacity-0 transition-opacity duration-200 text-xs text-center p-1 backdrop-filter backdrop-blur-sm bg-white bg-opacity-60">{char}</p>
	</div>
</div>

<style>
	.char {
		/* width: 120px; */
		height: 120px;
		background-image: url("/spritesheet.png");
	}
</style>