<template>
    <div class="modal-container" @click="$emit('closeModal')">
        <div class="modal-frame">
            <img :src="props.imgSrc" alt="">
        </div>
    </div>
</template>
<script setup>

const props = defineProps({
    imgSrc: {
        type: String,
        default: '',
    }
})



</script>
<style scoped>
.modal-container {
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);

}

.modal-frame {
    margin-top: 100px;
    max-height: 80%;
    max-width: 80%;
    height: auto;
    overflow: hidden;
    position: relative;
    background-color: white;
    border-radius: 20px;
}

img {
    max-height: 100%;
    max-width: 100%;
}
</style>