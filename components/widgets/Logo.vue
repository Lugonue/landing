<script setup>
    const props = defineProps({
        variant: {
            type: String,
        }
    })
</script>
<template>
    <!--begin::Logo image-->
    <NuxtLink to="/">
        <div v-if="variant == null || variant == '' || variant == 'light'">
            <span class="logo-default fs-1">
                <img src="/media/logos/freeeco.png" class="mw-100px"/>
            </span>
            <span class="logo-sticky fs-1">
                <img src="/media/logos/freeeco.png" class="mw-100px"/>
            </span>
        </div>

        <div v-if="variant == 'dark'">
            <span class="logo-default fs-1">
                <img src="/media/logos/freeeco-dark.png" class="mw-100px"/>
            </span>
        </div>
    </NuxtLink>
    <!--end::Logo image-->
</template>