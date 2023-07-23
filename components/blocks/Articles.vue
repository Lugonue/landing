<script setup>

const { data: articles, pending } = await useQuery('articles/list');
const dataArticles = articles.value.data;

const config = useRuntimeConfig();
const storageURL = config.public.storageURL;



</script>

<template>
  <div class="container my-20 py-20" v-if="!pending">
    <!-- <pre>{{ dataArticles }}</pre> -->
    <div class="mb-19">
      <!--begin::Top-->
      <div class="text-center mb-12 ">
        <!--begin::Title-->
        <h3 >
          <NuxtLink class="fs-2hx text-dark text-hover-info mb-5" to="/articles">Публикации</NuxtLink></h3>
        <!--end::Title-->
        <!--begin::Text-->
        <div class="fs-5 text-muted fw-bold">
        </div>
        <!--end::Text-->
      </div>
      <!--end::Top-->
      <!--begin::Row-->
      <div class="row g-10">
        <!--begin::Col-->
        <div class="col-md-4" v-for="article in dataArticles" key="article.id">
          <!--begin::Publications post-->
          <div class="card-xl-stretch me-md-6">
            <!--begin::Overlay-->
            <NuxtLink :to="'/articles/' + article.slug" class="d-block overlay mb-4" data-fslightbox="lightbox-hot-sales">
              <!--begin::Image-->
              <div class="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px"
                :style="'background-image:' + 'url(' + storageURL + article.media[0].original_url + ')'">
              </div>
              <!--end::Image-->
              <!--begin::Action-->
              <div class="overlay-layer bg-dark card-rounded bg-opacity-25">
                <i class="bi bi-eye-fill fs-2x text-white"></i>
              </div>
              <!--end::Action-->
            </NuxtLink>
            <!--end::Overlay-->
            <!--begin::Body-->
            <div class="m-0">
              <!--begin::Title-->
              <NuxtLink class=" fs-4 text-dark fw-bolder text-hover-info text-dark lh-base" :to="'/articles/' + article.slug">{{ article.title }}
              </NuxtLink>
              <!--end::Title-->
              <!--begin::Text-->
              <!-- <div class="fw-bold fs-5 text-gray-600 text-dark mt-3 mb-5">часть текста?</div> -->
              <!--end::Text-->
              <!--begin::Content-->
              <div class="fs-6 fw-bolder mt-5">
                <!--begin::Author-->
                <a href="../../demo3/dist/apps/projects/users.html" class="text-gray-700 text-hover-primary">Autor</a>
                <!--end::Author-->
                <!--begin::Date-->
                <span class="ms-2 text-muted">{{ article.published_at }}</span>
                <!--end::Date-->
              </div>
              <!--end::Content-->
            </div>
            <!--end::Body-->
          </div>
          <!--end::Publications post-->
        </div>
        <!--end::Col-->
      </div>
    </div>
  </div>
</template>