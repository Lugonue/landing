<script setup>
// for example
const freeLancers = [
  { name: 'Евгений Андреев', spheres: 'Biodiversity', img: '/media/top-freelancers/1.jpg' },
  { name: 'Евгений Веренков', spheres: 'Habitat fragmentation', img: '/media/top-freelancers/2.jpg' },
  { name: 'Ирина Соболева', spheres: 'Ecosystem services', img: '/media/top-freelancers/3.jpg' },
  { name: 'Марина Пилипенко', spheres: 'Ecosystem services', img: '/media/top-freelancers/4.jpg' },
  { name: 'Юлия Куперман', spheres: 'Ecological succession', img: '/media/top-freelancers/5.jpg' },
  { name: 'Константин Попко', spheres: 'Restoration ecology', img: '/media/top-freelancers/6.jpg' },
]

</script>


<template>
  <div class="d-flex align-items-center justify-content-center mt-20 mb-20" style="height: 60vh;" id="top_freelancers">
    <div class="container-xxl d-flex flex-column justify-content-center">
      <h1 class="fs-2hx text-center fw-bolder mb-20">Топ фрилансеров</h1>
      <div class="d-flex justify-content-center overflow-auto" style="flex-wrap: nowrap;">
        <div v-for="freeLancer in freeLancers" class=""  id="scroll-animation">
          <div class="card rounded" style="" >
            <div class="img-freelancers mx-5">
              <img :src=freeLancer.img class="rounded" :alt="freeLancer.spheres">
            </div>
            
            <div class="card-body p-4 text-center">
              <h5 class="card-title">{{ freeLancer.name }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>

#scroll-animation {
  animation: leftright 6s infinite alternate ease-in-out;
}
.img-freelancers {
  width: 200px;
  height: 200px;
  overflow: hidden;

}
.img-freelancers img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes leftright {

  0%,
  10% {
    transform: translateX(0%);
    left: 0%;
  }

  90%,
  100% {
    transform: translateX(100%);
    left: 100%;
  }
}
</style>