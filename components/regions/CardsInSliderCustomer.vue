<template>
  <div class="d-flex flex-wrap w-100 h-100">
    <div class="col-5">
      <div class="rounded shadow-sm p-4 m-3 d-flex flex-column justify-content-center align-items-start"
        style="background-color: rgb(166,52,75);" id="card">
        <h1 class="text-white">Все задачи в одном месте</h1>
        <p class="text-white text-start">в личном кабинете вы сможете смотреть какие проводятся работы и сколько осталось до их окончания</p>
      </div>
    </div>
    <div class="col-7 d-flex ">
      <div class="col-6">
        <div class="text-start rounded shadow-sm p-6 m-3 d-flex flex-column justify-content-center align-items-start"
          style="background: rgb(192,255,162);" id="card">
          <h1 class="">Мы точно сможем решить вашу задачу</h1>
          <p>На нашей платформе зарегистрировано более 100 топовых инженеров-экологов по всей стране</p>
        </div>
      </div>
      <div class="col-6">
        <div class="rounded-pill p-6 m-3 d-flex flex-column justify-content-center align-items-center"
          style="background: rgba(26,2,30,255);" id="card">
          <h1 class="text-white">Все риски на нас </h1>
          <p class="text-white">Выполнение специалистом работы лежит на нашей области ответственности</p>
        </div>
      </div>
    </div>
    <div class="col-7 d-flex ">
      <div class="col-6">
        <div class="text-white rounded-pill p-1 m-3 d-flex flex-column justify-content-center align-items-center"
          style="background: rgba(26,2,30,255);" id="card">
          <h1 class="text-white ">Будьте всегда в курсе </h1>
          <p class="text-white text-center">автоматическое оповещение по почте или в соц сетях</p>
        </div>
      </div>
      <div class="col-6">
        <div class="border border-dark rounded p-4 m-3 d-flex flex-column justify-content-center align-items-start"
          id="card">
          <h1 class="text-start">Минимум рисков</h1>
          <p class="">договор заключается с нашей компанией, мы назначим исполнителя в день обращения, а выполнение работы - это наша ответственност</p>
        </div>
      </div>
    </div>
    <div class="col-5">
      <div class="rounded p-4 m-3 d-flex flex-column justify-content-center align-items-start"
        style="background-color: rgb(166,159,53);" id="card">
        <h1 class="text-white">Никаких созвонов, ну только если вам сильно хочется</h1>
        <p class="text-start text-white">В личном кабинете к вам прикрепляется менеджер, который на связи 25/8. Он будет присылать только минимальные опросники</p>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
#card {
  height: 150px;
}

h1 {
  font-size: 1.3rem;
  font-weight: 800;
}

@media screen and (max-width: 1400px) {
  h1 {
    font-size: 1.2rem;
  }
  p {
    font-size: 0.7rem;
  }
}
</style>