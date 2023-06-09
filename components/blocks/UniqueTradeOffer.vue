<template>
  <div class="container-fluid py-20 px-0" id="UniqueTradeOffer">
    <!-- <section class="w-100 h-100 position-absolute" style="background: url('/media/bg-2-block.PNG');"></section> -->
    <div class="container-xxl d-flex flex-column justify-content-around">
      <div class="row justify-content-between my-20">
        <div class="col-xs-12 col-md-6 col-sm-12">
            <p class=" fs-1 text-black fw-bolder">Сервис для бизнеса<br> и инженеров-экологов</p>
            <p class="">Наша фриланс биржа открывает доступ к удаленным
              инженерам-экологам. Самые топовые разработчики имеют
              представление о сотнях компаний и знают, что им нужно.
              А это соответствие экологическому законодательству и
              приобретение лояльности клиентов. Инженеры-экологи могут
              присоединиться к нашей компании, начать развиваться и зарабатывать
            </p>
        </div>
        <div class="col-xs-12 col-md-6 col-sm-12">
          <div class="d-flex w-100 h-100 align-items-center justify-content-center">
            <img style="max-width: 60%;" src="/media/2block.png" alt=""/>
          </div>
        </div>
      </div>
      <div class="row justify-content-between my-20">
        <div class="col-xs-12 col-md-6 col-sm-12">
          <div class="d-flex w-100 h-100 align-items-center justify-content-center">
              <img style="max-width: 60%;" src="/media/ESG.png" alt="Экологический тренд">
          </div>
        </div>
        <div class="col-xs-12 col-md-6 col-sm-12 pt-5">
          <div class="">
            <p class="fs-1 text-black fw-bolder">Для чего нужны экологические
              работы</p>
            <p class="">По законодательству к юридическим лицам и ИП предъявляют
              требования природоохранные органы Минприроды и
              Росприроднадзора. Требуют отчеты, проекты, паспорта и
              разрешения. В 2021 году выявлен рост зафиксированных
              нарушений по сравнению с 2020 годом почти в 2 раза. Доля
              выигранных судебных дел снижается с 47% до 44%.
              За трендами идёт активная реформа законодательства и КоАп</p>
          </div>
        </div>
      </div>
      <div class="row justify-content-between my-20">
        <div class="col-xs-12 col-md-6 col-sm-12">
          <div class="">
            <p class="fs-1 text-black fw-bolder">Это не совсем обычная
              фриланс-биржа</p>
            <p class="">Наша фриланс биржа открывает доступ к удаленным
              инженерам-экологам. Самые топовые разработчики имеют
              представление о сотнях компаний и знают, что им нужно.
              А это соответствие экологическому законодательству и
              приобретение лояльности клиентов. Инженеры-экологи могут
              присоединиться к нашей компании, начать развиваться и зарабатывать</p>
          </div>
        </div>
        <div class="col-xs-12 col-md-6 col-sm-12">
          <div class="d-flex w-100 h-100 align-items-center justify-content-end">
              <img style="max-width: 60%;" src="/media/scroll.png" alt="">
          </div>
        </div>
      </div>
      <div class="w-100 d-flex justify-content-center">
        <UiButtonToServise>Сделать заказ</UiButtonToServise>
      </div>
    </div>
  </div>
</template>

<style scoped>

p {
  font-size: 1.3rem;
}

#UniqueTradeOffer {
  position: relative;
  z-index: 1;
  background: none;
}
#UniqueTradeOffer::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 5%;
  width: 100%;
  height: 100%;
  background: no-repeat url('/media/bg-2-block.png');
  background-size: 100%;
  background-position: 100%;
  rotate: -3deg;
}

@media screen and (max-width: 1000px) {
  #UniqueTradeOffer::before {
    display: none;
  }

  #UniqueTradeOffer>div>div {
    margin-bottom: 50px;
  }
}

</style>