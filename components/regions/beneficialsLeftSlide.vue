<template>
  <div class="row justify-content-center align-items-center h-100">
    <div class="col-2"></div>
    <div class="col-4">
      <h1 class="text-center display-3 mb-10">
        Ваша выгода
      </h1>
      <section class="d-flex flex-column justify-content-around">
        <div class="d-flex justify-content-center mb-5">
          <div class="p-5 me-5">
            <h1>Работа по договору</h1>
            <p>Заключение договора на разработку</p>
          </div>
        </div>
        <div class="d-flex justify-content-around mb-5">
          <div class="p-5">
            <h1>Мгновенный исполнитель</h1>
            <p>назначение проверенного исполнителя в день обращения</p>
          </div>
          <div class="p-5">
            <h1>Полный анализ</h1>
            <p>полный анализ деятельности от ТОП-овых специалистов</p>
          </div>
        </div>

        <div class="d-flex justify-content-around mb-5">
          <div class="p-5">
            <h1>Постоянно на связи</h1>
            <p>менеджер на связи 25/8</p>
          </div>
          <div class=" p-5">
            <h1>Все риски на нас</h1>
            <p>выполнение специалистом работы лежит на нашей области ответственности</p>
          </div>
        </div>
        <div class="d-flex justify-content-around mb-5">
          <div class="p-5">
            <h1>Оповещение</h1>
            <p>автоматическое оповещение прохождения этапов по почте или в соц сетях</p>
          </div>
        </div>
      </section>
    </div>
    <div class="col-4"><img class="w-100" src="media/header-component-img/statik-slider/Background-img-left-slide1.jpg" alt=""></div>
    <div class="col-2"></div>
  </div>
  <div>
    <a href="#" class="btn btn-dark"><span class=" w-100 svg-icon svg-icon-1"><svg>...</svg></span>Сделать заказ</a>
  </div>
</template>

<script>

</script>

<style scoped>
section div div:hover {
  box-shadow: 10px 5px 5px rgb(88, 85, 85);
  position: relative;
  bottom: 1rem;
  right: 1rem;
  font-size: 2rem !important;
}

* {
animation: ani 1s forwards;
}

section div div {
padding: 0 1rem;
width: 30%;
height: 30%;
border-radius: 10px 100px / 130px;
text-align: center;
background-color: rgb(249,250,251);
}

section div div>p {
font-size: 0.8rem;
}


.bg {
width: 100%;
height: 100%;
/* background: linear-gradient(to right, rgba(156, 155, 156, 0.2), rgba(179, 177, 178, 0.2)), left / 100% no-repeat url("media/header-component-img/statik-slider/Background-img-right-slide.jpg"); */
}

.myclass {
width: 50%;
height: 100%;

z-index: 2;

flex-direction: column;
justify-content: space-between;

font-size: 1rem;


transition-duration: 2s;
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