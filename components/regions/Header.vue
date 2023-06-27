<script setup>


const scrollTo = (id) => {
  document.querySelector(id).scrollIntoView({ behavior: "smooth", block: "start" });
}

const landingMenu = [
  {
    id: 1,
    title: 'О cервисе',
    link: '#about',
    target: ''
  },
  {
    id: 2,
    title: 'Как это работает',
    link: '#how_work',
    target: ''
  },
  {
    id: 4,
    title: 'Контакты',
    link: '#contacts',
    target: ''
  },
]

const actionMenu = [

  {
    id: 2,
    title: 'Сделать заказ',
    link: 'https://service.free-eco.ru/',
    target: '_blank',
    emphasize: true,
  },
  {
    id: 3,
    title: 'Стать исполнителем',
    link: 'https://service.free-eco.ru/',
    target: '_blank',
    emphasize: true,

  },
]

// onMounted(() => {
//   let ordinataCounter = ref(window.scrollY);
// })

</script>
<template>
  <div class="landing-header " data-kt-sticky="true" data-kt-sticky-name="landing-header"
    data-kt-sticky-offset="{default: '200px', lg: '300px'}" style="
      height: 100px;
      animation-duration: 2.3s;
      position: absolute;
      top: 0;
      z-index: 9;
      width: 100%;
    ">
    <!--begin::Container-->
    <div class="container-fluid">
      <!--begin::Wrapper-->
      <div class="d-flex align-items-center justify-content-between fc-white">
        <!--begin::Logo-->
        <div class="d-flex align-items-center flex-equal flex-wrap">
          <!--begin::Mobile menu toggle-->
          <div class="dropdown">
            <button class="btn btn-icon btn-active-color-primary me-3 d-flex d-lg-none" type="button"
              id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <span class="svg-icon svg-icon-2hx">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20" fill="none">
                  <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                    fill="black"></path>
                  <path opacity="0.3"
                    d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                    fill="black"></path>
                </svg>
              </span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <NuxtLink v-for="item in landingMenu" class="dropdown-item fs-2 p-4" @click="scrollTo(item.link)"
                :to="item.link" :key="item.id">{{ item.title }}</Nuxtlink>
              <NuxtLink v-for="item in actionMenu" class="dropdown-item fs-2 p-4" :to="item.link" :key="item.id">{{
                item.title }}</NuxtLink>
            </ul>
          </div>
          <!--end::Mobile menu toggle-->
          <WidgetsLogo @click="scrollTo('#slider')" class="mb-2" />
          <!-- begin::text-header -->
          <WidgetsTextHeader />
          <!-- end::text-header -->
        </div>
        <!--end::Logo-->
        <div class="d-lg-block" id="kt_landing_menu_toggle">
          <div class="d-lg-block p-5 p-lg-0" data-kt-drawer="true" data-kt-drawer-name="landing-menu"
            data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true"
            data-kt-drawer-width="200px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_landing_menu_toggle"
            data-kt-swapper="true" data-kt-swapper-mode="prepend"
            data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav_wrapper'}">
            <!--begin::Menu-->
            <nav
              class="menu menu-column flex-nowrap menu-rounded menu-lg-row menu-title-gray-700 menu-state-title-primary nav nav-flush fs-5 fw-bold"
              id="kt_landing_menu" data-kt-menu="true">
              <!--begin::Menu item-->
              <div class="menu-item" v-for="item in landingMenu" :key="item.id">
                <!--begin::Menu link-->
                <a class="menu-link nav-link py-3 px-4 px-md-1 px-lg-1 px-xl-2 px-xxl-4 fw-bolder fs-md-6" data-kt-scroll-toggle="true"
                  data-kt-drawer-dismiss="true" @click="scrollTo(item.link)">{{ item.title }}</a>
                <!--end::Menu link-->
              </div>
            </nav>
            <!--end::Menu-->
          </div>
        </div>
        <!--begin::Menu wrapper-->
        <div class="d-block" id="kt_landing_menu_toggle">
          <div class="d-lg-block p-5 p-lg-0" data-kt-drawer="true" data-kt-drawer-name="landing-menu"
            data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true"
            data-kt-drawer-width="200px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_landing_menu_toggle"
            data-kt-swapper="true" data-kt-swapper-mode="prepend"
            data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav_wrapper'}">
            <!--begin::Menu-->
            <nav
              class="menu menu-column flex-nowrap menu-rounded menu-lg-row menu-title-gray-700 menu-state-title-primary nav nav-flush fs-5 fw-bold"
              id="kt_landing_menu">

              <div class="menu-item ms-2" v-for="item in actionMenu" :key="item.id">
                <NuxtLink
                  :class="`menu-link nav-link ${item.emphasize ? 'btn btn-outline btn-outline-dashed btn-outline-dark btn-active-light-dark' : 'py-3 px-4 px-xxl-6 '} fw-bolder fs-md-6`"
                  :to="item.link" data-kt-scroll-toggle="true" data-kt-drawer-dismiss="true" :target="item.target">
                  {{ item.title }}
                </NuxtLink>
              </div>
            </nav>
            <!--end::Menu-->
          </div>
        </div>
        <!--end::Menu wrapper-->
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Container-->
  </div>
  
  <!-- <div class="position-fixed bottom-0 end-0 z-index-5">
    
    <WidgetsScrollTop @click="scrollTo('#slider')" v-if="ordinataCounter > 100" />    // доделать появление после прокрутки
  </div> -->
</template>
