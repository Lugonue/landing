<template>
  <div class="row d-flex justify-content-center align-items-center h-100">
    <div class="col-lg-5 col-md-6 col-sm-10 text-center h-100 d-flex flex-column justify-content-start align-items-center" style="padding-top: 5rem;">
      <h1 class="w-100 overflow-auto botder rounded p-2 w-100 text-center mb-5 text-dark display-6" style="background: rgb(214,185,229, 0.8);">
        <!-- <i class="text-dark fs-1 fa-sharp fa-solid fa-angles-left"></i> -->
        <i class="text-dark display-6 fa-sharp fa-solid fa-angles-right"></i>
        <i class="text-dark display-6 fa-sharp fa-solid fa-angles-right"></i>
        <i class="text-dark display-6 fa-sharp fa-solid fa-angles-right"></i>
        <i class="text-dark display-6 fa-sharp fa-solid fa-angles-right"></i>
        Преимущества для Заказчика
        <!-- <i class="text-dark fs-1 fa-sharp fa-solid fa-angles-right"></i> -->
      </h1>
      <section class="col-sm-8 w-100 h-75 row d-flex flex-row flex-wrap align-items-center overflow-auto mb-3">
        <UiCardInSliderCustomer v-bind:item="item" v-for="item in data" />
      </section>
      <div style="justify-self: center;">
        <UiButtonToServise>Сделать заказ</UiButtonToServise>
      </div>
    </div>
    <div class="col-5 h-100" id="mobile">
      <div class="d-flex align-items-end justify-content-end h-100">
        <img style="height: 85%;" src="/media/header-component-img/statik-slider/Background-img-left-slide1.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
const data = [
  { id: 4, title: 'Все риски на нас ', body: 'Выполнение специалистом работы лежит на нашей области ответственности', icon: 'fa-exclamation-triangle' },
  { id: 3, title: 'Полный анализ', body: 'Полный анализ деятельности от ТОП-овых специалистов', icon: 'fa-chart-pie' },
  { id: 5, title: 'Постоянно на связи', body: 'Менеджер на связи 25/8', icon: 'fa-fax' },
  { id: 6, title: ' Работа по договору', body: 'Заключение договора на разработку', icon: 'fa-envelope' },
  { id: 2, title: 'Мгновенный исполнитель', body: 'Назначение проверенного исполнителя в день обращения', icon: 'fa-user' },
  { id: 1, title: 'Оповещение', body: 'Автоматическое оповещение прохождения этапов по почте или в соц сетях', icon: ' fa-bell' },
]

</script>

<style scoped>
* {
  animation: ani 1s forwards;
}

section {
  height: 70vh;
}

.bg {
  width: 100%;
  height: 100%;
  /* background: linear-gradient(to right, rgba(156, 155, 156, 0.2), rgba(179, 177, 178, 0.2)), left / 100% no-repeat url("media/header-component-img/statik-slider/Background-img-right-slide.jpg"); */
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