<script setup>
const state = ref('');
state.value = {
  customer: true,
  executor: false,
};

const changeShow = (description) => {
  state.value[description] = !state.value[description];
  if (description === 'customer') {
    state.value.executor = false;
  }
  if (description === 'executor') {
    state.value.customer = false;
  }
}
</script>
<template>
  <div class="container-fluid px-20 py-10 shadow-sm position-relative" id="main" style="height: 100vh;">
    <div class="row justify-content-between">
      <div class="d-flex flex-column align-items-start col-6">
        <h1 class="display-3 text-white text-start p-10 pb-1">Как это работает?</h1>
        <h3 class="text-white ps-10 text-start fw-lighter fst-italic mb-10">Пошаговая инструкция работы в сервисе:</h3>
      </div>

      <ul class="col-6 nav nav-tabs nav-pills border-0 mb-3 mb-md-0 fs-6 d-flex justify-content-end" id="myTabs p-5">
        <li class="nav-item me-0 mb-md-2">
          <a :class="'nav-link btn-flex btn btn-outline btn-outline-dashed btn-outline-default me-4' + (state.customer ? ' active' : '')"
            @click="changeShow('customer')">
            <!-- <span class="svg-icon svg-icon-2"><svg>...</svg></span> -->
            <span class="d-flex flex-column align-items-center">
              <span class="fs-4 fw-bolder">Я Заказчик</span>
              <span :class="'fs-7' + (state.customer ? ' text-muted' : '')">Открыть инструкцию</span>
            </span>
          </a>
        </li>
        <li class="nav-item me-0 mb-md-2">
          <a :class="'nav-link btn-flex btn btn-outline btn-outline-dashed btn-outline-default' + (state.executor ? ' active' : '')"
            @click="changeShow('executor')">
            <!-- <span class="svg-icon svg-icon-2"><svg>...</svg></span> -->
            <span class="d-flex flex-column align-items-start">
              <span class="fs-4 fw-bolder">Я Исполнитель</span>
              <span :class="'fs-7' + (state.executor ? ' text-muted' : '')">Открыть инструкцию</span>
            </span>
          </a>
        </li>
      </ul>
    </div>
    <div class="row">
      <!-- Инструкция для заказчика -->
      <RegionsHowItWorksCustomer v-if="state.customer" />
      <!-- Инструкция для Исполнителя -->
      <RegionsHowItWorksPerformer class="overflow-auto h-100" v-if="state.executor" />
    </div>


  </div>
</template>

<style scoped>
#main {
  margin-top: 10rem;
  background: rgb(26, 24, 58);
  border-radius: 130px 0 130px 0;

}
</style>