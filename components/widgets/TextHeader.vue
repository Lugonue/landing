<script setup>

const gradient = ref('gradient')

onMounted(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            gradient.value = ''
        } else {
            gradient.value = 'gradient'
        }
    })
})

</script>
<template>
    <!--begin::Logo image-->
    <NuxtLink to="https://service.free-eco.ru/">
        <div :class="'rounded-pill ms-2 p-2 text-gray-800 d-none d-md-block fw-boldest pe-5 fs-md-2 fs-lg-6 ' + gradient">
            Первая фриланс-биржа экологических работ 
        </div>
    </NuxtLink>
    <!--end::Logo image-->
</template>

<style scoped>

div {
    max-height: 50px;
    overflow: hidden;
    white-space: nowrap;
    font-size: calc(14px + 5 * (100vw - 320px) / 880);
}
.gradient {
    background: linear-gradient(90deg, #d581d0 20%, #f5f8fa 80%);
}
</style>