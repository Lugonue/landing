<template>
  <div class="row justify-content-center align-items-center h-100 bg-light">
    <div class="col-4 col-md-6 col-sm-6">
      <div class="d-flex flex-column align-items-center justify-content-end" style="height: 100vh">
        <img style="height: 80%;" src="media/header-component-img/statik-slider/Background-img-right-slide.png" alt="">
      </div>
    </div>
    <div class="col-lg-5 col-md-6 col-sm-6 text-center h-100 d-flex flex-column justify-content-evenly" style="padding-top: 5rem;">
      <h1 class="text-center display-3 mb-10 text-dark">
        Приемущества
      </h1>
      <section class="w-100 h-75 row d-flex flex-row flex-wrap align-items-start" style="">
        <UiCardInSlider v-bind:item="item" v-for="item in data"/>
      </section>
      <div>
          <a href="#" class="btn btn-dark ">Сделать заказ</a>
        </div>
    </div>
  </div>
</template>
  
<script setup>
const data = [
  { id: 3, title: 'Опыт', body: 'полный анализ деятельности от ТОП-овых специалистов' },
  { id: 2, title: 'Заработок', body: 'Получайте высокие рейтинги и забирайте все работы' },
  { id: 1, title: 'Работа на постоянке', body: 'автоматическое оповещение прохождения этапов по почте или в соц сетях'  },
  { id: 4, title: 'Оповещение', body:  'выполнение специалистом работы лежит на нашей области ответственности' },
  { id: 6, title: 'Все риски на нас', body: 'Заключение договора на разработку' },
  { id: 5, title: 'Постоянно на связи', body: 'менеджер на связи 25/8' },
]
</script>
  
<style scoped>
* {
  animation: ani 1s forwards;
}

.bg {
  width: 100%;
  height: 100%;
  /* background: linear-gradient(to right, rgba(156, 155, 156, 0.2), rgba(179, 177, 178, 0.2)), left / 100% no-repeat url("media/header-component-img/statik-slider/Background-img-right-slide.jpg"); */
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

  animation: ani 3s forwards;
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