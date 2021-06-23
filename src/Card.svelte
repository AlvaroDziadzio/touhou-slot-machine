<script>
	export let relation;
	export let char;
	export let p;

</script>

<div tabindex="0"  style="width: 120px;" class="group shadow-md focus:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden outline-none bg-white">
	<p class="text-sm p-2 font-bold text-center">{relation}</p>
	<!-- <div style="background-position: -{p}px 0px" class="char bg-cover items-end">
		<p class="text-sm font-bold p-2 text-white bg-gradient-to-b from-black to-transparent">{char}</p>
	</div> -->
	<!-- <div style="background-position: -{p}px 0px" class="char bg-cover">
		<div tabindex="0" class="opacity-0 hover:opacity-100 transition-opacity duration-150 ease-in-out bg-opacity-50 bg-white focus:opacity-100 outline-none p-2 flex justify-center items-center w-full h-full backdrop-filter backdrop-blur-sm">
			<p class="text-xs text-center">{char}</p>
		</div>
	</div> -->
	<div style="background-position: -{p}px 0px" class="char bg-cover flex flex-col-reverse divide-opacity-5">
		<p class="group-hover:opacity-100 group-focus:opacity-100 opacity-0 transition-opacity duration-200 text-xs text-center p-1 backdrop-filter backdrop-blur-sm bg-white bg-opacity-60">{char}</p>
	</div>
</div>

<style>
	.char {
		width: 120px;
		height: 120px;
		background-image: url("/spritesheet.png");
	}
</style>