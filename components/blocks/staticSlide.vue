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
        <img src="/media/header-component-img/statik-slider/left-cut-bg-prod.png" class="position-absolute bottom-0"
          id="leftslideImg" alt="">
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
        <img src="/media/header-component-img/statik-slider/right-cut-bg-prod.png" id="rightSlideImg"
          class="position-absolute bottom-0 end-0" alt=" adidas pharrell williams tennis hu shoe in tangerine/gold">
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

/* .fullLeft>.left {
  background: linear-gradient(to right, rgba(198, 15, 170, 0.6), rgba(179, 177, 178, 0.7)), center / 110% no-repeat url("/media/header-component-img/statik-slider/Background-img-left-slide1.png");
  transition: background 1s;
} */

/* .fullRight>.right {
  background: linear-gradient(to left, rgba(123, 123, 123, 0.6), rgba(170, 164, 167, 0.9)), center / 110% no-repeat url("/media/header-component-img/statik-slider/Background-img-right-slide.png");
  transition: background 1s;
} */

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


.fullRight>.split>#rightSlideImg,
.fullRight>.split>#leftslideImg,
.fullLeft>.split>#rightSlideImg,
.fullLeft>.split>#leftslideImg {
  display: none;
}


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
  left: 20%;
}

#rightSlideImg {
  width: 100%;

  left: 0%;
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

/* chats appierence */
/* .fullLeft>.chats,
.fullRight>.chats {
  opacity: 0 !important;
} */

/* .fullLeft>.chats>.chat-style,
.fullRight>.chats>.chat-style {
  opacity: 0;
  transition-delay: 0ms !important;
} */
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
</style>