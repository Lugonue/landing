<script setup>
const route = useRoute()
const props = defineProps({
    title: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: '',
    },
    keywords: {
        type: String,
        default: '',
    },
    image: {
        type: String,
        default: '',
    },
    sizeClass: {
        type: String,
        default: 'fs-2hx',
    },
    ogType: {
        type: String,
        default: '',
    },
    show: {
        type: Boolean,
        default: true,
    },
})
const anchor = ref(false)

const titlePage = props.title ?? route.meta.title
useSeoMeta({
    title: titlePage,
    description: props.description,
    keywords: props.keywords,

    ogType: props.ogType,
    ogTitle: titlePage,
    ogDescription: props.description,
    ogImage: props.image,

    twitterTitle: titlePage,
    twitterDescription: props.description
})
</script>

<template>
    <template v-if="show">
        <div class="title-section position-relative mb-10 anchor-id" @mouseover="anchor = true"
            @mouseleave="anchor = false">
            <NuxtLink :to="{ hash: '#' + $helpers.utils.slugify(titlePage) }">
                <h1 :class="`text-dark text-hover-info fw-bolder my-1 ${sizeClass}`">{{ titlePage }}</h1>
                <span class="anchor-block cursor-pointer" v-if="anchor">
                    <i class="fa-light fa-hashtag fs-1 mt-1 me-2 text-secondary" />
                </span>
            </NuxtLink>
            <span :id="$helpers.utils.slugify(titlePage)" class="anchor-hash"></span>
        </div>
    </template>
    <template v-else>
        <div class="title-section position-relative mb-4" />
    </template>
</template>

<style scoped>
.anchor-block {
    position: absolute;
    top: 0;
    right: 100%;
}

.anchor-block:target {
    scroll-margin-top: 100px;
}

.anchor-id .anchor-hash {
    position: absolute;
    top: -120px;
}
</style>