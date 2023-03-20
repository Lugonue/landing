<template>
  <div class="row justify-content-center align-items-center">
    <div class="col-5 text-center">
      <h1 class="text-center display-3 mb-10">
        Ваша выгода
      </h1>
      <section class="d-flex flex-wrap align-items-center" style="height: 60vh;">
        <div class="p-1 me-4" v-for="item in data">
          <h3>{{ item.title }}</h3>
          <p>{{ item.body }}</p>
        </div>
        
      </section>
      <div style="justify-self: center;">
          <a href="#" class="btn btn-info fs-1"><span class=" w-100 svg-icon svg-icon-1"></span>Сделать заказ</a>
        </div>
    </div>
    <div class="col-4">
      <div class="d-flex flex-column align-items-start justify-content-end" style="height: 100vh">
        <img style="height: 80%;" src="media/header-component-img/statik-slider/Background-img-left-slide1.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
const data = [
  { id: 1, title: 'Работа по договору', body: 'Заключение договора на разработку' },
  { id: 3, title: 'Полный анализ', body: 'Полный анализ деятельности от ТОП-овых специалистов' },
  { id: 2, title: 'Мгновенный исполнитель', body: 'Назначение проверенного исполнителя в день обращения' },
  { id: 4, title: 'Постоянно на связи', body: 'Менеджер на связи 25/8' },
  { id: 5, title: 'Все риски на нас', body: 'Выполнение специалистом работы лежит на нашей области ответственности' },
  { id: 6, title: 'Оповещение', body: 'Автоматическое оповещение прохождения этапов по почте или в соц сетях' },
]

</script>

<style scoped>
a:hover {
  background-color: greenyellow !important;
}

section div:hover {
  box-shadow: 10px 5px 5px rgb(88, 85, 85);
  position: relative;
  bottom: 1rem;
  right: 1rem;
  font-size: 1.1rem;
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

  border-radius: 50%;
  background-color: rgb(154, 122, 122);
}

section>div:nth-child(2) {
  border-radius: 10px;
  background-color: rgb(90, 219, 97);
}

section>div:nth-child(3) {
  flex-grow: 1;
  border-radius: 10px;
  background-color: rgb(226, 173, 40);
}

section>div:nth-child(4) {
  flex-grow: 1;
  border-radius: 10px;
  background-color: rgb(226, 173, 40);
}

section>div:nth-child(5) {
  border-radius: 10px;
  background-color: rgb(90, 219, 97);
}

section>div:nth-child(6) {

  border-radius: 50%;
  background-color: rgb(154, 122, 122);
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
}</style>