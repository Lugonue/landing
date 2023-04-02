<template>
  <div class="row justify-content-around align-items-center">
    <div class="col-lg-6 col-md-12 text-center">
      <h1 class="text-center display-3 mb-10 text-dark">
        Приемущества
      </h1>
      <section class="d-flex flex-wrap align-items-center" style="max-height: 500px; max-width: 1000px;">
        <div class="p-4 ms-4 shadow-lg" v-for="item in data">
          <h3 class="fw-bolder fs-1">{{ item.title }}</h3>
          <p style="font-size: 0.8rem;">{{ item.body }}</p>
        </div>

      </section>
      <div style="justify-self: center;">
        <a href="#" class="btn btn-dark fs-1"><span class=" w-100 svg-icon svg-icon-1"></span>Сделать заказ</a>
      </div>
    </div>
    <div class="col-4" id="mobile">
      <div class="d-flex align-items-end justify-content-end" style="height: 100vh">
        <img style="height: 80%;" src="media/header-component-img/statik-slider/Background-img-left-slide1.png" alt="">
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
a:hover {
  background-color: greenyellow !important;
}

section div:hover {
  box-shadow: 10px 5px 5px rgb(88, 85, 85);
  position: relative;
  bottom: .5rem;
  right: .5rem;
}

* {
  animation: ani 1s forwards;
}

section {
  height: 70vh;
}

section>div {
  width: 25%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  animation: ani 3s forwards;
}

section>div:nth-child(1) {
  flex-grow: 1;
  border-radius: 30px;
  background-color: #F0910F;
}

section>div:nth-child(2) {
  border-radius: 30px;
  background-color: #0FF091;
}

section>div:nth-child(3) {
  border-radius: 35%;
  color: #ff9603;
  font-size: 0.7rem;
  background-color: #910FF0;
}

section>div:nth-child(3) h3 {
  font-size: 1.5rem;
  color: rgb(1, 1, 70);
}

section>div:nth-child(4) {
  border-radius: 35%;
  color: #ff9603;
  background-color: #910FF0;
}

section>div:nth-child(5) {
  border-radius: 30px;
  background-color: #0FF091;
}

section>div:nth-child(6) {
  flex-grow: 1;
  border-radius: 30px;
  background-color: #F0910F;
}

section>div:nth-child(4) h3 {
  color: rgb(15, 2, 27);
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