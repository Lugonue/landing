<template>
	<div class="d-flex flex-column flex-root bg-white" id="app">
		<slot />
		<WidgetsScrollTop />
	</div>
</template>

<script setup>
    const route = useRoute()
	useHead({
        title: route.meta.title + (route.meta.subTitle ? " | " + route.meta.subTitle : ""),
        meta: [
            { name: 'description', content: route.meta.description ?? route.meta.title },
        ]
    })
</script>

<style>
.page-enter-active,
.page-leave-active {
	transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(1rem);
}

#app {
	font-family: 'Poppins', 'Arial', serif;
}
</style>
