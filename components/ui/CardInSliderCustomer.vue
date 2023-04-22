<template>
  <div class="col-lg-6 col-xl-4 col-md-12 col-12 custom-height ">
    <div class="h-100 border rounded bg-light d-flex flex-column justify-content-between" id="card">
      <h1 class=" w-100 p-2">{{ this.item.title }}</h1>
      <i :class="'fa-solid display-3 m-2 text-info ' + this.item.icon" ></i>
      <p class="bg-light p-1">{{ this.item.body }}</p>
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
.custom-height{
  height: 45%;
}
#card:hover {
  box-shadow: 1px 10px 10px rgb(88, 85, 85);
  transition-duration: .33s;
  color: rgb(72, 10, 130) !important;
}

#card:hover h1 {
  color: rgb(187, 127, 244)  !important;
}
</style>