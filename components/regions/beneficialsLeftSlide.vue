<template>
  <div class="container-fluid h-100 customBg">
    <div class="row justify-content-center align-items-center h-100 ">
      <div class="col-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 h-100">
        <div class="container-fluid overflow-hidden h-100">
          <div class="row h-100 flex-column justify-content-center align-items-center">
            <h1 class="rounded p-2 text-center mb-5 fs-1 text-gray-700">
              Преимущества для Заказчика
            </h1>
            <section class="h-50 my-5">
              <RegionsCardsInSliderCustomer />
            </section>
            <div v-if="hideImg" class="text-center mt-4">
              <UiButtonToServise>Войти в сервис</UiButtonToServise>
            </div>
            
          </div>

        </div>

      </div>

      <div class="col-4 h-100" id="mobile">
        <div v-if="hideImg" class="d-flex align-items-end justify-content-start h-100">
          <img style="height: 85%;" src="/media/header-component-img/statik-slider/Background-img-left-slide1.png" alt="">
        </div>
        <div v-else class="d-flex align-items-center justify-content-center h-100">
          <UiButtonToServise>Войти в сервис</UiButtonToServise>
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



const data = [
  // { id: 4, title: 'Все риски на нас ', body: 'Выполнение специалистом работы лежит на нашей области ответственности', icon: 'fa-exclamation-triangle' },
  // { id: 3, title: 'Полный анализ', body: 'Полный анализ деятельности от ТОП-овых специалистов', icon: 'fa-chart-pie' },
  // { id: 5, title: 'Постоянно на связи', body: 'Менеджер на связи 25/8', icon: 'fa-fax' },
  // { id: 6, title: ' Работа по договору', body: 'Заключение договора на разработку', icon: 'fa-envelope' },
  // { id: 2, title: 'Мгновенный исполнитель', body: 'Назначение проверенного исполнителя в день обращения', icon: 'fa-user' },
  // { id: 1, title: 'Оповещение', body: 'Автоматическое оповещение прохождения этапов по почте или в соц сетях', icon: ' fa-bell' },
]

</script>

<style scoped>
* {
  animation: ani 2s forwards;
}

section {
  height: 70vh;
}

.customBg {
  z-index: 2;
  background: radial-gradient(farthest-corner at 15% 25%, rgb(208, 233, 233, 0.6) 1%, rgb(218, 139, 209) 80%);
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