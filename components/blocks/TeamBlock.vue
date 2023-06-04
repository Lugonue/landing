<script setup>

const statButn = [
  {
    name: 'экологов',
    data: '50+',
  },
  {
    name: 'менеджера',
    data: '3',
  },
  {
    name: 'аудитор',
    data: '1',
  },
  {
    name: 'разработчиков',
    data: '5',
  }
]

</script>
<template>
  <div class="container-xxl" style="min-height: 90vh;">
    <!-- <h1 class="fs-2hx text-center w-100 fw-bolder mb-20">Наша команда</h1> -->
    <div class="w-100 h-100 d-flex " id="mainTeamBlock">
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-12 col-lg-6 col-xl-6 col-xxl-6">
          <h2 class="display-6 mb-5">Оцифровываем <span class="before">экологию</span> с 2016</h2>
          <h4 class="">Веренков Евгений - основатель:</h4>
          <p class="fs-2 lh-lg p-3">
            "Мы заметили, что компании ищут ответственного инженера-эколога.
            И главное — это взаимопонимание и работа до конца. <br>
            Мы спрограммировали такой сервис чтобы собрать самых топовых
            специалистов, оценивая их подход, а компаниям было легко контролировать работы. <br>
            Наша миссия - показать, что экологическая документация может быть не дорогой, удобной и быстрой"
          </p>
          <div class="d-flex mt-5">
            <div
              class="btn btn-flex flex-column align-items-center btn-outline btn-outline-dashed btn-outline-dark btn-active-light-dark me-2"
              v-for="btn in statButn">
              <span class="badge bg-light text-dark">{{ btn.data }}</span>
              <span class="fw-bolder">{{ btn.name }}</span>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 col-xl-6 col-xxl-6 p-5">
          <div class="d-flex w-100 h-100 justify-content-center align-items-center">
            <img class="img-fluid" src="/media/team-photo.png" alt="">
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>
<style scoped>
.before {
  position: relative;
}

.before:hover {
  color: #1bc50f;
}

.before::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #1bc50f;

}

/* #bg {
  background: center / contain no-repeat url('/media/team1.png');
  min-height: 50vh;
  
} */
#mainTeamBlock {
  margin: 100px auto 100px;
}</style>