<template>
  <a class="btn btn-flex btn-active-light-info" id="customButtn" href="#">
    <i class="text-black fs-2 fa-light fa-arrow-up-from-bracket fa-bounce"></i>
    <slot></slot>
  </a>
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style scoped>
#customButtn{
  background: rgb(214, 185, 229);
  font-size: 1.5em;
}
</style>