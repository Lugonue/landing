<script setup>
import customerSteps from "~/utils/how-work/customer"
import executorSteps from "~/utils/how-work/executor"

const props = defineProps({
  desctopVersion: {
    type: Boolean,
    default: false,
  },
})

const state = ref("");
state.value = {
  customer: true,
  executor: false
}

const changeShow = (description) => {
  state.value = {
    customer: false,
    executor: false
  }
  state.value[description] = !state.value[description]
}

</script>
<style scoped>
#how_work {
  margin: 15vh 0;
  background: rgb(26, 24, 58);
}

@media(min-width: 992px) {
  #how_work {
    border-radius: 0 200px 0 200px;
  }
}
</style>
<template>
  <section class="container-fluid px-lg-20 py-20 position-relative " id="how_work">
    <div class="row justify-content-between align-items-top">
      <div class="d-flex flex-column align-items-start col-12 col-lg-6 col-xl-4 col-xxl-4">
        <h1 class="display-3 text-white text-start pb-1">
          Как это работает?
        </h1>
        <h3 class="text-white text-start fw-lighter mb-10">
          Пошаговая инструкция работы в сервисе:
        </h3>
      </div>

      <ul class="col-12 col-lg-6 col-xl-4 col-xxl-3 fs-6 d-flex justify-content-center mt-4">
        <li class="me-4 mb-md-2 list-unstyled">
          <a :class="'btn btn-outline-info' + (state.customer ? ' active' : '')" @click="changeShow('customer')">
            <!-- <span class="svg-icon svg-icon-2"><svg>...</svg></span> -->
            <span class="d-flex flex-column align-items-center">
              <span class="fs-4 fw-bolder">Я Заказчик</span>
              <!-- <span :class="'fs-7' + (state.customer ? ' text-muted' : '')">Открыть инструкцию</span> -->
            </span>
          </a>
        </li>
        <li class="nav-item me-0 mb-md-2 list-unstyled">
          <a :class="'btn btn-outline-secondary' + (state.executor ? ' active' : '')
            " @click="changeShow('executor')">
            <!-- <span class="svg-icon svg-icon-2"><svg>...</svg></span> -->
            <span class="d-flex flex-column align-items-start">
              <span class="fs-4 fw-bolder">Я Исполнитель</span>
              <!-- <span :class="'fs-7' + (state.executor ? ' text-muted' : '')">Открыть инструкцию</span> -->
            </span>
          </a>
        </li>
      </ul>
    </div>
    <template v-if="state.customer">
      <WidgetsHowWorkSteps :steps="customerSteps" />
    </template>
    <template v-if="state.executor">
      <WidgetsHowWorkSteps :steps="executorSteps" />
    </template>
  </section>
</template>
