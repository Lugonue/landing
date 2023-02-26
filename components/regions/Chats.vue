<template>
  <div class="position-absolute top-0 w-25 h-100 d-flex" id="containerForChats">
    <template v-for="chat in chats">
      <div class="push-notification chat-style">
        <div class="push-notification__avatar">
          <img :src=chat.img alt="User Avatar">
        </div>
        <div class="push-notification__content">
          <p class="push-notification__text">{{ chat.header }}</p>
          <p class="push-notification__message">{{ chat.body }}</p>
        </div>
      </div>
    </template>
  </div>
</template>
<script setup>
const freeco = 'Анастасия проект менеджер';
const employer = 'Павел основатель «ПромСтрой»';
const chats = [
  { img: 'media/avatars/chat-face-2.jpg', header: freeco, body: 'Здравствуйте. Это фриланс-биржа экологических проектов для бизнеса' },
  { img: 'media/avatars/chat-face.jpg', header: employer, body: 'Здравствуйте. Вы делаете проекты НДВ? СЗЗ?' },
  { img: 'media/avatars/chat-face.jpg', header: freeco, body: 'На freeeco зарегистрированы инженеры-экологи, которые решат все Ваши задачи' },
  { img: 'media/avatars/chat-face-2.jpg', header: employer, body: 'А эти документы точно нам нужны? Что мне необходимо сделать?' },
  { img: 'media/avatars/chat-face.jpg', header: freeco, body: 'Войдите в веб-сервис и оформите заказ. Мы проведём анализ, составим договор, назначим специалиста и он приступит к работе.' },
  { img: 'media/avatars/150-14.jpg', header: 'Ирина инженер-эколог', body: 'Добрый день. Чем могу Вам помочь?' },
]
</script>
<style scoped>

.push-notification {
  width: 70%;
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin-bottom: 10px;
  transition: transform 0.3s ease-in-out;

  font-size: 14px;

  animation: ani 1s forwards;
  opacity: 0;
}

.push-notification:hover {
  transform: translateY(-5px);
}

.push-notification__avatar {
  margin-right: 10px;
}

.push-notification__avatar img {
  width: 100px;
  height: 100px;
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
  z-index: 2;
  flex-direction: column;
}

.chat-style:nth-child(1) {
  margin-right: auto;
  animation-delay: 1s;


}

.chat-style:nth-child(2) {
  margin-left: auto;
  animation-delay: 2s;
}

.chat-style:nth-child(3) {
  margin-left: auto;
  animation-delay: 3s;
}

.chat-style:nth-child(4) {
  animation-delay: 4s;
}

.chat-style:nth-child(5) {
  animation-delay: 5s;
  margin-left: auto;
}

.chat-style:nth-child(6) {
  animation-delay: 6s;
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