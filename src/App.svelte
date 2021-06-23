
<script>
import Card from "./Card.svelte";

	let p = 0;

	function change() {
		p += 120;
	}

</script>

<div class="min-h-screen bg-gray-100">
	<div class="container mx-auto py-8 px-2 sm:px-8">
	
		<h1 class="text-3xl md:text-5xl text-center mb-8 outline-none">Touhou Slot Machine</h1>
		<p class="text-center text-gray-700 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reiciendis veniam aspernatur tempora vero. Placeat neque odit quidem soluta, quibusdam accusamus quod. Culpa nobis provident voluptatibus cum voluptates ut minus?</p>
	
		<div class="max-w-md mx-auto grid grid-cols-3 place-content-stretch items-center gap-2">
		<!-- <div class="max-w-lg mx-auto flex flex-wrap items-center justify-evenly"> -->
			<Card {p} relation="Has a crush on you"  char="Hall of Dreams Great Mausoleum"/>
			<Card {p} relation="Married to"  char="Marisa Kirisame"/>
			<Card {p} relation="Married to"  char="Marisa Kirisame"/>
			<Card {p} relation="Married to"  char="Marisa Kirisame"/>
			<Card {p} relation="Married to"  char="Marisa Kirisame"/>
			<Card {p} relation="Married to"  char="Marisa Kirisame"/>
			<Card {p} relation="Married to"  char="Marisa Kirisame"/>
			<Card {p} relation="Married to"  char="Marisa Kirisame"/>
			<Card {p} relation="Married to"  char="Marisa Kirisame"/>
		</div>
	
		<!-- Marisa Kirisame -->
		<!-- Hall of Dreams Great Mausoleum -->
	</div>
</div>