<template>
  <div class="container-fluid py-20 px-0" id="about">
    <!-- <section class="w-100 h-100 position-absolute" style="background: url('/media/bg-2-block.PNG');"></section> -->
    <div class="container-xxl d-flex flex-column justify-content-around">
      <div class="row justify-content-between my-5 flex-wrap-reverse">
        <div class="col-xs-12 col-md-6 col-sm-12">
          <h3 class="display-6 px-sm-5">
            Сервис для бизнеса и инженеров-экологов
          </h3>
          <p class="text-gray-700 fs-4 fs-4 px-sm-5 px-xs-5">
            Наша фриланс биржа открывает доступ к удаленным инженерам-экологам.
            Самые топовые разработчики имеют представление о сотнях компаний и
            знают, что им нужно. А это соответствие экологическому
            законодательству и приобретение лояльности клиентов.
            Инженеры-экологи могут присоединиться к нашей компании, начать
            развиваться и зарабатывать
          </p>
        </div>
        <div class="col-xs-12 col-md-6 col-sm-12">
          <div
            class="d-flex w-100 h-100 align-items-center justify-content-center mb-5"
          >
            <img style="max-width: 60%" src="/media/2block.png" alt="" />
          </div>
        </div>
      </div>
      <div class="row justify-content-between my-5">
        <div class="col-xs-12 col-md-6 col-sm-12 mb-5">
          <div
            class="d-flex w-100 h-100 align-items-center justify-content-center"
          >
            <img
              style="max-width: 60%"
              src="/media/ESG.png"
              alt="Экологический тренд"
            />
          </div>
        </div>
        <div class="col-xs-12 col-md-6 col-sm-12 pt-5">
          <div class="">
            <h3 class="display-6 px-sm-5">
              Для чего нужны экологические работы
            </h3>
            <p class="text-gray-700 fs-4 px-sm-5">
              По законодательству к юридическим лицам и ИП предъявляют
              требования природоохранные органы Минприроды и Росприроднадзора.
              Требуют отчеты, проекты, паспорта и разрешения. В 2021 году
              выявлен рост зафиксированных нарушений по сравнению с 2020 годом
              почти в 2 раза. Доля выигранных судебных дел снижается с 47% до
              44%. За трендами идёт активная реформа законодательства и КоАп
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-between mb-20 flex-wrap-reverse">
        <div class="col-xs-12 col-md-6 col-sm-12">
          <div class="">
            <h3 class="display-6 px-sm-5">
              Это не совсем обычная фриланс-биржа
            </h3>
            <p class="text-gray-700 fs-4 px-sm-5">
              К работе мы прикрепляем своего менеджера. Он сам производит
              релевантный подбор как одного специалиста, так и нескольких для
              комплексного решения задачи. Компаниям все чаще требуются команды
              подрядчиков, а не только один фрилансер. Решение, которое может
              масштабироваться от двух фрилансеров до сотен фрилансеров, имеет
              решающее значение для роста. На всех этапах менеджер контролирует
              работы. По окончанию проводится внутренний аудит. Договора
              заключаются с нашей компаний как стороны заказчика, так со стороны
              и исполнителя.
            </p>
          </div>
        </div>
        <div class="col-xs-12 col-md-6 col-sm-12 my-5">
          <div
            class="d-flex w-100 h-100 align-items-center justify-content-end"
          >
            <img style="max-width: 60%" src="/media/scroll.png" alt="" />
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

#about {
  position: relative;
  z-index: 1;
  background: none;
}
#about::before {
  content: "";
  position: absolute;
  display: block;
  z-index: -1;
  top: 5%;
  width: 100%;
  height: 100%;
  background: no-repeat url("/media/bg-2-block.png");
  background-size: 100%;
  background-position: 100%;
  opacity: 0.7;
}

@media screen and (max-width: 1000px) {
  #about::before {
    display: none;
  }

  #about > div > div {
    margin-bottom: 50px;
  }
}
</style>
