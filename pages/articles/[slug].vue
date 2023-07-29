
<script setup>

const route = useRoute();
const slug = route.params.slug
const { data } = await useQuery('articles/' + slug + '/show');



const config = useRuntimeConfig();
const storageURL = config.public.storageURL;
const imageURL = storageURL + data.value.data.media[0].original_url;

console.log(data)

definePageMeta({
  title: 'FreeEco | Экологическая фриланс-биржа',
  subTitle: '',
  description: '',
  layout: 'article',
})

</script>

<template>
  <!--begin::Post content-->
  <div class="my-17 mt-20 pt-10 container-xxl">
    <!--begin::Wrapper-->
    <div class="mb-8">
      <!--begin::Info-->
      <div class="d-flex flex-wrap mb-6">
        <!--begin::Item-->
        <div class="me-9 my-1">
          <!--begin::Icon-->
          <img style=" height: 20px;" class="me-1" src="/media/icons/duotune/icons8-date-64.png" alt="">
          <!--end::Icon-->
          <!--begin::Label-->
          <span class="fw-bolder text-gray-400">{{ data.data.published_at.split(' ')[0] }}</span>
          <!--end::Label-->
        </div>
        <!--end::Item-->
        <!--begin::Item-->
        <div class="me-9 my-1">
          <!--begin::Icon-->
          <!--SVG file not found: icons/duotune/finance/fin006.svgFolder.svg-->
          <!--end::Icon-->
        </div>
        <!--end::Item-->
        <!--begin::Item-->
        <!--end::Item-->
      </div>
      <!--end::Info-->
      <!--begin::Title-->
      <h1 class="text-dark text-hover-info fs-1 fw-bolder my-1"> {{ data.data.description }}
        <span class="fw-bolder text-muted fs-5 ps-1">{{data.meta.read_time.speed.minutes }} мин </span>
      </h1>
      <!--end::Title-->
      <!--begin::Container-->
      <div class="overlay mt-8">
        <!--begin::Image-->
        <div class="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-350px"
          :style="'background-image:url(' + imageURL + ')'"></div>
        <!--end::Image-->
        <!--begin::Links-->
        <div class="overlay-layer card-rounded bg-dark bg-opacity-25">
          <a href="https://free-eco.ru/#about-us" class="btn btn-info">О нас</a>
          <a href="https://service.free-eco.ru/" class="btn btn-light-info ms-3">Присоединиться</a>
        </div>
        <!--end::Links-->
      </div>
      <!--end::Container-->
    </div>
    <!--end::Wrapper-->
    <!--begin::Description-->
    <div class="fs-5 fw-bold text-gray-700 mb-10">
      <!--begin::Text-->
      <UiEditorJS :body="data.data.body" />

      <!--end::Text-->

    </div>


    <div class="d-flex flex-center">
      <!--begin::Icon-->
      <a href="#" class="mx-4">
        <img src="" class="h-20px my-2" alt="">
      </a>
      <!--end::Icon-->
      <!--begin::Icon-->
      <a href="#" class="mx-4">
        <img src="" class="h-20px my-2" alt="">
      </a>
      <!--end::Icon-->
      <!--begin::Icon-->
      <a href="#" class="mx-4">
        <img src="" class="h-20px my-2" alt="">
      </a>
      <!--end::Icon-->
    </div>
  </div>
</template>
