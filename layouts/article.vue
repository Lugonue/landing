<template>
	<div id="article">
        <RegionsArticleHeader />
		<slot />

        <RegionsFooter />
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