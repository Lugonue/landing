<template>
    <div>
      <div class="mb-0" id="home">
        <div class="bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom">
          <RegionsHeader/>
          <client-only><BlocksStaticSlide/></client-only>
          <!-- <BlocksSlider/> -->
        </div>
      </div>
      <BlocksUniqueTradeOffer/>
      <BlocksPartners/>
      <BlocksWorks/>
      <BlocksWorkScheme/>
      <BlocksProjects/>
      <BlocksTestimonials/>
      <RegionsFooter/>
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