
<template>
  <h1 class="fs-2hx text-center mt-10">Поиск работ по тегам</h1>
  <section class="container py-5" v-if="!pending">
    <div class="d-flex flex-row  rounded border p-10">
      <ul class="nav border-transparent flex-column justify-content-start border-0 me-5 mb-3 mb-md-0 fs-6 pe-10"
        role="tablist">
        <li class="nav-item me-0 mb-md-2" v-for="sphere in dataWorks">
          <a class="nav-link text-gray-500 text-active-dark p-0" data-bs-toggle="tab" :href="'#' + sphere.slug">
            <span class="fs-3">{{ sphere.title }}</span>
          </a>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <template v-for="sphere in dataWorks">
          <div class="tab-pane fade" :id="sphere.slug" role="tabpanel">
            <div class="d-flex flex-wrap" role="tablist">
              <template v-for="work in sphere.works">
                <div class="nav-link p-0" data-bs-toggle="tab" :data-bs-target="'#sub' + work.id">
                  <span class="btn btn-light m-1">{{ work.short_title }}</span>
                </div>
              </template>
              <div class="tab-content p-5 mt-10 rounded">
                <template v-for="work in sphere.works">
                  <div class="tab-pane fade" :id="'sub' + work.id" role="tabpanel">
                    <p class="fs-3 m-1">{{ work.description }}</p>
                    <h3 class="text-center">Основания в законе</h3>
                    <p class="fs-3 m-1">{{ work.grounds }}</p>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
  <client-only>
      <BlocksUtilsclientSideRender />
    </client-only>
</template>
<script setup>
const { data: dataWorks, pending } = useFetch('http://api.free-eco.ru/api/v1/works/spheres');
console.log(dataWorks);
</script>

