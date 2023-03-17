<template>
  <div class="container-fluid" style="height: 50vh;">
    <h1 class="fs-2hx text-center mb-10">Топ фрилансеров</h1>
    <div class="row justify-content-center">
      <div v-for="freeLancer in freeLancers" class="col-lg-1">
        <div class="card" style="">
          <img :src="freeLancer.img" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{freeLancer.name}}</h5>
            <p class="card-text">{{freeLancer.spheres}}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
  // for example
const freeLancers = [
  {name: 'Vasian', spheres: 'Voda, Vozduh', img: '/media/avatars/150-6.jpg'},
  {name: 'Vovan', spheres: 'PDV', img: '/media/avatars/150-8.jpg'},
  {name: 'Kolian', spheres: 'SZZ, OOS', img: '/media/avatars/150-9.jpg'},
  {name: 'Kolian', spheres: 'SZZ, OOS', img: '/media/avatars/150-9.jpg'},
  {name: 'Kolian', spheres: 'SZZ, OOS', img: '/media/avatars/150-9.jpg'},
  {name: 'Kolian', spheres: 'SZZ, OOS', img: '/media/avatars/150-9.jpg'},
]
</script>