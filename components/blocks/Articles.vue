<script setup>
const { data: articles, pending, error } = await useQuery('articles/list');
const dataArticles = articles.value.data;
</script>
<template>
  <section class="container my-20 py-20" v-if="!error">
    <div class="mb-19">
      <div class="text-center mb-12 ">
        <h3>
          <NuxtLink class="fs-2hx text-dark text-hover-info mb-5" to="/articles">Публикации</NuxtLink>
        </h3>
      </div>
      <div v-if="pending" class="container">
        <SkeletonsArticles />
      </div>
      <div class="row g-10" v-else>
        <div class="col-md-4" v-for="article in dataArticles" :key="article.id">
          <SingleArticle :article="article" />
        </div>
      </div>
    </div>
    <div class="w-100 text-center">
      <UiButtonToArticles>Все публикации</UiButtonToArticles>
    </div>
  </section>
</template>