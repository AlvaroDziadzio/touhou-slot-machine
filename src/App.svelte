
<script>
import Card from "./Card.svelte";

	let p = 0;

	function change() {
		p += 1;
		console.log("Bonga")
	}

</script>

<div class="min-h-screen bg-gray-100 font-work-sans">
	<div class="container mx-auto py-8 px-2 sm:px-8">
	
		<h1 class="text-3xl md:text-5xl text-center mb-8 outline-none">Touhou Slot Machine</h1>
		<p class="text-center text-gray-700 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reiciendis veniam aspernatur tempora vero. Placeat neque odit quidem soluta, quibusdam accusamus quod. Culpa nobis provident voluptatibus cum voluptates ut minus?</p>
		<button on:click={change} class="p-3 m-4 rounded-xl bg-indigo-700 text-white font-bold">Change</button>

		<div class="max-w-sm mx-auto grid grid-cols-3 place-content-stretch items-center gap-2 sm:gap-6">
			<Card id={p} type="char" relation="Has a crush on you"/>
			<Card id={p} type="place" relation="Married to"/>
			<Card id={p} type="children" relation="Married to"/>
			<Card id={p} type="species" relation="Married to"/>
			<Card id={p} type="char" relation="Married to"/>
			<Card id={p} type="char" relation="Married to"/>
			<Card id={p} type="char" relation="Married to"/>
			<Card id={p} type="char" relation="Married to"/>
			<Card id={p} type="char" relation="Married to"/>
		</div>
	</div>
</div>