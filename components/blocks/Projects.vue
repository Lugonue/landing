<template><!--begin::Projects Section-->
    <div class="mb-lg-n15 position-relative z-index-2">
        <!--begin::Container-->
        <div class="container">
            <!--begin::Card-->
            <div class="card" style="filter: drop-shadow(0px 0px 40px rgba(68, 81, 96, 0.08))">
                <!--begin::Card body-->
                <div class="card-body p-lg-20">
                    <!--begin::Heading-->
                    <div class="text-center mb-5 mb-lg-10">
                        <!--begin::Title-->
                        <h3 class="fs-2hx text-dark mb-5" id="portfolio" data-kt-scroll-offset="{default: 100, lg: 150}">
                            Выполненные работы</h3>
                        <!--end::Title-->
                    </div>
                    <!--end::Heading-->
                    <!--begin::Tabs wrapper-->
                    <div class="d-flex flex-center mb-5 mb-lg-15">
                        <!--begin::Tabs-->
                        <ul class="nav border-transparent flex-center fs-5 fw-bold">
                            <li class="nav-item">
                                <a class="nav-link text-gray-500 text-active-primary px-3 px-lg-6 active" href="#"
                                    data-bs-toggle="tab" data-bs-target="#latest">Последние выполненные работы</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-gray-500 text-active-primary px-3 px-lg-6" href="#"
                                    data-bs-toggle="tab" data-bs-target="#sphere-1">Работы сферы №1</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-gray-500 text-active-primary px-3 px-lg-6" href="#"
                                    data-bs-toggle="tab" data-bs-target="#sphere-2">Работы сферы №2</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-gray-500 text-active-primary px-3 px-lg-6" href="#"
                                    data-bs-toggle="tab" data-bs-target="#sphere-3">Работы сферы №3</a>
                            </li>
                        </ul>
                        <!--end::Tabs-->
                    </div>
                    <!--end::Tabs wrapper-->
                    <!--begin::Tabs content-->
                    <div class="tab-content " style="height: 45vh;">
                        <!--begin::Tab pane-->
                        <div class="tab-pane fade show active" id="latest">
                            <!--begin::Row-->
                            <div class="row g-10">
                                <div >
                                    <h1>---список выполненныйх работ---</h1>
                                </div>
                            </div>
                            <!--end::Row-->
                        </div>
                        <!--end::Tab pane-->
                        <div class="tab-pane fade  active" id="sphere-1">
                            <!--begin::Row-->
                            <div class="row g-10">
                                <div>
                                    <h1>---список выполненныйх работ---</h1>
                                </div>
                            </div>
                            <!--end::Row-->
                        </div>
                        <!--end::Tab pane-->
                        <div class="tab-pane fade  active" id="sphere-2">
                            <!--begin::Row-->
                            <div class="row g-10">
                                <div>
                                    <h1>---список выполненныйх работ---</h1>
                                </div>
                            </div>
                            <!--end::Row-->
                        </div>
                        <!--end::Tab pane-->
                        <div class="tab-pane fade  active" id="sphere-3">
                            <!--begin::Row-->
                            <div class="row g-10">
                                <div>
                                    <h1>---список выполненныйх работ---</h1>
                                </div>
                            </div>
                            <!--end::Row-->
                        </div>
                        
                        <!--end::Row-->
                    </div>
                    <!--end::Tab pane-->
                </div>
                <!--end::Tabs content-->
            </div>
            <!--end::Card body-->
        </div>
        <!--end::Card-->
    </div>
    <!--end::Container-->
<!--end::Projects Section-->
</template>

<script lang="ts">
export default {
    name: 'Projects'
}
</script>