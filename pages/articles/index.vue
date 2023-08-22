<script setup>
definePageMeta({
  layout: 'article',
})

const { data: articles, pending } = await useIndexFetch('articles/index');
</script>

<template>
  <section class="container my-20 py-20">
    <div class="mb-19">
      <WidgetsBreadcrumbs :links="[{ title: 'Все публикации', path: '' }]" />

      <WidgetsTitlePage title="Публикации" description="Публикации на FreeEco" keywords="Статьи, Кейсы, Публикации" />

      <div v-if="pending">
        <SkeletonsArticles :count="12" />
      </div>
      <div class="row g-10" v-else>
        <div class="col-md-4" v-for="article in articles?.data" :key="article.id">
          <SingleArticle :article="article" />
        </div>
        <div class="mt-10">
          <UiPagination :pagination="articles?.meta?.pagination" />
        </div>
      </div>
    </div>
  </section>
</template>