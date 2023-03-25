<template>
    <div class="position-absolute top-0 w-25 d-flex flex-column justify-content-between" id="containerForChats" style="height: 90%; overflow: hidden;">
    <template v-for="chat in chats">
      <div class="push-notification chat-style p-2 rounded">
        <div class="push-notification__avatar w-25 me-2">
          <img class="me-5 w-100" :src=chat.img alt="User Avatar">
        </div>
        <div class="push-notification__content">
          <p class="push-notification__text fs-6 mb-1">{{ chat.header }} <span class="text-info">{{ chat.headerPart }}</span></p>
          <p class="push-notification__message fs-6">{{ chat.body }}</p>
        </div>
      </div>
    </template>
  </div>
</template>
<script setup>
const customerChat = 'Павел';
const customerChatHeader = 'заказчик';

const managerFreeeco = 'Анастасия';
const managerFreeecoHeader = 'проект менеджер'
const chats = [
  { img: '/media/avatars/chat-face-2.png', header: managerFreeeco, headerPart: managerFreeecoHeader, body: 'Здравствуйте. Это фриланс-биржа экологических работ для бизнеса' },
  { img: '/media/avatars/chat-face.jpg', header: customerChat, headerPart: customerChatHeader, body: 'Здравствуйте. Вы делаете проекты НДВ? СЗЗ?' },
  { img: '/media/avatars/chat-face-2.png', header: managerFreeeco, headerPart: managerFreeecoHeader, body: 'Да. На freeeco зарегистрированы удаленные инженеры-экологи, которые разрабатывают разные документы от отчётов до проектов' },
  { img: '/media/avatars/chat-face.jpg', header: customerChat, headerPart: customerChatHeader, body: 'А эти документы точно нужны моей компании? Что мне необходимо сделать?' },
  { img: '/media/avatars/chat-face-2.png', header: managerFreeeco, headerPart: managerFreeecoHeader, body: 'Войдите в веб-сервис и оформите заказ. Мы проведём анализ, составим договор. Подберём подходящего специалиста, а также проконтролируем работу' },
  { img: '/media/avatars/150-11.jpg', header: 'Ирина', headerPart: 'инженер-эколог', body: 'Здравствуйте. Меня зовут Ирина, я инженер-эколог со стажем. Хочу получать экологические заказы' },
  { img: '/media/avatars/150-11.jpg', header: managerFreeeco, headerPart: managerFreeecoHeader, body: 'Проходите регистрацию, отмечайте работы, которые хотите получать и добро пожаловать' },
]
</script>
<style scoped>

.push-notification {
  width: 70%;
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  animation: ani 1s forwards;
  opacity: 0;
}

.push-notification:hover {
  transform: translateY(-5px);
}


.push-notification__avatar img {
  border-radius: 50%;
}

.push-notification__content {
  flex: 1;
}

.push-notification__text {
  font-weight: bold;
}

.push-notification__message {
  margin: 0;
}


#containerForChats {
  margin-top: 2%;
  left: 40%;
  z-index: 1;
  flex-direction: column;
}

.chat-style:nth-child(1) {
  margin-left: auto;
  animation-delay: 1s;
}

.chat-style:nth-child(2) {
  margin-right: auto;
  animation-delay: 1.5s;
}

.chat-style:nth-child(3) {
  margin-left: auto;
  animation-delay: 2s;
}

.chat-style:nth-child(4) {
  margin-right: auto;
  animation-delay: 2.5s;
}

.chat-style:nth-child(5) {
  animation-delay: 3s;
  margin-left: auto;
}

.chat-style:nth-child(6) {
  animation-delay: 3.5s;
  margin-right: auto;
}
.chat-style:nth-child(7) {
  animation-delay: 4s;
  margin-left: auto;
}


@keyframes ani {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>