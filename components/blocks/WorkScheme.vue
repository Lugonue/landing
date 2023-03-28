<template>
  <div class="container-fluid bg-dark" style="height: 70vh;">
    <h1 class="fs-2hx text-white text-center pt-10">Как это работает?</h1>
    <div class="row flex-column justify-content-center">
      <ul class="col-6 nav nav-tabs nav-pills border-0 me-5 mb-3 mb-md-0 fs-6 d-flex justify-content-center ">
        <li class="nav-item me-0 mb-md-2">
          <a class="nav-link active btn btn-flex btn-active-light-success" data-bs-toggle="tab" href="#kt_vtab_pane_1">
            <span class="svg-icon svg-icon-2"><svg>...</svg></span>
            <span class="d-flex flex-column align-items-start">
              <span class="fs-4 fw-bolder">Link 1</span>
              <span class="fs-7">Description</span>
            </span>
          </a>
        </li>
        <li class="nav-item me-0 mb-md-2">
          <a class="nav-link btn btn-flex btn-active-light-info" data-bs-toggle="tab" href="#kt_vtab_pane_2">
            <span class="svg-icon svg-icon-2"><svg>...</svg></span>
            <span class="d-flex flex-column align-items-start">
              <span class="fs-4 fw-bolder">Link 2</span>
              <span class="fs-7">Description</span>
            </span>
          </a>
        </li>
        <li class="nav-item ">
          <a class="nav-link btn btn-flex btn-active-light-danger" data-bs-toggle="tab" href="#kt_vtab_pane_3">
            <span class="svg-icon svg-icon-2"><svg>...</svg></span>
            <span class="d-flex flex-column align-items-start">
              <span class="fs-4 fw-bolder">Link 3</span>
              <span class="fs-7">Description</span>
            </span>
          </a>
        </li>
      </ul>
      <div class="col-5 fs-1" id="myTabContent">
        <div class="tab-pane fade active show" id="kt_vtab_pane_1" role="tabpanel">
          Инструкция №1
        </div>
        <div class="tab-pane fade" id="kt_vtab_pane_2" role="tabpanel">
          Инструкция №2
        </div>
        <div class="tab-pane fade" id="kt_vtab_pane_3" role="tabpanel">
          Инструкция №3
        </div>
        <div class="tab-pane fade" id="kt_vtab_pane_4" role="tabpanel">
          Инструкция №1
        </div>
      </div>
    </div>
  </div>
</template>

