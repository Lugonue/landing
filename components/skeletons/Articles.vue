<script setup>
const props = defineProps({
    count: {
        type: Number,
        default: 6,
    },
})
</script>
<template>
    <div class="row">
        <div v-for="i in count" :key="i" class="col-lg-4 pe-0">
            <div class="rounded p-4 mb-3">

                <div class="w-100">
                    <div class="skeleton skeleton-text w-100 h-150px" />
                </div>
                <div>
                    <div class="skeleton skeleton-text w-90 h-15px" />
                    <div class="skeleton skeleton-text w-70 h-15px" />
                    <div class="skeleton skeleton-text w-40 h-15px" />
                </div>
                <div class="d-flex flex-wrap">
                    <div class="skeleton skeleton-text w-10px me-1" />
                    <div class="skeleton skeleton-text w-30px me-2" />

                    <div class="skeleton skeleton-text w-10px me-1" />
                    <div class="skeleton skeleton-text w-100px me-2" />

                    <div class="skeleton skeleton-text w-10px me-1" />
                    <div class="skeleton skeleton-text w-10px me-2" />
                </div>

            </div>
        </div>
    </div>
</template>
<style>
.skeleton {
    animation: skeleton-loading 1s linear infinite alternate;
}

@keyframes skeleton-loading {
    0% {
        background-color: hsl(200, 20%, 80%);
    }

    100% {
        background-color: hsl(200, 20%, 95%);
    }
}

.skeleton-item {
    width: 100%;
    height: 10rem;
    margin-bottom: 0.5rem;
    border-radius: 0.42rem;
}

.skeleton-text {
    width: 100%;
    height: 0.7rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
}

.skeleton-text__body {
    width: 75%;
}

.skeleton-text__meta {
    width: 40%;
}
</style>