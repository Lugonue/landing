<template>
  <div class="d-flex h-100" style="min-height: 80vh">
    <div class="d-flex flex-column justify-content-start">
      <div class="ms-10 nav nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <button v-for="button in buttonsToInstructions"
          :class="'btn btn-outline btn-outline-dashed btn-outline-info me-2 mt-2' + (button.isActive ? ' active' : '')"
          id="v-pills-home-tab" data-bs-toggle="pill" :data-bs-target=button.href type="button" role="tab"
          aria-controls="v-pills-home" aria-selected="true">

          <span class="d-flex flex-column align-items-start">
            <span class="fs-4 fw-bolder">{{ button.title }}</span>
            <!-- <span class="fs-9 text-start">{{ button.text }}</span> -->
          </span>
        </button>
      </div>
      <div class="tab-content flex-grow-1 h-100" id="v-pills-tabContent">
        <div v-for="instruction in instructions"
          :class="'tab-pane h-100 fade show' + (instruction.isActive ? ' show active' : '')" :id=instruction.id
          role="tabpanel" aria-labelledby="v-pills-home-tab">

          <div class="container-fluid h-100">
            <div class="row h-100">
              <div
                class="col-12 col-lg-6 col-xl-6 col-xxl-6 d-flex flex-column justify-content-start text-white p-5 h-100">
                <div class="position-relative" style="padding: 5% 0px 5% 0px; min-height: 50%; min-width: 100%;">
                  <h4 class="text-white fw-bolder text-start mb-4 fs-1">{{ instruction.title }}</h4>
                  <p class="fs-5" v-for="p in instruction.text">{{ p }}</p>
                  <UiButtonToServise class="position-absolute translate-middle" style="top: 100%; left: 50%;">Продолжить в
                    сервисе</UiButtonToServise>
                </div>

              </div>

              <div class="d-flex col-12 col-lg-6 col-xl-6 col-xxl-6 justify-content-center align-items-center">
                <div class="d-flex w-100 h-auto" style="padding: 10% 20px 10% 20px;">
                  <img style="max-width: 80%; height: auto; " alt="" :src=instruction.img />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const buttonsToInstructions = [
  { href: '#kt_vtab_pane_21', title: 'Шаг 1', text: 'Регистрация', isActive: true },
  { href: '#kt_vtab_pane_22', title: 'Шаг 2', text: 'Создание заказа' },
  { href: '#kt_vtab_pane_23', title: 'Шаг 3', text: '' },
  { href: '#kt_vtab_pane_24', title: 'Шаг 4', text: 'Заключение договора с нашим веб-сервисом' },
  { href: '#kt_vtab_pane_25', title: 'Шаг 5', text: 'Назначение менеджера заказа' },
  { href: '#kt_vtab_pane_26', title: 'Шаг 6', text: 'Подбор исполнителя' },
  { href: '#kt_vtab_pane_27', title: 'Шаг 7', text: 'Выполнение работы' },
  { href: '#kt_vtab_pane_28', title: 'Шаг 8', text: 'Прием работы' },
]

const instructions = [
  {
    id: 'kt_vtab_pane_21', title: 'Регистрация', text: [
      'Войдите в веб-сервис нажав на любую кнопку «войти в сервис» на этой странице',
      'Заполните форму, выберете свою роль и нажмите продолжить.',
      'На указанную почту придёт уведомление, которое необходимо подтвердить'
    ],
    img: '/media/instructions/customerInstr-1.png', isActive: true
  },
  {
    id: 'kt_vtab_pane_22', title: 'Создание заказа', text: [
      'Перейдите в раздел «мои компетенции» и заполните данные о типах работ, городе выполнения работ и т.д',
      'Укажите наиболее подробно виды работ для лучшего ориентирования нашего менеджера',
      'Выберете способ получения уведомлений о новых аказах',
    ], img: ''
  },
  {
    id: 'kt_vtab_pane_23', title: 'Рассмотрение в этот же день', text: [ ''
    ], img: ''
  },
  {
    id: 'kt_vtab_pane_24', title: 'Заключение договора', text: [
    ], img: '/media/instructions/customerInstr-4.png'
  },
  {
    id: 'kt_vtab_pane_25', title: 'Назначение менеджера', text: [
    ], img: ''
  },
  {
    id: 'kt_vtab_pane_26', title: 'Подбор исполнителя', text: ['Мы прикрепляем к проекту нашего менеджера. Все вопросы необходимо задавать ему. Посмотреть его контакты можно внутри заказа «контакты менеджера», но он и так с вами свяжется.Стоит держать плотную связь с ним, так как он будет защищать интересы при звонках в органы и заказчику.'
    ], img: ''
  },
  {
    id: 'kt_vtab_pane_27', title: 'Уведомляем всех через сервис', text: [
      'Мы прикрепляем к проекту нашего менеджера',
      'Обмен файлами происходит именно с ним вне сервиса.',
      'При выполнении работы меняйте этапность. Она автоматически уведомит заказчика, а также менеджера о переходе на следующую ступень.',
      'Поменять этап можно внутри заказа кнопкой «сменить этап»',


    ], img: '',
  },
  {
    id: 'kt_vtab_pane_28', title: 'Прием работы', text: [
      'При согласовании работы со всеми участниками, менеджер закрывает заказ и он попадает в раздел выполненные',
    ], img: '',
  }
]
</script>
