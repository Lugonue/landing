<script setup>
const isTop = ref(false)
onMounted(() => {
    window.addEventListener('scroll', () => {
        let scrollPos = window.scrollY
        if (scrollPos >= 100) {
            isTop.value = true
        } else {
            isTop.value = false
        }
    })
})

const scrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
</script>
<template>
    <!--begin::Scrolltop-->
    <div id="kt_scrolltop" :class="'p-3 scrolltop ' + (isTop ? 'scrolltop--on' : '')" role="button"
        :data-kt-scrolltop="isTop" @click="scrollTop">
        <i class="fa-regular fa-chevron-up text-white fs-2 m-auto" />
    </div>
    <!--end::Scrolltop-->
</template>
<style scoped lang="scss">
.scrolltop {
    &.scrolltop--on {
        display: block;
        opacity: .5;

        &:hover {
            opacity: 1;
        }
    }
}
</style>