<script setup>
const status = ref('');
const statusSlideWidth = ref('');
const fullRight = ref('');
const fullLeft = ref('');
const switchStatus = (className) => {
  if (!statusSlideWidth.value) status.value = className;
};
const buttonKnowMore = (slide) => {
  statusSlideWidth.value = slide;
  status.value = '';
  fullRight.value = slide === 'fullRight' ? 'd-none' : '';
  fullLeft.value = slide === 'fullLeft' ? 'd-none' : '';
}

const startCondition = () => {
  statusSlideWidth.value = '';
  fullRight.value = '';
  fullLeft.value = '';
}
</script>
<template>
  <div>
    <div :class="'main ' + status + statusSlideWidth" id="main">
      <div class="split left" @mouseover="switchStatus('hoverLeft')">
        <i class="fa-solid fa-chevron-left"></i>
        <i @mousedown="startCondition()" class="fa-thin fa-square-xmark"></i>
        <img src="/media/header-component-img/first-col.png" class="skateboard"  id="rightSlideImg" alt="penny 36 inch longboard in blue">
        <div class='content'>
          <h1 class="text-white text-uppercase display-1">заказчик</h1>
          <h1 class="text-white fs-2 text-uppercase fst-italic fw-lighter text-decoration-underline">разместить заказ
          </h1>
          <p class="text-white fs-1 text-uppercase mt-5 mb-20"><em>Вы управляете компанией или её владелец? Бухгалтер,
              менеджер или влиятельный человек? Узнайте, что может дать Вам сервис </em></p>
          <!-- <p class="fs-2 text-white">Вы управляете компанией или её владелец? Бухгалтер, менеджер или влиятельный человек? Узнайте, что может дать Вам сервис</p> -->
          <button class="btn btn-bg-dark btn-color-white">
            Я заказчик
            <i class="fa-solid fa-long-arrow-alt-right"></i>
          </button>
          <button @mousedown="buttonKnowMore('fullLeft')" id="fullLeft"
            :class="'btn btn-bg-dark btn-color-white ms-5 ' + fullLeft">
            Узнать больше
            <i class="fa-solid fa-long-arrow-alt-right"></i>
          </button>
        </div>
      </div>

      <div class="split right" @mouseover="switchStatus('hoverRight')">
        <i class="fa-solid fa-chevron-right"></i>
        <i @mousedown="startCondition()" class="fa-thin fa-square-xmark"></i>
        <img src="/media/header-component-img/r-col.cdr.png" id="leftslideImg" class="shoes"
          alt=" adidas pharrell williams tennis hu shoe in tangerine/gold">
        <div class="content">
          <h1 class="text-white text-uppercase display-1 ">исполнитель</h1>
          <h1 class="text-white fs-2 text-uppercase fst-italic fw-lighter text-decoration-underline">Начать работать
          </h1>
          <p class="text-white fs-1 text-uppercase mt-5 mb-20"><em>Вы инженер-эколог или проектировщик? Узнайте, как
              присоединиться к нам</em></p>
          <!-- <p class="fs-2 text-white">Вы инженер-эколог или проектировщик? Узнайте, как присоединиться к нам</p> -->
          <button class="btn btn-bg-dark btn-color-white">
            Я исполнитель
            <i class="fa-solid fa-long-arrow-alt-right"></i>
          </button>
          <button @mousedown="buttonKnowMore('fullRight')" id="fullRight"
            :class="'btn btn-bg-dark btn-color-white ms-5 ' + fullRight">
            Узнать больше
            <i class="fa-solid fa-long-arrow-alt-right"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- ===============PAGE-NAVIGATION SELECTOR=============== -->
    <div class="page-chevron">
      <div class="page-indicator">
        <span>01</span>06
      </div>
      <div class="chevronLR">
        <i class="fa-solid fa-chevron-left"></i>
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-headers-bg {
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.7);
  padding: 10px;
}

.main {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
}

.split {
  position: absolute;
  width: 50%;
  height: 100%;
  transition: .8s all cubic-bezier(.87, .76, .33, .98);
  overflow: hidden;
  min-height: 100vh
}

.split.left {
  left: 0;
  background: rgb(0, 135, 204);
  background: linear-gradient(90deg, rgb(36, 114, 113) 0%, rgb(146, 227, 225) 100%);
}

.split.right {
  right: 0;
  background: rgb(207, 234, 54);
  background: linear-gradient(90deg, rgb(218, 234, 52) 0%, rgba(249, 174, 101) 100%);
}

.hoverLeft .split.left,
.hoverRight .split.right {
  width: 65%;
}

.hoverLeft .split.right,
.hoverRight .split.left {
  width: 35%;
}

.fullLeft .split.left,
.fullRight .split.right {
  width: 95%;
}

.fullLeft .split.right,
.fullRight .split.left {
  width: 5%;
}


.split.left .fa-chevron-left,
.split.right .fa-chevron-right {
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
}

.split.left .fa-chevron-left {
  right: 0;
}

.skateboard {
  position: absolute;
  width: 60%;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.shoes {
  width: 60%;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.content {
  position: absolute;
  width: 80vh;
  max-width: 600px;
  margin-left: 2rem;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 1s cubic-bezier(.87, .76, .33, .98);
  background: rgb(0, 0, 0);
  background: rgba(255, 255, 255, 0.35);

  border-radius: 15px;
  text-align: center;

  text-shadow: 2px 2px 2px #000;

  padding-bottom: 20px;

}

.hoverLeft .split.right .text {
  margin-left: 3rem;
}

.hoverLeft .split.left .text {
  transform: translate(-40%, -50%);
}

.hoverLeft .split.right .text {
  transform: translate(-40%, -50%);
}

.hoverRight .split.right .text {
  transform: translate(-60%, -50%);
}

.hoverRight .split.left .text {
  transform: translate(-45%, -50%);
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

.page-indicator {
  font-weight: 400;
  padding: 0 20px;
}

.page-indicator span::after {
  content: "";
  display: inline-block;
  width: 100px;
  margin: 0 10px;
  border: .2px solid #fff;

  transform: translateY(-5px);
}

.chevronLR {
  padding: 0 2.5rem;
}

.chevronLR .fa-chevron-left,
.chevronLR .fa-chevron-right {
  font-size: 1.4rem;
}

.chevronLR .fa-chevron-left {
  margin-right: 1.3rem;
}

.chevronLR .fa-chevron-right {
  margin-right: 2rem;
}


/* *********************************  d-none *************** */

.fullLeft > .right > #leftslideImg, .fullLeft > .right > .content{
  display: none;
}

.fullRight > .left > #rightSlideImg, .fullRight > .left > .content {
  display: none;
}

.fullLeft > .left > .fa-square-xmark, .fullRight > .right > .fa-square-xmark {
  display: block;
  transition-duration: 1.5s;
}
.fa-square-xmark:hover {
  color: red;
}
</style>