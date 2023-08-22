<script setup>
const props = defineProps({
    links: {
        type: Array
    },
})
</script>
<template>
    <div class="mb-5">
        <ul class="breadcrumb breadcrumb-dot fw-bold fs-base my-1">
            <li class="breadcrumb-item">
                <NuxtLink to="/" class="text-muted underline-hover">
                    <i class="fa-duotone fa-house" /> На главную
                </NuxtLink>
            </li>

            <template v-if="links">
                <li class="breadcrumb-item" v-for="link in links">
                    <NuxtLink :to="link.path ?? '#'" :class="`${link.path ? 'text-muted underline-hover' : 'text-dark'}`">
                        {{ link.title }}
                    </NuxtLink>
                </li>
            </template>
        </ul>
    </div>
</template>
<style>
.underline-hover:hover {
    text-decoration: underline !important;
}

.breadcrumb .breadcrumb-item:after {
    color: #A1A5B7 !important;
}
</style>