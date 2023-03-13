<template>
  <!--begin::Team Section-->
  <div class="py-10 py-lg-20">
    <!--begin::Container-->
    <div class="container">
      <!--begin::Heading-->
      <div class="text-center mb-12">
        <!--begin::Title-->
        <h3 class="fs-2hx text-dark mb-5" id="team" data-kt-scroll-offset="{default: 100, lg: 150}">Как это работает
        </h3>
      </div>
      <!--end::Heading-->
      <!--begin::Slider-->
      <div class="container">
        <div class="row">
          <div class="col-6 text-center mb-5">
            <span class="fs-2 ">Для заказчика</span>
          </div>
          <div class="col-6 text-center mb-5">
            <span class="fs-2 ">Для исполнителя</span>
          </div>
        </div>
        <div class="row d-flex">
          <div class="col-6">
            <RegionsHowItWorksCustomer />
          </div>

          <div class="col-6 rounded">
            <RegionsHowItWorksPerformer />
          </div>
        </div>
        <div class="row justify-content-center mt-5 bg-light">
          <div class="col-4">
            <div class="d-flex flex-column align-items-center w-100">
              <p class="fs-2">менеджер- freeEco</p>
              <p>Связующее звено. </p>
              <p>Экологическая документация имеет серьезные основания в законодательстве</p>
              <p>Основные задачи:</p>
              <ul>
                <li>Контроль</li>
                <li>Решение конфликтов</li>
                <li>Чтото еще...</li>
              </ul>

              <img class="w-100" src="media/slider/222.png" alt="">

            </div>
          </div>
        </div>

      </div>
      <!-- <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active ">
            <img src="media/product-demos/demo1.png" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="media/product-demos/demo1.png" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="media/product-demos/demo1.png" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> -->


      <!--end::Slider-->
    </div>
    <!--end::Container-->
  </div>
  <!--end::Team Section-->
</template>

