<template>
  <div class="container-fluid" id="UniqueTradeOffer">
    <!-- <section class="w-100 h-100 position-absolute" style="background: url('/media/bg-2-block.PNG');"></section> -->
    <div class="container-xl d-flex flex-column justify-content-around mb-20 mt-20 p-10 rounded fs-4">
      <div class="row justify-content-between mt-10 mb-20">
        <div class="col-md-5 col-sm-6">
          <div class="">
            <p class=" fs-1 text-black fw-bold">Сервис для бизнеса<br> и инженеров-экологов</p>
            <p class="">Наша фриланс биржа открывает доступ к удаленным
              инженерам-экологам. Самые топовые разработчики имеют
              представление о сотнях компаний и знают, что им нужно.
              А это соответствие экологическому законодательству и
              приобретение лояльности клиентов. Инженеры-экологи могут
              присоединиться к нашей компании, начать развиваться и зарабатывать</p>
          </div>
        </div>
        <div class="col-md-5 col-sm-6 d-flex justify-content-center">
          <div class="">
            <div class=" d-flex " style="max-width: 300px;">
              <img style="max-width: 100%;" src="/media/2block.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-between mb-20">
        <div class="col-lg-5 mb-5">
          <div class="d-flex justify-content-center">
            <div class=" d-flex " style="max-width: 350px;">
              <img style="max-width: 100%;" src="/media/ESG.png" alt="">
            </div>
          </div>
        </div>
        <div class="col-lg-5 d-flex">
          <div class="">
            <p class="fs-1 text-black fw-bold">Для чего нужны экологические
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
      <div class="row justify-content-between mb-20">
        <div class="col-lg-5">
          <div class="">
            <p class="fs-1 text-black fw-bold">Это не совсем обычная
              фриланс-биржа</p>
            <p class="">Наша фриланс биржа открывает доступ к удаленным
              инженерам-экологам. Самые топовые разработчики имеют
              представление о сотнях компаний и знают, что им нужно.
              А это соответствие экологическому законодательству и
              приобретение лояльности клиентов. Инженеры-экологи могут
              присоединиться к нашей компании, начать развиваться и зарабатывать</p>
          </div>
        </div>
        <div class="col-lg-5 d-flex justify-content-center">
          <div class="">
            <div class=" d-flex " style="max-width: 300px;">
              <img style="max-width: 100%;" src="/media/scroll.png" alt="">
            </div>
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
#UniqueTradeOffer {
  background: no-repeat center/120% url('/media/bg-2-block.PNG');
  background-position: 15% 25%;
  /* background: linear-gradient(45deg,rgb(253, 252, 252) 10%, rgb(228,230,239) 40%, rgb(239, 201, 239) 50%); */
}

@media screen and (max-width: 768px) {
  #UniqueTradeOffer {
    background: none;
  }

  #UniqueTradeOffer>div>div {
    margin-bottom: 50px !important;
  }
}
</style>