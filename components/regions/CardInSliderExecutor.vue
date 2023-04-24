<template>
  <div class="d-flex flex-wrap w-100 h-75">
    <div class="col-sm-12 col-md-12 col-lg-5 ">
      <div class="rounded shadow-sm p-4 m-3 d-flex flex-column justify-content-center align-items-start"
        style="background-color: rgb(166,52,75);" id="card">
        <h1 class="text-white">Оповещение</h1>
        <p class="text-white text-start">Автоматическое оповещение прохождения этапов по почте или в соц сетях</p>
      </div>
    </div>
    <div class="col-sm-12 col-md-12 col-lg-8 col-xl-7 d-flex ">
      <div class="col-6">
        <div class="text-start rounded shadow-sm p-6 m-3 d-flex flex-column justify-content-center align-items-start"
          style="background: rgb(192,255,162);" id="card">
          <h1 class="">Все риски на нас</h1>
          <p> Заключение договора на разработку</p>
        </div>
      </div>
      <div class="col-6">
        <div class="rounded-pill p-6 m-3 d-flex flex-column justify-content-center align-items-center"
          style="background: rgba(26,2,30,255);" id="card">
          <h1 class="text-white">Заработок</h1>
          <p class="text-white">Получайте высокие рейтинги и забирайте все работы!</p>
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-12 col-lg-7 col-xl-7 d-flex ">
      <div class="col-6">
        <div class="text-white rounded-pill p-6 m-3 d-flex flex-column justify-content-center align-items-center"
          style="background: rgba(26,2,30,255);" id="card">
          <h1 class="text-white ">Опыт </h1>
          <p>Полный анализ деятельности от ТОП-овых специалистов</p>
        </div>
      </div>
      <div class="col-6">
        <div class="border border-dark rounded p-6 m-3 d-flex flex-column justify-content-center align-items-start"
          id="card">
          <h1 class="text-start">Постоянно на связи</h1>
          <p class="">Менеджер на связи 25/8</p>
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-12 col-lg-5 ">
      <div class="rounded p-4 m-3 d-flex flex-column justify-content-center align-items-start"
        style="background-color: rgb(166,159,53);" id="card">
        <h1 class="">Работа на постоянке</h1>
        <p lass="text-start">Авыполнение специалистом работы лежит на нашей области ответственности</p>
      </div>
    </div>
  </div>
  <div class="w-100 d-flex justify-content-center">
    <UiButtonToServise>Войти в сервис</UiButtonToServise>
  </div>
</template>

<script>
</script>

<style scoped>
#card {
  height: 150px;
}

#card:hover {
  box-shadow: 1px 10px 10px rgb(71, 68, 68) !important;
  transition-duration: .33s;
}

h1 {
  font-size: 1.6rem;
  font-weight: 800;
}
</style>