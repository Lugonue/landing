<template >
    <div class="custom_bg d-lg-none">

        <div class="d-flex w-100 h-100 justify-content-between align-items-center flex-column pb-10 overflow-auto"
            style="z-index: 3;">

            <div class="d-flex align-items-center justify-content-center" style="margin-top: 100px;">
                <img src="/media/mobile/mobile-title.png" alt="">
            </div>

            <div class="d-flex w-50 position-relative fw-bolder" style="min-height: 100px;">
                <span class="items">ООС</span>
                <span class="items">НДВ</span>
                <span class="items">СЗЗ</span>
                <span class="items">2-ТП</span>
                <span class="items">ПЭК</span>
            </div>

            <div class="d-flex justify-content-end align-items-center flex-column">
                <div class="d-flex rounded bg-white align-items-center w-75 p-1 my-2 shadow-sm" v-for="chat in chatsManager"
                    :key="chat.id">
                    <div class="avatar me-3">
                        <img style="height: 60px; border-radius: 50%;" src='/media/avatars/45646546.png' alt="User Avatar">
                    </div>
                    <div class="overflow-hidden">
                        <h6 class="fs-5 mb-1">{{ chatTitle.manager.name }} <span class="text-gray-600">{{
                            chatTitle.manager.title
                        }}</span>
                        </h6>
                        <p class="fs-6">{{ chat.body }}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div class="custom_bg1 d-lg-none">
        <div class="d-flex h-50 flex-column justify-content-center pe-20">
            <div class="d-flex justify-content-center">
                <img style="" src="/media/mobile/customerTitile.png" alt="">
            </div>

            <div v-for="chat in chatsCustomer" class="d-flex rounded bg-white w-100 p-2 m-2 shadow-sm align-items-center"
                :key="chat.id">
                <div class="avatar  me-3">
                    <img style="height: 60px; border-radius: 50%;" src='/media/avatars/chat-face.jpg' alt="User Avatar">
                </div>
                <div class="overflow-hidden">
                    <h6 class="fs-5 mb-1">{{ chatTitle.customer.name }} <span class="text-gray-600">{{
                        chatTitle.customer.title
                    }}</span>
                    </h6>
                    <p class="fs-6">{{ chat.body }}</p>
                </div>
            </div>

        </div>
        <div class="d-flex h-50 mt-6 pe-5 pb-10 ms-20 flex-column justify-content-center">
            <div class="d-flex justify-content-center mb-2">
                <img style="" src="media/mobile/execTitile.png" alt="">
            </div>

            <div v-for="chat in chatsExec" class="d-flex rounded bg-white w-100 p-2 m-2 shadow-sm align-items-center" style="height: 120px;"
                :key="chat.id">
                <div class="avatar me-3">
                    <img style="height: 60px; border-radius: 50%;" src='/media/avatars/chat-face-2.png' alt="User Avatar">
                </div>
                <div class="overflow-hidden">
                    <h6 class="fs-5 mb-1">{{ chatTitle.exec.name }} <span class="text-gray-600">{{
                        chatTitle.exec.title
                    }}</span>
                    </h6>
                    <p class="fs-6">{{ chat.body }}</p>
                </div>
            </div>

        </div>

    </div>
</template>
<script setup>

const chatTitle = {
    manager: {
        name: 'Анастасия',
        title: 'проект менеджер'
    },
    customer: {
        name: 'Павел',
        title: 'заказчик'
    },
    exec: {
        name: 'Ирина',
        title: 'инженер-эколог'
    }
}

const chatsManager = [
    {
        id: 1,
        body: 'Здравствуйте. Это фриланс-биржа экологических проектов',

    },
    {
        id: 2,
        body: 'На FREEECO зарегистрированы инженеры-экологи, которые решают задачи компаний',
    },
    {
        id: 3,
        body: 'Войдите в веб-сервис и оформите заказ. Мы проведём анализ, составим договор, назначим специалиста и он приступит к работе',
    },
    {
        id: 4,
        body: 'А если вы исполнитель, то войдите в веб-сервис, заполните профиль и ожидайте новых заказов',
    }
]

const chatsCustomer = [
    {
        id: 1,
        body: 'Все риски принимает на себя компания FREECO. Выполнение специалистом работы лежит в их области ответственности'
    },
    {
        id: 2,
        body: 'В личном кабинете можно следить за этапами прохождения проекта'
    },
    {
        id: 3,
        body: 'Работа по договору и назначение исполнителя за сутки'
    }
]

const chatsExec = [
    {
        id: 1,
        body: 'Получайте высокие рейтинги и забирайте все работы.  С большим портфолио вы будете расти'
    },
    {
        id: 2,
        body: 'Возможность уйти на фриланс и зарабатывать удаленно. Оповещения о новых заказах'
    },
    {
        id: 3,
        body: 'Минимум рисков, так как платит FREEECO. Легко сосредоточиться на проектах и не отвлекаться на общение с клиентом'
    }
]

</script>
<style scoped> .custom_bg {
     position: relative;
     background:
         linear-gradient(45deg, rgb(209, 121, 206) 50%, #ffffff 50%);
 }

 .custom_bg1 {
     background:
         linear-gradient(-45deg, rgb(207, 212, 212, 0.5) 50%, rgb(209, 121, 206)50%);

 }

 .avatar {
     display: flex;
     height: 100%;
     justify-content: center;
     align-items: center;
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
     z-index: -1;
 }

 .items {
     position: absolute;
     z-index: 0;
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

 p {
     font-size: calc(11px + 8 * (100vw - 320px) / 880) !important;
 }
</style>