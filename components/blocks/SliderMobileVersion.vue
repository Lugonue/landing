<template >
    <div class="custom_bg d-lg-none" style="height: 100vh;">

        <div class="d-flex w-100 h-100 justify-content-between align-items-center flex-column pb-10 position-absolute"
            style="z-index: 3;">

            <div class="d-flex align-items-center justify-content-center" style="margin-top: 100px;">
                <img src="/media/mobile/mobile-title.png" alt="">
            </div>

            <div class="d-flex w-50 h-25 position-relative fw-bolder">
                <span class="items">ООС</span>
                <span class="items">НДВ</span>
                <span class="items">СЗЗ</span>
                <span class="items">2-ТП</span>
                <span class="items">ПЭК</span>
            </div>

            <div class="d-flex justify-content-end align-items-center flex-column">
                <div class="d-flex rounded bg-white w-75 p-3 my-2 shadow-sm" v-for="chat in chats" :key="chat.id">
                    <div class="avatar me-3">
                        <img style="width: 100px;" src='/media/avatars/45646546.png' alt="User Avatar">
                    </div>
                    <div class="">
                        <h6 class="fs-5 mb-1">{{ chatTitle.name }} <span class="text-gray-600">{{
                            chatTitle.title
                        }}</span>
                        </h6>
                        <p class="fs-6">{{ chat.body }}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup>

const chatTitle = {
    name: 'Анастасия',
    title: 'проект менеджер'
}

const chats = [
    {
        id: 1,
        body: 'Здравствуйте. Это фриланс-биржа экологических проектов',

    },
    {
        id: 2,
        body: 'На freeeco зарегистрированы инженеры-экологи, которые решают задачи компаний.',
    },
    {
        id: 3,
        body: 'Войдите в веб-сервис и оформите заказ. Мы проведём анализ, составим договор, назначим специалиста и он приступит к работе.',
    },
    {
        id: 4,
        body: 'А если вы исполнитель, то войдите в веб-сервис, заполните профиль и ожидайте новых заказов.',
    }
]

</script>
<style scoped>  .custom_bg {
      position: relative;
      background:
          linear-gradient(45deg, rgb(209, 121, 206) 50%, #ffffff 50%);
  }

  .avatar {
      border-radius: 50%;
  }

  .custom_bg::before {
      content: "";
      position: absolute;
      width: 100vw;
      height: 100vh;
      background-image: url("/media/mobile-bg.png");
      background-size: 40%;
      background-position: top 20% right 0%;
      background-repeat: no-repeat;
      z-index: 1;
  }

  .items {
      position: absolute;
      font-size: 2rem;
      color: #ffffff;
      border-radius: 10px;
      background: gainsboro;
      padding: 1px;
      rotate: 45deg;
  }

.items:nth-child(1) {
    top: 10%;
    left: 100%;
}
.items:nth-child(2) {
    top: 60%;
    left: 50%;
    rotate: 25deg;
}
.items:nth-child(3) {
    top: 20%;
    left: 70%;
    rotate: -25deg;
}
.items:nth-child(4) {
    top: 50%;
    left: 0%;
    rotate: -5deg;
}
.items:nth-child(5) {
    top: 10%;
    left: 0%;
    rotate: -25deg;
}


</style>