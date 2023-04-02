<script setup>
const { data: spheres, pending } = useFetch('http://api.free-eco.ru/api/v1/works/spheres');

const isActive = (id) => id === 1;
const isActiveWork = (id) => [1, 2, 3, 4, 16, 5, 10].includes(id);


</script>
<template>
    <div class="container-xl d-flex justify-content-center border-bottom border-top rounded" style="padding-top: 10rem; padding-bottom: 10rem;" id="bg">
      <section class="col-lg-10" v-if="!pending">
        <h1 class="fs-2hx text-center fw-bold mt-10">Поиск работ по тегам</h1>
        <div class="d-flex flex-row justify-content-start p-10" id="mobile">
          <ul class="nav border-transparent flex-column justify-content-start border-0 me-5 mb-3 mb-md-0 fs-6 pe-10"
            role="tablist">
            <li class="nav-item me-0 mb-md-2" v-for="sphere in spheres.data" :key="sphere.id">
              <a :class="'nav-link text-gray-500 bg-active-secondary rounded p-2 text-active-dark' + (isActive(sphere.id) ? ' active' : '')"
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
                    <a :class="'nav-link rounded text-gray-500 p-2 m-1 text-active-dark pe-auto bg-active-secondary cursor-pointer' + (isActiveWork(work.id) ? ' active' : '')"
                      data-bs-toggle="tab" :data-bs-target="'#sub' + work.id">
                      <span class="fs-6">{{ work.short_title }}</span>
                    </a>
                  </template>
                  <div class="tab-content p-5 rounded">
                    <template v-for="work in sphere.works">
                      <div :class="'tab-pane fade ' + (isActiveWork(work.id) ? 'show active' : '')" :id="'sub' + work.id"
                        role="tabpanel">
                        <div class="row">
                          <div class="col-6 d-flex flex-column ">
                            <div class="rounded p-4 bg-secondary shadow-sm mb-3">
                              <h3 class="">Описание</h3>
                              <p class=" ">{{ work.description }}</p>
                            </div>
                            <div class="rounded p-4 bg-secondary shadow-sm mb-3">
                              <h3 class=" ">Основания в законе</h3>
                              <p class="">{{ work.grounds }}</p>
                            </div>
                            <div class="rounded p-4 bg-secondary shadow-sm mb-3">
                              <h3 class="">Штраф за невыполнение</h3>
                              <p class="">{{ work.penalties }}</p>
                            </div>
                          </div>
                          <div class="col-6 d-flex flex-column">
                            <div class="rounded p-4 bg-secondary shadow-sm mb-3">
                              <h3 class="">На кого распространяется действие закона?</h3>
                              <p class="">{{ work.who_needs_it }}</p>
                            </div>
                            <div class="rounded p-4 bg-secondary shadow-sm mb-3">
                              <h3 class="">Срок разработки</h3>
                              <p class=" ">{{ work.lead_time }}</p>
                            </div>
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
  background: linear-gradient(45deg,rgb(239, 201, 239) 10%, rgb(228,230,2391) 40%, rgb(255, 255, 255) 50%);
}

@media (max-width: 800px) {
  #mobile{
    flex-direction: column !important;
  }
  #mobile > ul {
    border: 1px solid gray !important;
    border-radius: 10px;
    text-align: center !important;
  }
}
</style>