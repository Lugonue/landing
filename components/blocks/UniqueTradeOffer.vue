<template>
  <div class="container-fluid bg-body-secondary d-flex flex-column justify-content-around" id="bg" style="height: 200vh; ">
    <div class="row justify-content-center">
      <div class="col-lg-4">
        <div class=" card p-6">
          <p class=" display-6 text-dark fw-bolder">Хотите сделать бизнес в соответствии с экологическим
            законодательством и завоевать
            лояльность клиентов?</p>
        </div>
      </div>
      <div class="col-lg-5 d-flex position-relative">
        <div class="card shadow-sm d-flex no-wrap flex-row pe-3" style=" top: 7rem;">
          <div class="card-body">
            <p>Наш веб-сервис открывает доступ к инженерам-экологам, которые способны
              разработать любые проекты.Самые топовые разработчики имеют представление о сотнях
              компаний и знают, что Вам нужно.</p>
            <p>Инженеры-экологи могут присоединиться к нашей компании, и начать
              развиваться и зарабатывать</p>
          </div>
          <div class=" d-flex " style="max-width: 300px; align-items: center;">
            <img style="max-width: 100%;" src="/media/ESG.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-4">
        <div class="card shadow-sm p-5" style="background: right / contain no-repeat url('/media/scroll.jpg'), white">
          <p class="fs-1 text-dark fw-bolder">Для чего нужны экологические работы?</p>
          <p>По законодательству к юридическим лицам и ИП предъявляют требования
            природоохранные органы Минприроды и Росприроднадзора</p>
          <p>Требуют отчеты, проекты, паспорта и разрешения</p>
        </div>
      </div>
      <div class=" col-lg-5 justify-content-end  position-relative" style=" top: 3rem;">
        <!--begin::Accordion-->
        <div class="accordion accordion-icon-toggle" id="kt_accordion_1">
          <div class="accordion-item">
            <h2 class="accordion-header" id="kt_accordion_1_header_1">
              <button class="accordion-button fs-4 fw-bold" type="button" data-bs-toggle="collapse"
                data-bs-target="#kt_accordion_1_body_1" aria-expanded="true" aria-controls="kt_accordion_1_body_1">
                Фриланс биржа с уклоном на контроль работ
              </button>
            </h2>
            <div id="kt_accordion_1_body_1" class="accordion-collapse collapse show"
              aria-labelledby="kt_accordion_1_header_1" data-bs-parent="#kt_accordion_1">
              <div class="accordion-body">
                “Это не совсем обычная фриланс биржа.“ К работе мы прекрепляем своего менеджера. Он сам
                производит релевантный подбор как одного специалиста, так и несколько для комлпексного решения задачи.
                Компаниям все чаще требуются команды подрядчиков, а не только один фрилансер. Решение, которое может
                масштабироваться от двух фрилансеров до сотен фрилансеров, имеет решающее значение для роста. На всём
                этапе менеджер контролирует работы. По окончанию работы проводится внутренний аудит итоговой работы.
                Договора заключаются с нашей компаний как стороны заказчика, так со стороны и исполнителя.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="kt_accordion_1_header_2">
              <button class="accordion-button fs-4 fw-bold collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#kt_accordion_1_body_2" aria-expanded="false" aria-controls="kt_accordion_1_body_2">
                Сводка правонарушений
              </button>
            </h2>
            <div id="kt_accordion_1_body_2" class="accordion-collapse collapse" aria-labelledby="kt_accordion_1_header_2"
              data-bs-parent="#kt_accordion_1">
              <div class="accordion-body">
                В 2021 году выявлен рост зафиксированных нарушений
                по сравнению с 2020 годом почти в 2 раза. Доля выигранных
                судебных дел снижается с 47% до 44%. За трендами идёт
                активная реформа законодательства и КоАп
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="kt_accordion_1_header_3">
              <button class="accordion-button fs-4 fw-bold collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#kt_accordion_1_body_3" aria-expanded="false" aria-controls="kt_accordion_1_body_3">
                Accordion Item #3
              </button>
            </h2>
            <div id="kt_accordion_1_body_3" class="accordion-collapse collapse" aria-labelledby="kt_accordion_1_header_3"
              data-bs-parent="#kt_accordion_1">
              <div class="accordion-body">
                ...
              </div>
            </div>
          </div>
        </div>
        <!--end::Accordion-->
      </div>
    </div>
  </div>
</template>

<style scoped>

#bg {
  background: linear-gradient(rgb(233, 196, 244), white)
}
</style>