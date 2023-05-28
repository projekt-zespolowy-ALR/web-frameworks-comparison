<script setup lang="ts">
	import {watch, ref} from "vue";

	let counter = ref(0);
	watch(counter, (newCounter) => {
		alert(newCounter);
	});
	const incrementCounter = () => {
		++counter.value;
	};
</script>

<template>
	<div>
		<h1 class="counter">Licznik: {{ counter }}</h1>
		<button @click="incrementCounter">Zwiększ</button>
	</div>
</template>

<style scoped>
	.counter {
		font-size: 30px;
	}
</style>
