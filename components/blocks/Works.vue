<script setup>
const { data: spheres, pending, error } = useFetch('https://api.free-eco.ru/api/v1/works/spheres');

const isActive = (id) => id === 1;
const isActiveWork = (id) => [1, 2, 3, 4, 16, 5, 10].includes(id);


</script>
<template>
  <div class="container-xl d-flex justify-content-center rounded shadow-lg my-20" id="bg" v-if="!error">
    <section class="col-lg-12" v-if="!pending">
      <h1 class="fs-2hx text-center my-5 p-5">Поиск работ</h1>
      <div class="d-flex flex-row justify-content-start ps-10" id="mobile">
        <ul class="nav border-transparent flex-column justify-content-start border-0 me-5 mb-3 mb-md-0 fs-6"
          role="tablist">
          <li class="nav-item me-0 mb-md-2" v-for="sphere in spheres.data" :key="sphere.id">
            <a :class="'nav-link text-gray-600 bg-active-white rounded p-1 text-active-dark' + (isActive(sphere.id) ? ' active' : '')"
              data-bs-toggle="tab" :href="'#' + sphere.slug">
              <span class="fs-3">{{ sphere.title }}</span>
            </a>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <template v-for="sphere in spheres.data" :key="sphere.id">
            <div :class="'tab-pane fade ' + (isActive(sphere.id) ? 'show active' : '')" :id="sphere.slug" role="tabpanel">
              <div class="d-flex flex-wrap" role="tablist">
                <template v-for="work in sphere.works" :key="work.id">
                  <a :class="'nav-link rounded text-gray-700 p-2 m-1 text-active-dark pe-auto bg-active-white cursor-pointer' + (isActiveWork(work.id) ? ' active' : '')"
                    data-bs-toggle="tab" :data-bs-target="'#sub' + work.id">
                    <span class="fs-6">{{ work.short_title }}</span>
                  </a>
                </template>
                <div class="tab-content p-5 rounded">
                  <template v-for="work in sphere.works">
                    <div :class="'tab-pane fade ' + (isActiveWork(work.id) ? 'show active' : '')" :id="'sub' + work.id"
                      role="tabpanel">
                      <div class="row">
                        <div class="col-lg-6 col-sm-12 d-flex flex-column ">
                          <div class="rounded p-4 bg-white shadow-xs mb-3 position-relative">
                            <h3 class="">Описание </h3>
                            <p class=" ">{{ work.description }} </p>
                            <i class="fa-duotone fa-comment position-absolute"></i>
                          </div>
                          <div class="rounded p-4 bg-white shadow-xs mb-3 position-relative">
                            <h3 class=" ">Основания в законе</h3>
                            <p class="">{{ work.grounds }}</p>
                            <i class="fa-duotone fa-gavel"></i>
                          </div>
                          <div class="rounded p-4 bg-white shadow-xs mb-3 position-relative">
                            <h3 class="">Штраф за невыполнение</h3>
                            <p class="">{{ work.penalties }}</p>
                            <i class="fa-duotone fa-user-police-tie text-gray-400"></i>
                          </div>
                        </div>
                        <div class="col-lg-6 col-sm-12 d-flex flex-column">
                          <div class="rounded p-4 bg-white shadow-xs mb-3 position-relative">
                            <h3 class="">На кого распространяется действие закона?</h3>
                            <p class="">{{ work.who_needs_it }}</p>
                            <i class="fa-duotone fa-book-section"></i>
                          </div>
                          <div class="rounded p-4 bg-white shadow-xs mb-3 position-relative">
                            <h3 class="">Срок разработки</h3>
                            <p class=" ">{{ work.lead_time }}</p>
                            <i class="fa-duotone fa-timer"></i>
                          </div>
                        </div>
                        <div class="w-100 d-flex justify-content-end">
                          <UiButtonToServise>Сделать заказ</UiButtonToServise>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>


<style scoped>
#bg {
  background-color: #f2f3f5;
}

i {
  color: #B5B5C3;
  opacity: 0.8;
  position: absolute;
  bottom: 2px;
  right: 10px;
  font-size: 30px;
}

@media (max-width: 800px) {
  #mobile {
    flex-direction: column !important;
  }

  #mobile>ul {
    border: 1px solid gray !important;
    border-radius: 10px;
    text-align: center !important;
  }
}
</style>