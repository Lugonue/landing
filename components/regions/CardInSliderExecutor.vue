<template>
  <div class="d-flex flex-wrap w-100 h-100">
    <div class="col-5">
      <div class="rounded shadow-sm p-4 m-3 d-flex flex-column justify-content-center align-items-center"
        style="background-color: rgb(166,52,75);" id="card">
        <h1 class="text-white">Возможность уйти на фриланс</h1>
        <p class="text-white">Выполняйте больше работ, получайте хороший рейтинг и станьте нашим постоянным разработчиком</p>
      </div>
    </div>
    <div class="col-7 d-flex">
      <div class="col-6">
        <div class="rounded shadow-sm p-6 m-3 d-flex flex-column justify-content-center align-items-center"
          style="background: rgb(192,255,162);" id="card">
          <h1 class="">Удобство в работе</h1>
          <p class="">Получайте оповещения о новых проектах на почту и реагируйте</p>
        </div>
      </div>
      <div class="col-6">
        <div class="rounded-pill shadow-sm p-6 m-3 d-flex flex-column justify-content-center align-items-center"
          style="background: rgba(26,2,30,255);" id="card">
          <h1 class="text-white">Автоматизация</h1>
          <p class="text-white text-center">Вы меняете этап взятой работы и всем приходит уведомление</p>
        </div>
      </div>
    </div>
    <div class="col-7 d-flex ">
      <div class="col-6">
        <div class="text-white shadow-sm rounded-pill p-6 m-3 d-flex flex-column justify-content-center align-items-center"
          style="background: rgba(26,2,30,255);" id="card">
          <h1 class="text-white text-center">Опыт и прогресс</h1>
          <p class="text-white">С большим портфолио вы будете расти как специалист</p>
        </div>
      </div>
      <div class="col-6">
        <div class="border shadow-sm border-dark rounded p-6 m-3 d-flex flex-column justify-content-center align-items-center"
          id="card">
          <h1 class="text-start">Минимум рисков</h1>
          <p class="">Именно наша компания, а не заказчик платит за работу, даже если он отказался от неё</p>
        </div>
      </div>
    </div>
    <div class="col-5">
      <div class="rounded p-4 shadow-sm  m-3 d-flex flex-column justify-content-center align-items-center"
        style="background-color: rgb(166,159,53);" id="card">
        <h1 class="">Сосредоточьтесь на проекте</h1>
        <p lass="">Всё общение с заказчиком мы берем на себя, контакты по проекту будут только с нашим менеджером</p>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>

#card {
  height: 15vw;
  overflow: hidden;
}

#card > * {
  text-align: center;
}

h1 {
  font-size: 1vw;
  font-weight: 800;
  color: rgb(48, 25, 51);
}

p {
  font-size: 0.7vw;
  color: rgb(52, 23, 60);
}

</style>