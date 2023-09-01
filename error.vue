<template>
    <!--begin::Main-->
    <!--begin::Root-->
    <div class="d-flex flex-column flex-root">
        <!--begin::Authentication - 404 Page-->
        <div class="d-flex flex-column flex-center flex-column-fluid p-10">
            <!--begin::Illustration-->
            <img src="/media/illustrations/dozzy-1/18.png" alt="" class="mw-100 mb-10 h-lg-450px" />
            <!--end::Illustration-->
            <!--begin::Message-->
            <h1 class="fw-bold mb-10" style="color: #6d4479">Кажется, тут пусто...</h1>
            <!--end::Message-->
            <!--begin::Link-->
            <NuxtLink to="/" class="btn btn-info">Вернуться на главную</NuxtLink>
            <!--end::Link-->
        </div>
        <!--end::Authentication - 404 Page-->
    </div>
    <!--end::Root-->
    <!--end::Main-->
</template>

<script setup>
    useMeta({
        title: "404",
        layout: "404",
        meta: [
            { name: "description", content: "404 | FreeEco"}
        ]
    })
</script>