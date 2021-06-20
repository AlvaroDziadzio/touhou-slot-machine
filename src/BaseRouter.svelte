<script>
	import { Router, Link, Route } from "svelte-navigator";
	import Tailwind from "./Tailwind.svelte";
	import App from "./App.svelte"
</script>

<Tailwind/>

<Router>
	<Route path="/*" component={App}/>
</Router>