<template>
  <a class="btn btn-flex btn-active-light-info" id="customButtn" href="#">
    <i class="fa-regular text-dark fs-2 me-1 fa-computer-mouse-scrollwheel fa-beat-fade"></i>
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
  border: 1px solid rgba(0, 0, 0, 0);
}
#customButtn:hover {
  border: 0.5px solid black;
}
</style>