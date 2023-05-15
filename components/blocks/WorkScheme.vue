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
  <div class="container-xxl shadow-sm" id="main">
    <div class="row h-100 my-3">
      <h1 class="fs-2hx text-white text-center p-10">Как это работает?</h1>
      <ul class="nav nav-tabs nav-pills border-0 me-5 mb-3 mb-md-0 fs-6 d-flex justify-content-center p-5">
        <li class="nav-item me-0 mb-md-2">
          <a :class="'nav-link btn btn-flex btn-active-light-success me-4' + (state.customer ? ' active' : '')"
            @click="changeShow('customer')">
            <!-- <span class="svg-icon svg-icon-2"><svg>...</svg></span> -->
            <span class="d-flex flex-column align-items-center">
              <span class="fs-4 fw-bolder">Я Заказчик</span>
              <span class="fs-7">Открыть инструкцию</span>
            </span>
          </a>
        </li>
        <li class="nav-item me-0 mb-md-2">
          <a :class="'nav-link btn btn-flex btn-active-light-info' + (state.executor ? ' active' : '')"
            @click="changeShow('executor')">
            <!-- <span class="svg-icon svg-icon-2"><svg>...</svg></span> -->
            <span class="d-flex flex-column align-items-start">
              <span class="fs-4 fw-bolder">Я Исполнитель</span>
              <span class="fs-7">Открыть инструкцию</span>
            </span>
          </a>
        </li>
      </ul>
      <!-- Инструкция для заказчика -->
      <RegionsHowItWorksCustomer v-if="state.customer" />
      <!-- Инструкция для Исполнителя -->
      <RegionsHowItWorksPerformer class="overflow-auto h-100" v-if="state.executor" />
    </div>

    
    <!-- <div class="row flex-column justify-content-center position-relative">
      <ul class="nav nav-tabs nav-pills border-0 me-5 mb-3 mb-md-0 fs-6 d-flex justify-content-center p-5">
        <li class="nav-item me-0 mb-md-2">
          <a :class="'nav-link btn btn-flex btn-active-light-success me-4' + (state.customer ? ' active' : '')"
            @click="changeShow('customer')">
            <span class="d-flex flex-column align-items-center">
              <span class="fs-4 fw-bolder">Я Заказчик</span>
              <span class="fs-7">Открыть инструкцию</span>
            </span>
          </a>
        </li>
        <li class="nav-item me-0 mb-md-2">
          <a :class="'nav-link btn btn-flex btn-active-light-info' + (state.executor ? ' active' : '')"
            @click="changeShow('executor')">
            <span class="d-flex flex-column align-items-start">
              <span class="fs-4 fw-bolder">Я Исполнитель</span>
              <span class="fs-7">Открыть инструкцию</span>
            </span>
          </a>
        </li>
      </ul>

      <RegionsHowItWorksCustomer v-if="state.customer" />
      <RegionsHowItWorksPerformer v-if="state.executor" />
    </div> -->
  </div>
</template>

<style scoped>
#main{
   margin-top: 10rem;
  background: rgb(26, 24, 58);
  border-radius: 130px 0 130px 0 ;

}
</style>