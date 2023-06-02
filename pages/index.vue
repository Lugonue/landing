<template>
  <div>
    <div class="mb-0" id="home">
      <div class="bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom">
        <RegionsHeader />
          <BlocksStaticSlide v-if="desctopVersion" />
          <BlocksSliderMobileVersion v-else />
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
const desctopVersion = ref(true);
onMounted(() => {
  desctopVersion.value = window.innerWidth > 1000;
  window.addEventListener('resize', () => desctopVersion.value = window.innerWidth > 1000)
})

definePageMeta({
  title: 'FreeEco | Экологическая фриланс-биржа',
  subTitle: '',
  description: '',
  layout: 'landing',
})
</script>