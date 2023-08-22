
<script setup>
definePageMeta({
  layout: 'article',
})

const route = useRoute();

const slug = route.params.slug
const { data } = await useQuery(`articles/${slug}/show`);
const article = data.value?.data;
const meta = data.value?.meta;

const poster = () => {
  let poster = article?.media?.filter(img => img.collection_name === 'articles_posters')?.at(0);
  if (!poster) return '';
  return useRuntimeConfig().public.storageURL + poster?.original_url;
}
</script>

<template>
  <article class="my-17 mt-20 pt-10" itemscope itemtype="http://schema.org/Article" v-if="article">

    <div class="row justify-content-center">
      <div class="col-xl-10">

        <WidgetsBreadcrumbs
          :links="[{ title: 'Все публикации', path: '/articles' }, { title: article.title, path: '' }]" />

        <div class="mb-8">
          <aside>
            <div class="me-9 my-1 d-flex align-items-center">

              <span class="me-4" title="Дата и время публикации">
                <i class="fa-duotone fa-calendar-days text-info me-1 fs-3" />
                <time class="fw-bolder text-gray-400">{{ $helpers.date.getSocial(article.published_at) }}</time>
              </span>

              <span class="fw-bolder text-muted fs-5 me-4" title="Время на прочтение">
                <i class="fa-duotone fa-eye text-info me-1 fs-3" /> {{ article.views }}
              </span>

              <span class="fw-bolder text-muted fs-5" title="Время на прочтение">
                <i class="fa-duotone fa-clock text-info me-1 fs-3" />
                <span>{{ meta.read_time.speed.minutes }} мин</span>
              </span>
            </div>
          </aside>

          <WidgetsTitlePage :title="article.title" :description="article?.description"
            :keywords="article?.tags?.map(tag => tag.title)?.join(', ')" ogType="article" :image="poster()"
            sizeClass="fs-1" />

          <figure class="overlay mt-8" itemprop="image" itemscope itemtype="http://schema.org/ImageObject"
            v-if="poster()">
            <img :src="poster()" class="w-100 card-rounded" :alt="article.title" />
            <!-- <nav class="overlay-layer card-rounded bg-dark bg-opacity-25">
              <a href="https://free-eco.ru/#about-us" class="btn btn-info">О нас</a>
              <a href="https://service.free-eco.ru/" class="btn btn-light-info ms-3">Присоединиться</a>
            </nav> -->
          </figure>
        </div>

        <div class="fs-5 fw-bold text-gray-700 mb-10">
          <div class="d-flex align-items-center bg-light card-rounded p-5 mb-10">
            {{ article.description }}
          </div>
          <UiEditorJS :body="article.body" v-if="article.body" />
        </div>

        <div class="d-flex flex-center">
          <a href="#" class="mx-4">
            <img src="" class="h-20px my-2" alt="">
          </a>
          <a href="#" class="mx-4">
            <img src="" class="h-20px my-2" alt="">
          </a>
          <a href="#" class="mx-4">
            <img src="" class="h-20px my-2" alt="">
          </a>
        </div>
      </div>
    </div>

  </article>
</template>
