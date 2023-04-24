<template>
  <div class="d-flex justify-content-start position-relative">
    <ul class="col-6 nav nav-tabs nav-pills border-0 me-5 mb-3 mb-md-0 fs-6 d-flex flex-column justify-content-center">
      <li>
        <h3 class="m-5">Инструкция для Заказчика</h3>
      </li>
      <li class="nav-item me-0 mb-md-2">
        <a class="nav-link active btn btn-flex btn-active-light-info" data-bs-toggle="tab" href="#kt_vtab_pane_11">
          <span class="svg-icon svg-icon-2"><svg>...</svg></span>
          <span class="d-flex flex-column align-items-start">
            <span class="fs-4 fw-bolder">Шаг 1</span>
            <span class="fs-7">Description</span>
          </span>
        </a>
      </li>
      <li class="nav-item me-0 mb-md-2">
        <a class="nav-link btn btn-flex btn-active-light-info" data-bs-toggle="tab" href="#kt_vtab_pane_12">
          <span class="svg-icon svg-icon-2"><svg>...</svg></span>
          <span class="d-flex flex-column align-items-start">
            <span class="fs-4 fw-bolder">Шаг 2</span>
            <span class="fs-7">Description</span>
          </span>
        </a>
      </li>
      <li class="nav-item ">
        <a class="nav-link btn btn-flex btn-active-light-info" data-bs-toggle="tab" href="#kt_vtab_pane_13">
          <span class="svg-icon svg-icon-2"><svg>...</svg></span>
          <span class="d-flex flex-column align-items-start">
            <span class="fs-4 fw-bolder">Шаг 3</span>
            <span class="fs-7">Description</span>
          </span>
        </a>
      </li>
    </ul>
    <div class="col-5 position-absolute bg-light tab-pane fade top-50 active show" style="left: 50%;" id="kt_vtab_pane_11"
      role="tabpanel">
      <h3 class="border border-dark p-10">Скриншот 1</h3>
    </div>
    <div class="col-5 position-absolute bg-light tab-pane fade top-50" style="left: 50%;" id="kt_vtab_pane_12"
      role="tabpanel">
      <h3 class="border border-dark p-10">Скриншот 2</h3>
    </div>
    <div class="col-5 position-absolute bg-light tab-pane fade top-50" style="left: 50%;" id="kt_vtab_pane_13"
      role="tabpanel">
      <h3 class="border border-dark p-10">Скриншот 3</h3>
  </div>
</div></template>