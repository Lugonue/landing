<template>
  <div class="container-fluid d-flex flex-column justify-content-center pb-10 pt-10 rounded" id="bg">
    <div class="container-fluid">
      <h1 class="fs-2hx fw-bolder text-center mb-10">Наши партнеры</h1>
    <div class="row flex-row justify-content-center align-items-center overflow-auto " style="flex-wrap: nowrap;">
      <div v-for="companyImg in companies" class="shadow-sm m-5 w-auto p-0 border rounded" id="anime">
        <div class="">
          <img style="max-width: 150px; max-height: 150px;" :src=companyImg class=" rounded" alt="...">
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
const companies = [
  '/media/company-logo/99c08050dc9d2168650bedc219637852.png',
  '/media/company-logo/ES.png',
  '/media/company-logo/logo204-2.png',
  '/media/company-logo/PP.PNG',
  '/media/company-logo/SZ.jpg',
  '/media/company-logo/НПК АВТОПРИБОР.jpg',
]
</script>
<style scoped>
#bg {
  margin: 15vh 0;
  /* background: linear-gradient(45deg,rgb(239, 201, 239) 10%, rgb(228,230,2391) 40%, rgb(255, 255, 255) 50%); */
}



@keyframes leftright {

  0%,
  20% {
    transform: translateX(0%);
    left: 0%;
  }

  80%,
  100% {
    transform: translateX(-100%);
    left: 100%;
  }
}

@media (max-width: 800px) {
  #anime {
  animation: leftright 6s infinite alternate ease-in-out;
}
}
</style>