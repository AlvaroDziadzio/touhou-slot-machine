
<script>
import Card from "./Card.svelte";

	let p = 0;

	function change() {
		p += 120;
	}

</script>

<main class="max-w-md mx-auto bg-gray-100">
	<h1 class="text-6xl text-center my-8 outline-none">Touhou Slot Machine</h1>
	<p class="text-center text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reiciendis veniam aspernatur tempora vero. Placeat neque odit quidem soluta, quibusdam accusamus quod. Culpa nobis provident voluptatibus cum voluptates ut minus?</p>
	<button on:click={change}>Change</button>

	<div class="grid grid-cols-3 place-content-center place-items-center gap-4">
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

	<p>{p}</p>
	<!-- Marisa Kirisame -->
	<!-- Hall of Dreams Great Mausoleum -->
</main>