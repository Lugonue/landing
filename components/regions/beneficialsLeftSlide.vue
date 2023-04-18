<template>
  <div class="row d-flex justify-content-center align-items-center h-100">
    <div class="col-lg-5 col-md-6 col-sm-6 text-center h-100 d-flex flex-column justify-content-around" style="padding-top: 5rem;">
      <h1 class="text-center display-3 text-dark">
        Приемущества
      </h1>
      <section class="w-100 h-75 row d-flex flex-row flex-wrap align-items-start">
        <UiCardInSliderCustomer v-bind:item="item" v-for="item in data" />
      </section>
      <div style="justify-self: center;">
        <a href="#" class="btn btn-dark ">Сделать заказ</a>
      </div>
    </div>
    <div class="col-5 h-100" id="mobile">
      <div class="d-flex align-items-end justify-content-end h-100">
        <img class="h-75" src="/media/header-component-img/statik-slider/Background-img-left-slide1.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
const data = [
  { id: 4, title: 'Постоянно на связи', body: 'Выполнение специалистом работы лежит на нашей области ответственности'  },
  { id: 3, title: 'Полный анализ', body: 'Полный анализ деятельности от ТОП-овых специалистов' },
  { id: 5, title: 'Все риски на нас', body: 'Менеджер на связи 25/8' },
  { id: 6, title: 'Оповещение', body: 'Заключение договора на разработку'  },
  { id: 2, title: 'Мгновенный исполнитель', body: 'Назначение проверенного исполнителя в день обращения' },
  { id: 1, title: 'Работа по договору', body: 'Автоматическое оповещение прохождения этапов по почте или в соц сетях'},
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