<template>
  <NuxtLink to="/articles">
    <button class="bn632-hover bn20">
      <slot></slot>
    </button>
  </NuxtLink>
</template>

<style scoped>
.bn632-hover {
  width: 160px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  height: 55px;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

.bn632-hover:hover {
  background-position: 100% 0;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

.bn632-hover:focus {
  outline: none;
}

.bn632-hover.bn20 {
  background-image: linear-gradient(to left,
      #667eea,
      #764ba2,
      #6b8dd6,
      #8e37d7);
  box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
}
</style>