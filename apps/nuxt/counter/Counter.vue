<script setup lang="ts">
	import {watch, ref, onMounted} from "vue";
	const counter = ref(0);
	const isMounted = ref(false);
	onMounted(() => {
		isMounted.value = true;
	});
	watch(
		[counter, isMounted],
		([newCounterValue]) => {
			if (isMounted.value) {
				alert(newCounterValue);
			}
		},
		{immediate: true}
	);
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
