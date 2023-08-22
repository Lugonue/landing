<template>
    <div id="article">
        <RegionsHeader />
        <main class="container py-15">
            <slot />
        </main>
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