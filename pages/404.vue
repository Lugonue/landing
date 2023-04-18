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
            <h1 class="fw-bold mb-10" style="color: #A3A3C7">Seems there is nothing here</h1>
            <!--end::Message-->
            <!--begin::Link-->
            <a href="../../demo3/dist/index.html" class="btn btn-primary">Return Home</a>
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
        meta: [
            { name: "description", content: "404 | FreeEco"}
        ]
    })
</script>