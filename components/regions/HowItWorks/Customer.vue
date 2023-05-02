<template>
  <hr class="border-light">
  <div class="d-flex justify-content-start position-relative">
    <ul class="col-3 nav nav-tabs nav-pills border-0 me-5 mb-3 mb-md-0 fs-6 d-flex justify-content-center">
      <li class="w-75 nav-item me-0 mb-md-2" v-for="button in buttonsToInstructions">
        <a :class="'nav-link btn btn-flex btn-active-light-secondary' + (button.isActive ? ' active' : '')" data-bs-toggle="tab" :href=button.href>
          <!-- <span class="svg-icon svg-icon-2"><svg>...</svg></span> -->
          <span class="d-flex flex-column align-items-start">
            <span class="fs-4 fw-bolder">{{ button.title }}</span>
            <span class="fs-9 text-start">{{ button.text }}</span>
          </span>
        </a>
      </li>
    </ul>

    <div class="col-9 mt-10">
      <div :class="'position-absolute tab-pane fade' + (instruction.isActive ? ' show active' : '')" :id=instruction.id role="tabpanel"
        v-for="instruction in instructions">
        <div class="d-flex w-100">
          <div class="d-flex col-3 flex-column text-white border rounded border-secondary p-5">
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
  </div>
</template>

<script setup>

const buttonsToInstructions = [
  {href: '#kt_vtab_pane_11', title: 'Шаг 1', text: 'Регистрация', isActive: true},
  {href: '#kt_vtab_pane_12', title: 'Шаг 2', text: 'Создание заказа'},
  {href: '#kt_vtab_pane_13', title: 'Шаг 3', text: ''},
  {href: '#kt_vtab_pane_14', title: 'Шаг 4', text: 'Заключение договора с нашим веб-сервисом'},
  {href: '#kt_vtab_pane_15', title: 'Шаг 5', text: 'Назначение менеджера заказа'},
  {href: '#kt_vtab_pane_16', title: 'Шаг 6', text: 'Подбор исполнителя'},
  {href: '#kt_vtab_pane_17', title: 'Шаг 7', text: 'Выполнение работы'},
  {href: '#kt_vtab_pane_18', title: 'Шаг 8', text: 'Прием работы'},
]

const instructions = [
  {
    id: 'kt_vtab_pane_11', title: 'Регистрация', text: [
      'Войдите в веб-сервис нажав на любую кнопку «войти в сервис» на этой странице',
      'Заполните форму, выберете свою роль и нажмите продолжить.',
      'На указанную почту придёт уведомление, которое необходимо подтвердить'
    ],
    img: '/media/instructions/customerInstr-1.png', isActive: true
  },
  {
    id: 'kt_vtab_pane_12', title: 'Создание заказа', text: [
      'В правом верхнем углу нажмите создать заказ',
      'Выберете необходимую работу, опишите объект, предпочитаемый способ связи и другие подробности.',
      'Если известен объем финансирования укажите стоимость, но это не обязательно.',
      'Каждую работу необходимо заносить как отдельный заказ.',
    ], img: '/media/instructions/customerInstr-2.png'
  },
  {
    id: 'kt_vtab_pane_13', title: 'Рассмотрение в этот же день', text: [
      'Наш администратор рассмотрит Ваш заказ, выявит достаточность сведений и свяжется по предпочитаемому способу связи для уточнения деталей (при необходимости)',
      'После этого будет произведена оценка стоимости и сроков работы, если такие сведения не будут указаны',
    ], img: ''
  },
  {
    id: 'kt_vtab_pane_14', title: 'Заключение договора', text: [
      'Все работы оформляются юридически на веб-сервис, и ответственность за выполнение фрилансерами работы лежит на нас',
      'Оригинал договора отправляется почтой России',
    ], img: '/media/instructions/customerInstr-4.png'
  },
  {
    id: 'kt_vtab_pane_15', title: 'Назначение менеджера', text: [
      'Для контроля работы со стороны исполнителя, мы назначаем менеджера',
    ], img: ''
  },
  {
    id: 'kt_vtab_pane_16', title: 'Подбор исполнителя', text: [
      'Менеджер производит релевантный подбор специалиста внутри сервиса',
      'Учитываются следующие факторы:',
      'углубленный профиль;',
      'опыт работы в данном регионе;',
      'достаточность временных ресурсов для выполнения задачи;',
    ], img: ''
  },
  {
    id: 'kt_vtab_pane_17', title: 'Выполнение работы', text: [
    'После принятия работы инженером-экологом, начинается работа по сбору всех необходимых исходных сведений посредством почты или социальных месенджеров',
    'Все уведомления о смене этапа работы будут приходить Вам автоматически',
    'Посмотреть на какой стадии находится проект,  вы сможете в личном кабинете',
    ], img: '',
  },
  {
      id: 'kt_vtab_pane_18', title: 'Прием работы', text: [
      'После проведения расчётов /составления описания/ согласования итоговый пакет документов будет направлен удобным способом',
      ], img: '',
    }
]
</script>
