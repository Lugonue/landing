<template>
  <div class="container-fluid h-100 customBg" style="width: 100vw; height: 100vh;">
    <div class="d-flex flex-column  align-items-center h-100">
      <h1 class="rounded text-center text-gray-800" style="margin-top: 100px;">
        Преимущества для Заказчика
      </h1>
      <div class="d-flex h-100">
        <div class="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 flex-grow-2 flex-stretch">
            <div
              class="d-flex flex-column justify-content-around align-items-center h-100 "
            >
                <RegionsCardsInSliderCustomer />
              <div v-if="hideImg" class="">
                <UiButtonToServise>Войти в сервис</UiButtonToServise>
              </div>
            </div>
        </div>

        <div class="col-5 text-end h-100" id="mobile">
          <div
            v-if="hideImg"
            class="d-flex align-items-end justify-content-end h-100 w-100"
          >
            <img
              style="max-height: 80vh"
              src="/media/header-component-img/statik-slider/Background-img-left-slide1.png"
              alt=""
            />
          </div>
          <div
            v-else
            class="d-flex align-items-center justify-content-center h-100 w-100"
          >
            <UiButtonToServise>Войти в сервис</UiButtonToServise>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const hideImg = ref(true);

onMounted(() => {
  hideImg.value = window.innerWidth > 1200;
  window.addEventListener(
    "resize",
    () => (hideImg.value = window.innerWidth > 1200)
  );
});

</script>

<style scoped>
* {
  animation: ani 1s forwards;
}

section {
  height: 70vh;
}

h1 {
  font-size: 2vw;
  top: 3%;
  right: 40%;
}

.customBg {
  z-index: 2;
  background: radial-gradient(
    farthest-corner at 15% 25%,
    rgb(208, 233, 233, 0.7) 20%,
    rgb(218, 139, 209) 80%
  );
}

@media screen and (max-width: 1200px) {
  h1 {
    top: 12%;
    right: 30%;
  }
}

@keyframes ani {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
