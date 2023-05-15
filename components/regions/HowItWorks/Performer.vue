<template>
  <hr class="border-light">
  <div class="contanier-xxl h-100">
    <div class="row h-100 justify-content-between">
      <div class="col-2 nav flex-column nav-pills overflow-auto" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <button v-for="button in buttonsToInstructions" :class="'nav-link mb-2' + (button.isActive ? ' active' : '')"
          id="v-pills-home-tab" data-bs-toggle="pill" :data-bs-target=button.href type="button" role="tab"
          aria-controls="v-pills-home" aria-selected="true">

          <span class="d-flex flex-column align-items-start">
            <span class="fs-4 fw-bolder">{{ button.title }}</span>
            <span class="fs-9 text-start">{{ button.text }}</span>
          </span>

        </button>
      </div>
      <div class="tab-content col-10" id="v-pills-tabContent">
        <div v-for="instruction in instructions"
          :class="'tab-pane fade show' + (instruction.isActive ? ' show active' : '')" :id=instruction.id role="tabpanel"
          aria-labelledby="v-pills-home-tab">

          <div class="container-fluid h-100">
            <div class="row h-100">
              <div class="container-fluid">
                <div class="row h-100">
                  <div class="col-4 d-flex flex-column text-white p-5 h-100">
                    <h4 class="text-white fw-bolder text-center mb-1">{{ instruction.title }}</h4>
                    <hr class="border-light">
                    <p class="" v-for="p in instruction.text">{{ p }}</p>
                  </div>
                  <div class="d-flex col-8 justify-content-end">
                    <img style="max-width: 90%; " alt="" :src=instruction.img />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!-- <div class="w-100 d-flex justify-content-start position-relative">
    <ul class="col-3 nav nav-tabs nav-pills border-0 me-5 mb-3 mb-md-0 fs-6 d-flex justify-content-center">
      <li class="w-75 nav-item me-0 mb-md-2" v-for="button in buttonsToInstructions">
        <a :class="'nav-link btn btn-flex btn-active-light-info' + (button.isActive ? ' active' : '')"
          data-bs-toggle="tab" :href=button.href>
          <span class="d-flex flex-column align-items-start">
            <span class="fs-4 fw-bolder">{{ button.title }}</span>
            <span class="fs-9 text-start">{{ button.text }}</span>
          </span>
        </a>
      </li>
    </ul>

    <div class="col-9 mt-10">
      <div :class="'position-absolute w-100 tab-pane fade' + (instruction.isActive ? ' show active' : '')"
        :id=instruction.id role="tabpanel" v-for="instruction in instructions">
        <div class="d-flex w-100">
          <div class="col-3 d-flex flex-column text-white border rounded border-secondary p-5">
            <h1 class="text-white fw-bolder text-center mb-5">{{ instruction.title }}</h1>
            <p class="fs-5" v-for="p in instruction.text">{{ p }}</p>
          </div>
          <div class="d-flex col-6 ms-5">
            <img style="max-width: 90%; " alt="" :src=instruction.img />
          </div>
        </div>
      </div>
      <div class="col-5 position-absolute bg-light tab-pane fade top-50" style="left: 50%;" id="kt_vtab_pane_13"
        role="tabpanel">
        <h3 class="border border-dark p-10">Скриншот 3</h3>
      </div>
    </div>
  </div> -->
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
    ], img: '/media/instructions/executerInstr-2.png'
  },
  {
    id: 'kt_vtab_pane_23', title: 'Рассмотрение в этот же день', text: [
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
    id: 'kt_vtab_pane_26', title: 'Подбор исполнителя', text: [
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
