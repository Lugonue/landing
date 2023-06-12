<template>
  <div class="container-fluid h-100 bg" style="width: 100vw; height: 100vh">
    <div class="d-flex flex-column justify-content-evenly align-items-center h-100">
      <h1 class="text-center text-gray-800" style="margin-top: 100px;">
        Преимущества для Исполнителя
      </h1>
      <div class="d-flex align-self-center">
        <div class="col-5" id="mobile">
          <div
            v-if="hideImg"
            class="d-flex align-items-end justify-content-center h-100"
          >
            <img
              style="max-height: 80vh"
              src="/media/header-component-img/statik-slider/Background-img-right-slide.png"
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
        <div
          class="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 d-flex justify-content-start align-items-start flex-stretch"
        >
          <div
            class="row flex-column justify-content-around align-items-center h-100"
          >
              <RegionsCardInSliderExecutor />
            <div v-if="hideImg" class="text-center mt-4">
              <UiButtonToServise>Войти в сервис</UiButtonToServise>
            </div>
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

// const data = [
//   { id: 1, title: 'Опыт', body: 'полный анализ деятельности от ТОП-овых специалистов' },
//   { id: 2, title: 'Заработок', body: 'Получайте высокие рейтинги и забирайте все работы' },
//   { id: 3, title: 'Оповещение', body: 'автоматическое оповещение прохождения этапов по почте или в соц сетях'  },
//   { id: 4, title: 'Работа на постоянке', body:  'выполнение специалистом работы лежит на нашей области ответственности' },
//   { id: 5, title: 'Все риски на нас', body: 'Заключение договора на разработку' },
//   { id: 6, title: 'Постоянно на связи', body: 'Менеджер на связи 25/8' },
// ]
</script>

<style scoped>
* {
  animation: ani 2s forwards;
}

h1 {
  font-size: 2vw;
  top: 12%;
  left: 20%;
}

.bg {
  background: radial-gradient(
    farthest-side at 70% 45%,
    rgb(207, 212, 212) 10%,
    rgb(245, 248, 250) 80%
  );
}

@media screen and (max-width: 1500px) {
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
