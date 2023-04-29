<template>
  <div class="container-xl d-flex flex-column justify-content-center mt-20 mb-20 pb-10 pt-10 rounded" id="bg">
    <h1 class="fs-2hx text-center fw-bolder mb-20">Топ фрилансеров</h1>
    <div class="row flex-row justify-content-center overflow-auto" style="flex-wrap: nowrap;" >
      <div v-for="freeLancer in freeLancers" class="col-lg-2 col-md-2 col-sm-4 col-3" id="anime">
        <div class="card rounded" style="">
          <img :src=freeLancer.img class="card-img-top rounded" alt="...">
          <div class="card-body p-4 text-center">
            <h5 class="card-title">{{ freeLancer.name }}</h5>
            <p class="card-text">{{ freeLancer.spheres }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// for example
const freeLancers = [
  { name: 'Avery', spheres: 'Biodiversity', img: '/media/avatars/150-6.jpg' },
  { name: 'Wesley', spheres: 'Habitat fragmentation', img: '/media/avatars/150-8.jpg' },
  { name: 'Jade', spheres: 'Ecosystem services', img: '/media/avatars/150-9.jpg' },
  { name: 'Maxine', spheres: 'Ecosystem services', img: '/media/avatars/150-10.jpg' },
  { name: 'Penelope', spheres: 'Ecological succession', img: '/media/avatars/150-11.jpg' },
  { name: 'Donovan', spheres: 'Restoration ecology', img: '/media/avatars/150-12.jpg' },
  { name: 'Hector', spheres: 'Urban ecology', img: '/media/avatars/150-13.jpg' },
  { name: 'Phoenix', spheres: 'Urban ecology', img: '/media/avatars/150-15.jpg' },
  { name: 'Marina', spheres: 'Urban ecology', img: '/media/avatars/150-14.jpg' },
]
</script>

<style scoped>
/* #bg {
  background: linear-gradient(45deg, rgb(253, 252, 252) 10%, rgb(228, 230, 239) 40%, rgb(239, 201, 239) 50%);
} */

#anime {
  animation: leftright 6s infinite alternate ease-in-out;
}

@keyframes leftright {

  0%,
  20% {
    transform: translateX(0%);
    left: 0%;
  }

  80%,
  100% {
    transform: translateX(-100%);
    left: 100%;
  }
}
</style>