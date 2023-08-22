<script setup>
const props = defineProps({
  article: {
    type: Object,
    requared: true,
  },
})

const poster = (media) => {
  let poster = media?.filter(img => img.collection_name === 'articles_posters')?.at(0);
  if (!poster) return '';
  return useRuntimeConfig().public.storageURL + poster?.original_url;
}
</script>
<template>
  <article class="card-xl-stretch me-md-6" v-if="article">
    <NuxtLink :to="'/articles/' + article.slug" class="d-block overlay mb-4" data-fslightbox="lightbox-hot-sales">

      <div class="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px"
        :style="'background-image:' + 'url(' + poster(article.media) + ')'" />
      <div class="overlay-layer bg-dark card-rounded bg-opacity-25" />

    </NuxtLink>

    <div class="m-0">

      <NuxtLink class=" fs-4 text-dark fw-bolder text-hover-info text-dark lh-base" :to="`/articles/${article.slug}`">
        {{ article.title }}
      </NuxtLink>

      <div class="fs-6 fw-bolder mt-5">

        <span class="ms-2 text-muted">
          <i class="fa-duotone fa-calendar-days" /> {{ $helpers.date.getSocial(article.published_at) }}
        </span>

        <span class="ms-2 text-muted">
          <i class="fa-duotone fa-eye" /> {{ article.views }}
        </span>

      </div>

    </div>
  </article>
</template>