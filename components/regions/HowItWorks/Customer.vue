<template>
  <div class="d-flex h-100">
    <div class="d-flex flex-column justify-content-start">
      <div
        class="nav nav-pills"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <button
          v-for="button in buttonsToInstructions"
          :class="
            'btn btn-outline btn-outline-dashed btn-outline-info me-2 mt-2' +
            (button.isActive ? ' active' : '')
          "
          id="v-pills-home-tab"
          data-bs-toggle="pill"
          :data-bs-target="button.href"
          type="button"
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
        >
          <span class="d-flex flex-column align-items-start">
            <span class="fs-4 fw-bolder">{{ button.title }}</span>
            <!-- <span class="fs-9 text-start">{{ button.text }}</span> -->
          </span>
        </button>
      </div>
      <div class="tab-content" id="v-pills-tabContent">
        <div
          v-for="instruction in instructions"
          :class="
            'tab-pane h-100 fade show' +
            (instruction.isActive ? ' show active' : '')
          "
          :id="instruction.id"
          role="tabpanel"
          aria-labelledby="v-pills-home-tab"
        >
          <div class="h-100 p-0">
            <div class="row mb-5 mt-5">
              <div class="col-12 col-lg-4 col-xl-4 col-xxl-4 text-white h-100 d-flex flex-column justify-content-between ">
                <div
                  class="position-relative"
                  style="
                    padding: 5% 0px 5% 0px;
                    min-height: 50%;
                    min-width: 100%;
                  "
                >
                  <h4 class="text-white fw-bolder text-start mb-4 fs-1">
                    {{ instruction.title }}
                  </h4>
                  <p class="fs-5" v-for="p in instruction.text">{{ p }}</p>
                </div>
                <div class="d-flex justify-content-center mt-auto">
                  <UiButtonToServise>Продолжить в сервисе</UiButtonToServise>
                </div>
              </div>

              <div
                class="d-flex col-12 col-lg-8 col-xl-8 col-xxl-8 justify-content-center align-items-center"
              >
                <div v-for="uri in instruction.img" key="uri"
                  class="d-flex w-100 h-auto justify-content-center align-items-center"
                >
                  <a 
                  class="d-flex justify-content-center align-items-center"
                  target="_blank" 
                  :href="uri">
                  <img 
                  class="border rounded"
                    style="max-width: 80%; height: auto"
                    alt=""
                    :src="uri"
                  />
                </a>
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
  {
    href: "#kt_vtab_pane_11",
    title: "Шаг 1",
    text: "Регистрация",
    isActive: true,
  },
  { href: "#kt_vtab_pane_12", title: "Шаг 2", text: "Создание заказа" },
  { href: "#kt_vtab_pane_13", title: "Шаг 3", text: "" },
  {
    href: "#kt_vtab_pane_14",
    title: "Шаг 4",
    text: "Заключение договора с нашим веб-сервисом",
  },
  {
    href: "#kt_vtab_pane_15",
    title: "Шаг 5",
    text: "Назначение менеджера заказа",
  },
  { href: "#kt_vtab_pane_16", title: "Шаг 6", text: "Подбор исполнителя" },
  { href: "#kt_vtab_pane_17", title: "Шаг 7", text: "Выполнение работы" },
  { href: "#kt_vtab_pane_18", title: "Шаг 8", text: "Прием работы" },
];

const instructions = [
  {
    id: "kt_vtab_pane_11",
    title: "Регистрация",
    text: [
      "Войдите в веб-сервис нажав на любую кнопку «войти в сервис» на этой странице. ", 
      "Регистрация производится только с помощью почты. На указанную почту придёт ссылка, по которой вы сможете войти в сервис. Далее заполните форму, выберете свою роль и нажмите продолжить."
    ],
    img: ["/media/how-it-works/customer/step-1-1.png", "/media/how-it-works/customer/step-1-2.png"],
    isActive: true,
  },
  {
    id: "kt_vtab_pane_12",
    title: "Создание заказа",
    text: [
      "В правом верхнем углу нажмите \"создать заказ\". Выберете необходимую работу, опишите объект, предпочитаемый способ связи и другие подробности. Если известен объем финансирования укажите стоимость, но это не обязательно. Каждую работу необходимо заносить как отдельный заказ."
    ],
    img: ["/media/how-it-works/customer/step-2-1.png", "/media/how-it-works/customer/step-2-2.png"],
  },
  {
    id: "kt_vtab_pane_13",
    title: "Рассмотрение и оценка",
    text: [
      "Наш администратор рассмотрит Ваш заказ, выявит достаточность сведений и свяжется по предпочитаемому способу связи для уточнения деталей (при необходимости). После этого будет произведена оценка стоимости и сроков работы в эти же сутки.",
    ],
    img: ["/media/how-it-works/customer/step-3.png"],
  },
  {
    id: "kt_vtab_pane_14",
    title: "Заключение договора",
    text: [
      "Все работы оформляются юридически на веб-сервис, и ответственность за выполнение фрилансерами работы лежит на нас",
      "Оригинал договора отправляется почтой России",
    ],
    img:[ "/media/instructions/customerInstr-4.png"],
  },
  {
    id: "kt_vtab_pane_15",
    title: "Назначение менеджера",
    text: [
      "Для контроля работы со стороны исполнителя, мы назначаем менеджера",
    ],
    img: ["/media/how-it-works/customer/step-5.png"],
  },
  {
    id: "kt_vtab_pane_16",
    title: "Подбор исполнителя",
    text: [
      "Менеджер производит релевантный подбор специалиста внутри сервиса, Учитываются следующие факторы:",
      "углубленный профиль;",
      "опыт работы в данном регионе;",
      "достаточность временных ресурсов для выполнения задачи;",
    ],
    img: ["/media/how-it-works/customer/step-6.png"],
  },
  {
    id: "kt_vtab_pane_17",
    title: "Выполнение работы",
    text: [
      "После принятия работы инженером-экологом, начинается работа по сбору всех необходимых исходных сведений посредством почты или месенджера. ",
      "Все уведомления о смене этапа работы будут приходить Вам автоматически. Посмотреть на какой стадии находится проект, вы сможете в личном кабинете",
    ],
    img: ["/media/how-it-works/customer/step-7.png"],
  },
  {
    id: "kt_vtab_pane_18",
    title: "Прием работы",
    text: [
      "После проведения расчётов /составления описания/ согласования итоговый пакет документов будет направлен удобным способом",
    ],
    img: ["/media/how-it-works/customer/step-8.png"],
  },
];
</script>
