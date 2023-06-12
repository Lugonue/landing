<script setup>
const socLinks = [
  {
    id: 1,
    title: 'VK',
    link: 'https://vk.com/ecological_project',
    icon: 'fa-brands fa-vk',
    color: '#07f',
  },
  {
    id: 2,
    title: 'Telegram',
    link: 'https://t.me/EcoProjects_Bot',
    icon: 'fa-brands fa-telegram',
    color: '#1c93e3',
  },
  {
    id: 3,
    title: 'Instagram',
    link: 'https://www.instagram.com/ecoengine/',
    icon: 'fa-brands fa-instagram',
    color: '#fff',
  },
  {
    id: 4,
    title: 'YouTube',
    link: 'https://www.youtube.com/channel/UCAcrH9MKd2QneC7woOnYMoA',
    icon: 'fa-brands fa-youtube',
    color: '#ff3d00',
  },
]

const servicesLinks = [
  {
    id: 1,
    title: 'Войти в сервис',
    link: 'https://service.free-eco.ru/',
    target: '_blank'
  },
  {
    id: 2,
    title: 'Экоаудит бизнеса',
    link: 'https://t.me/business_environment_bot',
    target: '_blank'
  },
  {
    id: 3,
    title: 'Инструкция по экодокументам',
    link: 'https://eco-specialist.ru/instruction',
    target: '_blank'
  },
]

const footerLinks = [
  {
    id: 1,
    title: 'Техническая поддержка',
    link: 'https://service.free-eco.ru/support',
    target: '_blank'
  },
  {
    id: 2,
    title: 'Политика конфиденциальности',
    link: 'https://service.free-eco.ru/privacy-policy',
    target: '_blank'
  },
]
</script>
<template>
  <!--begin::Footer Section-->
  <footer class="mb-0">
    <!--begin::Wrapper-->
    <div class="bg-dark pt-20" id="contacts">
      <!--begin::Container-->
      <div class="container">
        <!--begin::Row-->
        <div class="row py-10 py-lg-20">
          <!--begin::Col-->
          <div class="col-lg-6 pe-lg-16 mb-10 mb-lg-0">
            <!--begin::Block-->
            <div class="rounded landing-dark-border p-9 mb-10">

              <h2 class="text-white">У вас остались вопросы?</h2>

              <span class="fw-normal fs-4 text-gray-700">
                Напишите нам!
                <a href="mailto:support@free-eco.com" class="text-white opacity-50 text-hover-primary">
                  support@free-eco.com
                </a>
              </span>
              <br />
              <span class="fw-normal fs-4 text-gray-700">
                Позвоните нам!
                <a class="text-white opacity-50 text-hover-primary" href="tel:+79969134171">
                  +7 (996) 913 41 71
                </a>
              </span>

            </div>

          </div>

          <div class="col-lg-6 ps-lg-16">
            <div class="d-flex justify-content-center">

              <div class="d-flex flex-column me-20">
                <h4 class="fw-bolder text-gray-400 mb-6">Сервисы</h4>
                <template v-for="link in servicesLinks" ::key="link.id">
                  <NuxtLink :to="link.link" :target="link.target"
                    class="text-white opacity-50 text-hover-primary fs-5 mb-4">
                    {{ link.title }}
                  </NuxtLink>
                </template>
              </div>

              <div class="d-flex flex-column ms-lg-20">
                <h4 class="text-gray-400 mb-6">Мы в соц.сетях</h4>
                <template v-for="link in socLinks" ::key="link.id">
                  <a :href="link.link" class="mb-4 d-flex align-items-center" target="_blank">
                    <i :class="`${link.icon} me-2 fs-2`" :style="`color: ${link.color};`"></i>
                    <span class="text-white opacity-50 text-hover-primary fs-4">{{ link.title }}</span>
                  </a>
                </template>
              </div>

            </div>

          </div>
        </div>

      </div>
      <!--end::Container-->
      <!--begin::Separator-->
      <div class="landing-dark-separator"></div>
      <!--end::Separator-->
      <!--begin::Container-->
      <div class="container">
        <!--begin::Wrapper-->
        <div class="d-flex flex-column flex-md-row flex-stack py-7 py-lg-10">
          <!--begin::Copyright-->
          <div class="d-flex align-items-center order-2 order-md-1">
            <WidgetsLogo variant="dark" />
            <!--begin::Logo image-->
            <span class="mx-5 fs-6 fw-bold text-gray-600 pt-1" href="#">© 2023 FREEECO</span>
            <!--end::Logo image-->
          </div>
          <!--end::Copyright-->
          <!--begin::Menu-->
          <ul class="menu menu-gray-600 menu-hover-primary fw-bold fs-6 fs-md-5 order-1 mb-5 mb-md-0">

            <template v-for="link in footerLinks" :key="link.id">
              <li class="menu-item">
                <NuxtLink :to="link.link" :target="link.target" class="menu-link px-2">
                  {{ link.title }}
                </NuxtLink>
              </li>
            </template>

          </ul>
          <!--end::Menu-->
        </div>
        <!--end::Wrapper-->
      </div>
      <!--end::Container-->
    </div>
    <!--end::Wrapper-->
  </footer>
  <!--end::Footer Section-->
</template>