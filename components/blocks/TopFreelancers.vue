<template>
  <div class="container-fluid" style="height: 50vh;">
    <h1 class="fs-2hx text-center mb-10">Топ фрилансеров</h1>
    <div class="row flex-row justify-content-center" style="flex-wrap: wrap;">
      <div v-for="freeLancer in freeLancers" class="col-1">
        <div class="card p-1" style="">
          <img :src=freeLancer.img class="card-img-top" alt="...">
          <div class="card-body p-4 text-center">
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
  {name: 'Kolian', spheres: 'SZZ, OOS', img: '/media/avatars/150-10.jpg'},
  {name: 'Kolian', spheres: 'SZZ, OOS', img: '/media/avatars/150-11.jpg'},
  {name: 'Kolian', spheres: 'SZZ, OOS', img: '/media/avatars/150-12.jpg'},
  {name: 'Kolian', spheres: 'SZZ, OOS', img: '/media/avatars/150-13.jpg'},
  {name: 'Kolian', spheres: 'SZZ, OOS', img: '/media/avatars/150-15.jpg'},
  {name: 'Kolian', spheres: 'SZZ, OOS', img: '/media/avatars/150-14.jpg'},
]
</script>