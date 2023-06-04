<template>
  <div class="container-fluid h-100">
    <div class="row justify-content-center align-items-center h-100 ">
      <div class="col-4 h-100" id="mobile">
        <div v-if="hideImg" class="d-flex align-items-end justify-content-center" style="height: 100vh">
          <img style="height: 80%;" src="/media/header-component-img/statik-slider/Background-img-right-slide.png" alt="">
        </div>
        <div v-else class="d-flex align-items-center justify-content-center h-100">
          <UiButtonToServise>Войти в сервис</UiButtonToServise>
        </div>
      </div>
      <div class="col-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 h-100">
        <div class="container-fluid overflow-hidden h-100">
          <div class="row h-100 flex-column justify-content-center align-items-center">
            <h1
              class="w-100 rounded text-center mt-5 fs-1 text-gray-700">
              Преимущества для Исполнителя
            </h1>
            <section class="h-50 my-5">
              <RegionsCardInSliderExecutor />
            </section>
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

const hideImg = ref(true)

onMounted(() => {
  hideImg.value = window.innerWidth > 1200;
  window.addEventListener('resize', () => hideImg.value = window.innerWidth > 1200)
})

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

#bg {
  background: radial-gradient(farthest-side at 55% 45%, rgb(207, 212, 212) 10%, rgb(245, 248, 250) 80%);

}

@media screen and (max-width: 1500px) {}

@keyframes ani {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>