import { writable } from "svelte/store";

// Data
import characters from "./info/characters.js"
import locations from "./info/locations.js"
import species from "./info/species.js"
const number = {
	type: "text",
	data: ["None", "1", "2", "3", "4", "5+"]
};


const cards = writable([
	{data: species,    id: 0, label: "You are a..."       },
	{data: characters, id: 0, label: "Best friend"        },
	{data: characters, id: 0, label: "Hates you"          },
	{data: characters, id: 0, label: "Fist kiss"          },
	{data: characters, id: 0, label: "Has a crush on you" },
	{data: characters, id: 0, label: "Married to"         },
	{data: locations,  id: 0, label: "Honeymoon location" },
	{data: number,     id: 0, label: "Nº of children"     },
	{data: characters, id: 0, label: "Cockblocked by"     }
]);

function newCards() {
	cards.update(state => {
		state.forEach(element => {
			element.id = Math.floor(Math.random()*element.data.data.length);
		});

		return state;

	});
}

export {cards, newCards};