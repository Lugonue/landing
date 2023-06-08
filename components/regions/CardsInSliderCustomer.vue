<template>
  <div class="d-flex flex-wrap w-100 h-100">
    <div class="col-5">
      <div class="rounded shadow-sm p-4 m-3 d-flex flex-column justify-content-center align-items-center"
        style="background-color: rgb(166,52,75);" id="card">
        <h1 class="">Все задачи в одном месте</h1>
        <p class="">В личном кабинете вы сможете смотреть какие проводятся работы и сколько осталось до их окончания</p>
      </div>
    </div>
    <div class="col-7 d-flex ">
      <div class="col-6">
        <div class="rounded shadow-sm p-6 m-3 d-flex flex-column justify-content-center align-items-center"
          style="background: rgb(192,255,162);" id="card">
          <h1 class="">Приемлемые цены</h1>
          <p class="">Упрощенные бизнес процессы позволяют выставлять цены ниже, чем в офисных компаниях</p>
        </div>
      </div>
      <div class="col-6">
        <div class="rounded-pill p-6 m-3 d-flex flex-column justify-content-center align-items-center"
          style="background: rgba(26,2,30,255);" id="card">
          <h1 class="text-white">Будьте всегда в курсе</h1>
          <p class="text-white">Автоматическое оповещение по почте или в месенджерах</p>
        </div>
      </div>
    </div>
    <div class="col-7 d-flex ">
      <div class="col-6">
        <div class="text-white rounded-pill p-2 m-3 d-flex flex-column justify-content-center align-items-center"
          style="background: rgba(26,2,30,255);" id="card">
          <h1 class="text-white ">Бонус</h1>
          <p class="text-white">При необходимости мы проводём полный анализ деятельности, после которого вы поймёте какие документы нужны</p>
        </div>
      </div>
      <div class="col-6">
        <div class="border border-dark rounded p-4 m-3 d-flex flex-column justify-content-center align-items-center"
          id="card">
          <h1 class="">Мы точно сможем решить вашу задачу</h1>
          <p class="">На нашей платформе зарегистрировано более 50 топовых инженеров-экологов по всей стране</p>
        </div>
      </div>
    </div>
    <div class="col-5">
      <div class="rounded p-4 m-3 d-flex flex-column justify-content-center align-items-center"
        style="background-color: rgb(166,159,53);" id="card">
        <h1 class="">Минимум рисков</h1>
        <p class="">Договор заключается с нашей компанией, мы назначим исполнителя в день обращения, а выполнение работы - это наша ответственность</p>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
#card {
  height: 10vw;
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