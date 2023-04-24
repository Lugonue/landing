<template>
  <div>
    <div class="mb-0" id="home">
      <div class="bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom">
        <RegionsHeader />
          <BlocksStaticSlide />
      </div>
    </div>
    <BlocksUniqueTradeOffer />
    <BlocksWorks />
    <!-- <BlocksProjects /> -->
    <BlocksWorkScheme />
    <LazyBlocksTopFreelancers />
    <hr>
    <!-- <BlocksTeam /> -->
    <BlocksTeamTest />
    <hr>
    <BlocksPartners />
    <RegionsOffer />
    <RegionsFooter />
  </div>
</template>

<script setup>
definePageMeta({
  title: 'FreeEco | Экологическая фриланс-биржа',
  subTitle: '',
  description: '',
  layout: 'landing',
})
</script>