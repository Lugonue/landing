<script setup>

const statWorkers = [
  {
    title: 'Инженеров-экологов',
    count: '50+',
  },
  {
    title: 'Менеджеров',
    count: '3',
  },
  {
    title: 'Аудиторов',
    count: '1',
  },
  {
    title: 'Разработчиков',
    count: '5',
  }
]

</script>
<template>
  <section class="container-fluid bg-light pb-20 pt-20 custom" id="about-us">
    <!-- <h1 class="fs-2hx text-center w-100 fw-bolder mb-20">Наша команда</h1> -->
    <div class="container-xxl">
      <div class="d-flex h-100 justify-content-center align-items-center flex-wrap" style="align-items: stretch;">
        <div class="col-12 col-lg-6 col-xl-6 col-xxl-6 h-100">
          <h1 class="display-6 mb-6">Оцифровываем
            <span class="position-relative">
              экологию
              <img class="w-100 position-absolute bottom-0 left-0 mb-n2" src="/media/misc/hero-home-title-underline.svg"
                alt="" style="left: 0;" />
            </span> с 2016
          </h1>
          <div class="pt-5">
            <h2 class="fs-3">Веренков Евгений - основатель:</h2>
            <p class="text-gray-600 fs-4 lh-2 fw-semibold pb-5 pb-lg-8 ">
              "Мы заметили, что компании ищут ответственного инженера-эколога.
              И главное — это взаимопонимание и работа до конца. <br>
              Мы спрограммировали такой сервис чтобы собрать самых топовых
              специалистов, оценивая их подход, а компаниям было легко контролировать работы. <br>
              Наша миссия - показать, что экологическая документация может быть не дорогой, удобной и быстрой"
            </p>
          </div>
          <div class="d-flex mt-auto">
            <div class="border-gray-500 border-dashed rounded min-w-100px py-2 px-4 me-3" v-for="stat in statWorkers"
              style="border-width: 1px;">
              <div class="fs-2 text-gray-800 fw-bolder">{{ stat.count }}</div>
              <div class="fw-semibold fs-7 text-gray-500">{{ stat.title }}</div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 col-xl-6 col-xxl-6 p-10">
          <div class="d-flex w-100 h-100 justify-content-center align-items-center">
            <img class="img-fluid" src="/media/team-photo.png" alt="">
          </div>

        </div>
      </div>
    </div>
  </section>
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

.custom {
  /* border-radius: 150px 0; */
}
</style>