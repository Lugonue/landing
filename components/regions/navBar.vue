<template>
    <div class="margin">
        <nav class="row flex-row">
            <div class="col-6">
                <div class="btn btn-white bg-hover-info"><a href="">FREEECO</a></div>
            </div>
            <div class="d-flex flex-row justify-content-end align-items-center nav-bar-style col-6 ">
                <div class="ms-3">
                    <div class="btn btn-white bg-hover-info"><a href="">Полный анализ</a></div>
                    <!-- <a  href="">Полный анализ</a> -->
                </div>
                <div class="ms-3">
                    <div class="btn btn-white bg-hover-info"><a href="">Сделать заказ</a></div>
                </div>
                <div class="ms-3">
                    <div class="btn btn-white bg-hover-info"><a href="">Стать исполнителем</a></div>
                </div>
                <div class="ms-3">
                    <img src="" alt="img">
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'navBar'
    }
</script>

<style scoped>
* {
    font-size: 18px;
}
.margin {
    margin: 20px;
}
.nav-bar-style * {
    color: black;
    font-weight: 500;


}
@media (max-width: 700px) {
    .margin {
        display: none;
    }
}
a {
    color: white;
}
.btn-white {
    background-color: #7239ea;
}
</style>