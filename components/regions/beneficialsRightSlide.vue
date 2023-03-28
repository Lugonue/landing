<template>
  <div class="row justify-content-center align-items-center h-100">
    <div class="col-4">
      <div class="d-flex flex-column align-items-center justify-content-end" style="height: 100vh">
        <img style="height: 80%;" src="media/header-component-img/statik-slider/Background-img-right-slide.png" alt="">
      </div>
    </div>
    <div class="col-5 text-center">
      <h1 class="text-center display-3 mb-10 text-dark">
        Ваша выгода
      </h1>
      <section class="d-flex flex-wrap align-items-center" style="height: 60vh; width: 75vh;">
        <div class="p-3 me-4 bg-info text-white fw-lighter shadow-sm" v-for="item in data">
          <h3 class="text-white fw-bolder">{{ item.title }}</h3>
          <p>{{ item.body }}</p>
        </div>
      </section>
      <div>
          <a href="#" class="btn btn-dark fs-1"><span class=" w-100 svg-icon svg-icon-1"></span>Сделать заказ</a>
        </div>
    </div>
  </div>
</template>
  
<script setup>
const data = [
  { id: 3, title: 'Опыт', body: 'полный анализ деятельности от ТОП-овых специалистов' },
  { id: 2, title: 'Заработок', body: 'Получайте высокие рейтинги и забирайте все работы' },
  { id: 1, title: 'Работа на постоянке', body: 'Заключение договора на разработку' },
  { id: 4, title: 'Оповещение', body: 'автоматическое оповещение прохождения этапов по почте или в соц сетях' },
  { id: 6, title: 'Все риски на нас', body: 'выполнение специалистом работы лежит на нашей области ответственности' },
  { id: 5, title: 'Постоянно на связи', body: 'менеджер на связи 25/8' },
]
</script>
  
<style scoped>

section div:hover {
  box-shadow: 10px 5px 5px rgb(88, 85, 85);
  position: relative;
  bottom: .5rem;
  right: .5rem;
}

* {
  animation: ani 1s forwards;
}

section div div {
  padding: 1rem;
  width: 30%;
  height: 30%;
  border-radius: 10px 100px / 130px;
  text-align: center;
  box-shadow: 100px;
}

section div div>p {
  font-size: 0.8rem;
}


.bg {
  width: 100%;
  height: 100%;
  /* background: linear-gradient(to right, rgba(156, 155, 156, 0.2), rgba(179, 177, 178, 0.2)), left / 100% no-repeat url("media/header-component-img/statik-slider/Background-img-right-slide.jpg"); */
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

@keyframes ani {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>