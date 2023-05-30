<script lang="ts">
	import {onMount} from "svelte";

	let counter = 0;
	const incrementCounter = () => {
		++counter;
	};
	let isMounted = false;
	onMount(() => {
		isMounted = true;
	});
	$: {
		if (isMounted) alert(counter);
	}
</script>

<div>
	<h1 class="counter">Licznik: {counter}</h1>
	<button on:click={incrementCounter}>Zwiększ</button>
</div>

<style>
	.counter {
		font-size: 30px;
	}
</style>
