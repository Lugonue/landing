<template>
  <div class="row justify-content-center align-items-center h-100 bg-light" id="bg">
    <div class="col-4">
      <div class="d-flex align-items-end justify-content-center" style="height: 100vh">
        <img style="height: 80%;" src="/media/header-component-img/statik-slider/Background-img-right-slide.png" alt="">
      </div>
    </div>
    <div class="col-lg-7 col-md-7 col-sm-7 text-center h-100 d-flex flex-column justify-content-evenly elign-items-center" style="padding-top: 5rem;">
      
      <h1 class="w-75 d-flex align-items-center justify-content-center rounded p-2 w-75 text-center mb-5 display-5 text-gray-700">
        Преимущества для Исполнителя
      </h1>
      
      <section class="w-75 h-75 row d-flex flex-row flex-wrap align-items-start">
        <RegionsCardInSliderExecutor />
        <!-- <UiCardInSlider v-bind:item="item" v-for="item in data"/> -->
      </section>
    </div>
  </div>
</template>
  
<script setup>
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
  background: radial-gradient(farthest-side at 55% 45%, rgb(207, 212, 212) 10%, rgb(245,248,250) 80%);

}

section {
  width: 25%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow-y: auto;

  animation: ani 5s forwards;
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