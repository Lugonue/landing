<script setup>
const statusSlide = ref('');

const buttonKnowMore = (slide) => statusSlide.value = slide;
const startCondition = () => statusSlide.value = '';

</script>
<template>
  <div>
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
          <button @click="buttonKnowMore('fullLeft')" id="fullLeft"
            class='opacity-50 h-100 position-absolute bottom-0 start-0 border-0'>
            <p class="display-6">Узнать больше</p>
          </button>
        </template>
        <!-- left slide benefitials -->
        <template v-if="statusSlide === 'fullLeft'">
          <div class="w-100 h-100">
            <RegionsBeneficialsLeftSlide />
          </div>
        </template>
      </div>

      <!-- Start rigth slide -->
      <div class="split right">
        <i class="fa-solid fa-chevron-left d-none opacity-0" id="fa-chevron-left"></i>
        <div class="position-absolute w-100 h-100 d-none" id="startCondition" @click="startCondition()"></div>
        <!-- описание поменять -->
        <div v-if="statusSlide.length === 0" style="height: 100%;"
          class="d-flex flex-column align-items-center justify-content-end">
          <img style="height: 80%;" src="/media/header-component-img/statik-slider/right-cut-bg-prod.png" class="" alt="">
        </div>
        <template v-if="statusSlide.length === 0">
          <button @click="buttonKnowMore('fullRight')" id="fullRight"
            class='opacity-50 h-100 position-absolute bottom-0 end-0 border-0'>
            <p class="display-6">Узнать больше</p>
          </button>
        </template>
        <!-- right slide benefitials -->
        <template v-if="statusSlide === 'fullRight'">
          <div class="w-100 h-100">
            <RegionsBeneficialsRightSlide />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
#startCondition {
  cursor: pointer;
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
  background-image: radial-gradient(to left, #DAD9D9, #F4F4F4);
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


/* .fullRight>.split>#rightSlideImg,
.fullRight>.split>#leftslideImg,
.fullLeft>.split>#rightSlideImg,
.fullLeft>.split>#leftslideImg {
  opacity: 0;
} */


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