<script setup>
const { data: spheres, pending } = useFetch('http://api.free-eco.ru/api/v1/works/spheres');

const isActive = (id) => id === 1;
const isActiveWork = (id) => id === 2;

// const activeWork = (e) => {

// }

</script>
<template>
  <h1 class="fs-2hx text-center mt-10">Поиск работ по тегам</h1>
  <section class="container py-5" v-if="!pending">
    <div class="d-flex flex-row  rounded border p-10">
      <ul class="nav border-transparent flex-column justify-content-start border-0 me-5 mb-3 mb-md-0 fs-6 pe-10"
        role="tablist">
        <li class="nav-item me-0 mb-md-2" v-for="sphere in spheres.data">
          <a :class="'nav-link text-gray-500 text-active-dark p-0' + (isActive(sphere.id) ? ' active' : '')" data-bs-toggle="tab" :href="'#' + sphere.slug">
            <span class="fs-3">{{ sphere.title }}</span>
          </a>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <template v-for="sphere in spheres.data">
          <div :class="'tab-pane fade ' + (isActive(sphere.id) ? 'show active' : '')" :id="sphere.slug" role="tabpanel">
            <div class="d-flex flex-wrap" role="tablist">
              <template v-for="work in sphere.works">
                <a :class="'nav-link text-gray-500 p-2 m-1 text-active-dark pe-auto' + (isActiveWork(work.id) ? ' active' : '')" data-bs-toggle="tab" :data-bs-target="'#sub' + work.id">
                  <span style="cursor: pointer;" class="fs-4 m-4 p-2 rounded bg-secondary ">{{ work.short_title }}</span>
                </a>
              </template>
              <div class="tab-content p-5 mt-10 rounded">
                <template v-for="work in sphere.works">
                  <div :class="'tab-pane fade ' + (isActiveWork(work.id) ? 'show active' : '')" :id="'sub' + work.id"
                    role="tabpanel">
                    <h3 class="text-center p-5">Описание</h3>
                    <p class="fs-3 m-1">{{ work.description }}</p>
                    <h3 class="text-center p-5">Основания в законе</h3>
                    <p class="fs-3 m-1">{{ work.grounds }}</p>
                    <h3 class="text-center p-5">Штраф за невыполнение</h3>
                    <p class="fs-3 m-1">{{ work.penalties }}</p>
                    <h3 class="text-center p-5">На кого распространяется действие закона?</h3>
                    <p class="fs-3 m-1">{{ work.who_needs_it }}</p>
                    <h3 class="text-center p-5">Срок разработки:</h3>
                    <p class="fs-3 m-1">{{ work.lead_time }}</p>
                    <h3 class="text-center p-5">Стоимость проекта:</h3>
                    <p class="fs-3 m-1">{{ work.price_text }}</p>
                    <div style="height: 50px;"></div>
                  </div>

                </template>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <hr>
  </section>
  
</template>


