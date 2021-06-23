
<script>
import Card from "./Card.svelte";

	let p = 0;

	function change() {
		p += 1;
	}

</script>

<div class="min-h-screen bg-gray-100">
	<div class="container mx-auto py-8 px-2 sm:px-8">
	
		<h1 class="text-3xl md:text-5xl text-center mb-8 outline-none">Touhou Slot Machine</h1>
		<p class="text-center text-gray-700 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reiciendis veniam aspernatur tempora vero. Placeat neque odit quidem soluta, quibusdam accusamus quod. Culpa nobis provident voluptatibus cum voluptates ut minus?</p>
		<button on:click={change} class="p-3 m-4 rounded-xl bg-indigo-700 text-white font-bold">Change</button>

		<div class="max-w-md mx-auto grid grid-cols-3 place-content-stretch items-center gap-2 sm:gap-6">
			<Card id={p} relation="Has a crush on you"/>
			<Card id={p} relation="Married to"/>
			<Card id={p} relation="Married to"/>
			<Card id={p} relation="Married to"/>
			<Card id={p} relation="Married to"/>
			<Card id={p} relation="Married to"/>
			<Card id={p} relation="Married to"/>
			<Card id={p} relation="Married to"/>
			<Card id={p} relation="Married to"/>
		</div>
	</div>
</div>