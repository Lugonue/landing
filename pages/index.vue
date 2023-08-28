<script setup>
definePageMeta({
  layout: 'landing',
})
useSeoMeta({
  title: 'FreeEco | Экологическая фриланс-биржа',
  description: 'Первая фриланс-биржа экологических работ для бизнеса',
  keywords: 'Экологическая документация, экологические работ, фриланс-биржа',
})
</script>
<template>
  <div>
    <div class="mb-0" id="home">
      <div class="bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom">
        <RegionsHeader />
        <BlocksStaticSlide />
        <BlocksSliderMobileVersion />
      </div>
    </div>
    <BlocksUniqueTradeOffer />
    <BlocksWorks />
    <!-- <BlocksProjects /> -->
    <BlocksWorkScheme />
    <BlocksTopFreelancers />
    <BlocksTeamBlock />
    <BlocksArticles />
    <BlocksFAQ />
    <BlocksPartners />
    <RegionsOffer />
    <RegionsFooter />
  </div>
</template>