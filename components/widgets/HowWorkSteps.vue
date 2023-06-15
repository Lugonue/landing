<script setup>
const props = defineProps({
    steps: {
        type: Array,
        requared: true
    }
})

const modalState = ref({ // состояние модального окна для просмотра скринов инструкций
  show: false,
  imgSrc: "",
})

const togleModal = (imgSrc) => {
  modalState.value.show = !modalState.value.show
  modalState.value.imgSrc = imgSrc ?? ""
}

</script>
<style lang="scss">
.teq {
    color: red;
}
</style>
<template>
    <div class="pb-20">

        <div class="nav nav-pills" role="tablist" aria-orientation="vertical">
            <a v-for="step in steps"
                :class="`btn btn-outline btn-outline-dashed btn-outline-info me-2 mt-2 ${step.id == 1 ? ' active' : ''}`"
                data-bs-toggle="tab" :href="`#step-${step.id}`" role="tab">
                <span class="d-flex flex-column align-items-start">
                    <span class="fs-4 fw-bolder">Шаг {{ step.id }}</span>
                </span>
            </a>
        </div>

        <div class="tab-content">
            <div v-for="step in steps" :class="`tab-pane fade ${step.id == 1 ? ' show active' : ''}`"
                :id="`step-${step.id}`" role="tabpanel">
                <div class="py-10">
                    <div class="row">
                        <div class="col-12 col-xl-5 col-xxl-6">
                            <div class="d-flex flex-column h-100 justify-content-center">
                                <h4 class="text-white fw-bolder text-start mb-4 fs-1">{{ step.title }}</h4>
                                <div class="mw-600px mb-10">
                                    <p v-for="desc in step.description" class="text-white fs-5">{{ desc }}</p>
                                </div>

                                <UiButtonToServise>Продолжить в сервисе</UiButtonToServise>
                            </div>
                        </div>

                        <div class="col-12 col-xl-7 col-xxl-6 d-none d-md-block mt-md-20 mt-xl-0">
                            <div class="min-h-400px pb-10">

                                <div class="position-relative">

                                    <template v-if="step.images.length > 1">
                                        <div v-for="(image, i) in step.images" class="position-absolute"
                                            :style="`border-radius: 1.8rem; top: ${0 + i * 70}px; left: ${0 + i * 200}px; box-shadow: 0 0.1rem 0.75rem 0.25rem rgba(0, 0, 0, 0.05);`">
                                            <img :src="image" @click="togleModal(image)" class="mh-400px mw-100" style="border-radius: 1.8rem;" />
                                        </div>
                                    </template>

                                    <template v-else>
                                        <div v-if="step.images.length" v-for="image in step.images" class=""
                                            :style="`border-radius: 1.8rem; box-shadow: 0 0.1rem 0.75rem 0.25rem rgba(0, 0, 0, 0.05);`">
                                            <img :src="image" @click="togleModal(image)" class="mh-500px mw-100" style="border-radius: 1.8rem;" />
                                        </div>
                                    </template>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <UiModalWindow v-if="modalState.show" :imgSrc="modalState.imgSrc" @closeModal="togleModal" />
</template>