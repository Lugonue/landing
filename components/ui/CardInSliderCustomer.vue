<template>
  <div class="col-lg-6 col-xl-4 col-md-6 col-12 h-50" >
    <div class="h-75 border border-secondary rounded bg-light" id="card">
      <div class="p-2 bg-info"></div>
      <h1 class=" bg-secondary w-100 h-25 p-2">{{ this.item.title }}</h1>
      <p class="fst-italic  p-1">{{ this.item.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: 'required',
    }
  },
  setup() {
    return {}
  }
}
</script>

<style scoped>
#card:hover {
  box-shadow: 1px 10px 10px rgb(88, 85, 85);
  transition-duration: .33s;
  color: rgb(72, 10, 130) !important;
}

#card:hover h1 {
  color: rgb(72, 10, 130)  !important;
}
</style>