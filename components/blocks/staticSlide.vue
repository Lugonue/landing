<template>
  <div id="slider" class="d-none d-lg-block">
    <span id="start"></span>
    <div :class="'main ' + statusSlide" id="main">
      <!-- chats start  -->

      <template v-if="statusSlide.length === 0">
        <RegionsChats />
      </template>

      <!-- Start left Slide -->
      <div class="split left">
        <i class="fa-solid fa-chevron-right d-none opacity-0" id="fa-chevron-right"></i>
        <div class="position-absolute w-100 h-100 d-none" id="startCondition" @click="startCondition()"></div>
        <div v-if="statusSlide.length === 0" style="height: 100%;"
          class="d-flex flex-column align-items-center justify-content-end">
          <img style="height: 80%;" src="/media/header-component-img/statik-slider/left-cut-bg-prod.png">
        </div>
        <template v-if="statusSlide.length === 0">
          <i @click="buttonKnowMore('fullLeft')"
            class="fa-regular fa-arrow-left-long position-absolute display-5 text-black"
            style="left: 70px; top: 47%; cursor: pointer;"></i>
          <button @click="buttonKnowMore('fullLeft')" id="fullLeft"
            class='opacity-50 h-100 position-absolute bottom-0 start-0 border-0'>
            <p class="fs-1 p-0 m-0">Узнать больше</p>
          </button>
        </template>

        <!-- left slide benefitials -->
        <div class="w-100 h-100" v-if="statusSlide === 'fullLeft'">
          <RegionsBeneficialsLeftSlide />
        </div>
      </div>

      <!-- Start rigth slide -->
      <div class="split right">
        <i class="fa-solid fa-chevron-left d-none opacity-0" id="fa-chevron-left"></i>
        <div class="position-absolute w-100 h-100 d-none" id="startCondition" @click="startCondition()"></div>
        <!-- описание поменять -->
        <div v-if="statusSlide.length === 0" style="height: 100%;"
          class="d-flex flex-column align-items-center justify-content-end bg-light">
          <img style="height: 80%;" src="/media/header-component-img/statik-slider/right-cut-bg-prod.png" class="" alt="">
        </div>
        <template v-if="statusSlide.length === 0">
          <i @click="buttonKnowMore('fullRight')" class="fa-regular fa-arrow-right-long position-absolute display-5"
            style="right: 70px; top: 47%; cursor: pointer;"></i>
          <button @click="buttonKnowMore('fullRight')" id="fullRight"
            class='opacity-50 h-100 position-absolute bottom-0 end-0 border-0'>
            <p class="fs-1 p-0 m-0">Узнать больше</p>
          </button>
        </template>
        <!-- right slide benefitials -->
        <template v-if="statusSlide === 'fullRight'">
          <div class="w-100 h-100 owerflow-auto">
            <RegionsBeneficialsRightSlide />
          </div>
        </template>
      </div>
    </div>
  </div>
  <span id=""></span>
</template>

<script setup>
const statusSlide = ref('');
const buttonKnowMore = (slide) => statusSlide.value = slide;
const startCondition = () => statusSlide.value = '';
</script>
<style scoped>
.disable-scroll {
  overflow-y: hidden;
}

#startCondition:hover {
  cursor: pointer;
  background: rgba(135, 32, 208, 0.4);
}

#fullRight p {
  writing-mode: vertical-rl;
}

#fullLeft p {
  writing-mode: vertical-rl;
}

.main {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  scroll-snap-type: y;
}

/* chats start  */
.split {
  position: absolute;
  width: 50%;
  height: 100%;
  overflow: hidden;
  min-height: 100vh;
}

.split.left {
  left: 0;
  background: radial-gradient(#DE94D3, #D076CE);
  transition: 1s;
}

.split.right {
  right: 0;
  background-image: radial-gradient(#DAD9D9, #F4F4F4);
  transition: 1s;
}

.fullLeft>.left,
.fullRight>.right {
  width: 95%;
}


.fullLeft>.right,
.fullRight>.left {
  width: 5%;
}


.split.left #fa-chevron-left,
.split.left #fa-chevron-right,
.split.right #fa-chevron-right,
.split.right #fa-chevron-left {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
  margin: 0 1rem;
}

.fa-square-xmark {
  position: absolute;
  display: none;
  top: 20% !important;
  right: 5% !important;
  font-size: 5rem !important;
  color: black;
}

.split.left #fa-chevron-left {
  right: 0;
}

/*================PAGE-NAVIGATION SELECTOR================*/
.page-chevron {
  position: absolute;
  display: flex;
  bottom: 0;
  right: 0;
  height: 80px;
  align-items: center;
}

.chevronLR {
  padding: 0 2.5rem;
}

.chevronLR #fa-chevron-left,
.chevronLR #fa-chevron-right {
  font-size: 1.4rem;
}

.chevronLR #fa-chevron-left {
  margin-right: 1.3rem;
}

.chevronLR #fa-chevron-right {
  margin-right: 2rem;
}


/* ********************** img change *************** */
.fullLeft>.left>.fa-square-xmark,
.fullRight>.right>.fa-square-xmark,
.fullRight>.left>#startCondition,
.fullLeft>.right>#startCondition {
  display: block !important;
  transition-duration: 1.5s;

  z-index: 2;
}

.fa-square-xmark:hover {
  color: red;
}

#leftslideImg {
  width: 60%;
  left: 15%;

  animation: ani 1s forwards;
  animation-delay: 1s;
  opacity: 0;
}

#rightSlideImg {
  width: 100%;

  left: 0%;
  animation: ani 1s forwards;
  animation-delay: 1s;
  opacity: 0;
}

/* chevron changes */

.fullRight>.split>#fa-chevron-left,
.fullLeft>.split>#fa-chevron-right {
  display: none;
}

.fullRight>.split.left>#fa-chevron-right,
.fullLeft>.split.right>#fa-chevron-left {
  display: block !important;
  color: rgb(48, 43, 43);
  font-size: 50px;
  font-weight: 100;
  opacity: 80 !important;
  transition-delay: 3s;
}

/* Buttons KnowMore */
#fullLeft,
#fullRight {
  background: rgba(0, 0, 0, 0);
}

#fullLeft:hover,
#fullRight:hover {
  opacity: 100 !important;
  color: black;
}

@keyframes ani {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>