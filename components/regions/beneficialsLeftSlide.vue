<template>
  <div class="row d-flex justify-content-center align-items-center h-100 customBg">
    <div class="col-lg-6 col-md-8 col-sm-10 text-center h-100 d-flex flex-column justify-content-center align-items-center " style="padding-top: 5rem;">

      <h1 class="overflow-auto rounded p-2 text-center mb-5 display-5 text-gray-700">
        Преимущества для Заказчика
      </h1>

      <section class="w-75  h-75 row d-flex flex-row flex-wrap align-items-end ps-10">
        <RegionsCardsInSliderCustomer />
      </section>

    </div>
    <div class="col-6 h-100" id="mobile">
      <div class="d-flex align-items-end justify-content-start h-100">
        <img style="height: 85%;" src="/media/header-component-img/statik-slider/Background-img-left-slide1.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
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
  background: radial-gradient( farthest-corner at 15% 25%, rgb(208, 233, 233, 0.6) 1%, rgb(218,139,209) 80%);
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