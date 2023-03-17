<template>
    <div class="position-absolute top-0 w-25 d-flex flex-column justify-content-between" id="containerForChats" style="height: 90%; overflow: hidden;">
    <template v-for="chat in chats">
      <div class="push-notification chat-style p-2 rounded">
        <div class="push-notification__avatar w-25 me-2">
          <img class="me-5 w-100" :src=chat.img alt="User Avatar">
        </div>
        <div class="push-notification__content">
          <p class="push-notification__text fs-6 mb-1">{{ chat.header }}</p>
          <p class="push-notification__message fs-6">{{ chat.body }}</p>
        </div>
      </div>
    </template>
  </div>
</template>
<script setup>
const freeco = 'Анастасия проект менеджер';
const employer = 'Павел основатель «ПромСтрой»';
const chats = [
  { img: '/media/avatars/chat-face-2.png', header: freeco, body: 'Приветствую вас на фриланс-бирже экологических проектов для бизнеса' },
  { img: '/media/avatars/chat-face.jpg', header: employer, body: 'Вероятно, вы ищете исполнителя для разработки экологической отчетсности для своего предприятия?' },
  { img: '/media/avatars/chat-face-2.png', header: freeco, body: 'На freeЕco зарегистрированы инженеры-экологи, которые решат все Ваши задачи' },
  { img: '/media/avatars/chat-face.jpg', header: employer, body: 'Я доверился freeЕco и получил отличный результат: работу сервиса с "прозрачной" разработкой и конкурентную цену! ' },
  { img: '/media/avatars/chat-face-2.png', header: freeco, body: 'Прямо сейчас, я поедлагаю Вам отправиться в веб-сервис и оформить заказ. Если Вы еще не уверены, узнайте о сервесе больше, кликните в левую область экрана!' },
  { img: '/media/avatars/150-11.jpg', header: 'Ирина инженер-эколог', body: 'Если вы разработчик экологических проектов, тогда присоединяйтесь к нашей команде, узнайте больше в правой части экрана!' },
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
  animation-delay: 2.5s;
}

.chat-style:nth-child(5) {
  animation-delay: 3s;
  margin-left: auto;
}

.chat-style:nth-child(6) {
  animation-delay: 3.5s;
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