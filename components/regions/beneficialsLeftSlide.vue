<template>
  <div class="customBg w-100 h-100">
    <div
      class="container-fluid h-100 position-relative"
      style="margin-top: 100px"
    >
      <h1 class="rounded text-center mt-5 text-gray-800">
        Преимущества для Заказчика
      </h1>
      <div class="row justify-content-center align-items-center h-100">
        <div
          class="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 h-100 d-flex justify-content-end"
        >
          <div class="overflow-hidden d-flex justify-content-end">
            <div
              class="row flex-column justify-content-center align-items-center"
            >
              <section class="h-50 mb-10">
                <RegionsCardsInSliderCustomer />
              </section>
              <div v-if="hideImg" class="text-center mt-4">
                <UiButtonToServise>Войти в сервис</UiButtonToServise>
              </div>
            </div>
          </div>
        </div>

        <div class="col-5 h-100 text-end" id="mobile">
          <div
            v-if="hideImg"
            class="d-flex align-items-end justify-content-end h-100 w-100"
          >
            <img
              style="height: 85%"
              src="/media/header-component-img/statik-slider/Background-img-left-slide1.png"
              alt=""
            />
          </div>
          <div
            v-else
            class="d-flex align-items-center justify-content-center h-100"
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

const data = [
  // { id: 4, title: 'Все риски на нас ', body: 'Выполнение специалистом работы лежит на нашей области ответственности', icon: 'fa-exclamation-triangle' },
  // { id: 3, title: 'Полный анализ', body: 'Полный анализ деятельности от ТОП-овых специалистов', icon: 'fa-chart-pie' },
  // { id: 5, title: 'Постоянно на связи', body: 'Менеджер на связи 25/8', icon: 'fa-fax' },
  // { id: 6, title: ' Работа по договору', body: 'Заключение договора на разработку', icon: 'fa-envelope' },
  // { id: 2, title: 'Мгновенный исполнитель', body: 'Назначение проверенного исполнителя в день обращения', icon: 'fa-user' },
  // { id: 1, title: 'Оповещение', body: 'Автоматическое оповещение прохождения этапов по почте или в соц сетях', icon: ' fa-bell' },
];
</script>

<style scoped>
* {
  animation: ani 2s forwards;
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
    rgb(208, 233, 233, 0.6) 1%,
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
