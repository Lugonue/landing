<template>
  <div class="position-absolute top-0 d-flex flex-column" id="containerForChats">
    <template v-for="chat in chats">
      <div class="push-notification chat-style p-2 mb-5 rounded">
        <div class="push-notification__avatar me-2">
          <img class="me-5 w-100" :src=chat.img alt="User Avatar">
        </div>
        <div class="push-notification__content mb-1">
          <h6 class="push-notification__text mb-1">{{ chat.header }} <span class="text-gray-600">{{ chat.headerPart.toLowerCase()
          }}</span>
          </h6>
          <p class="push-notification__message ">{{ chat.body }}</p>
        </div>
      </div>
    </template>
  </div>
</template>
<script setup>

const chats = [
  { img: '/media/avatars/45646546.png', header: 'Анастасия', headerPart: 'Проект менеджер', body: 'Здравствуйте. Это фриланс-биржа экологических работ для бизнеса' },
  { img: '/media/avatars/chat-face.jpg', header: 'Павел', headerPart: 'Заказчик', body: 'Здравствуйте. Вы делаете проекты НДВ? СЗЗ?' },
  { img: '/media/avatars/45646546.png', header: 'Анастасия', headerPart: 'Проект менеджер', body: 'Да. На freeeco зарегистрированы удаленные инженеры-экологи, которые разрабатывают разные документы от отчётов до проектов' },
  { img: '/media/avatars/chat-face.jpg', header: 'Павел', headerPart: 'Заказчик', body: 'А эти документы точно нужны моей компании? Что мне необходимо сделать?' },
  { img: '/media/avatars/45646546.png', header: 'Анастасия', headerPart: 'Проект менеджер', body: 'Войдите в веб-сервис и оформите заказ. Мы проведём анализ, составим договор. Подберём подходящего специалиста, а также проконтролируем работу' },
  { img: '/media/avatars/chat-face-2.png', header: 'Ирина', headerPart: 'Инженер-эколог', body: 'Здравствуйте. Меня зовут Ирина, я инженер-эколог со стажем. Хочу получать экологические заказы' },
  { img: '/media/avatars/45646546.png', header: 'Анастасия', headerPart: 'Проект менеджер', body: 'Проходите регистрацию, отмечайте работы, которые хотите получать и добро пожаловать' },
]
onMounted(() => {
  const chatElemts = document.querySelectorAll('.push-notification');
  let counter = 0;
  const interval = setInterval(() => {
    chatElemts[counter].style.display = 'flex';
    counter += 1;
    if (counter === 7) clearInterval(interval);
  }, 500)
})

</script>
<style scoped>
.push-notification {
  width: 70%;
  display: flex;
  align-items: start;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  animation: ani 1s forwards;
  opacity: 0;
  display: none;
}

.push-notification:hover {
  transform: translateY(-5px);
}


.push-notification__avatar img {
  border-radius: 50%;
}

.push-notification__avatar {
  width: 23%;
  align-self: center;
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
  padding-top: 60px;
  max-height: 90vh; 
  overflow: scroll;
  max-width: 25%;
  margin-top: 2%;
  left: 40%;
  z-index: 1;
  flex-direction: column;
  font-weight: 500;
  font-size: 1em;
  line-height: 1.3em;
}

.chat-style:nth-child(1) {
  margin-left: auto;
  /* animation-delay: 0.2s; */
}

.chat-style:nth-child(2) {
  margin-right: auto;
  /* animation-delay: 1.5s; */
}

.chat-style:nth-child(3) {
  margin-left: auto;
  /* animation-delay: 2s; */
}

.chat-style:nth-child(4) {
  margin-right: auto;
  /* animation-delay: 2.5s; */
}

.chat-style:nth-child(5) {
  /* animation-delay: 3s; */
  margin-left: auto;
}

.chat-style:nth-child(6) {
  /* animation-delay: 3.5s; */
  margin: 0 auto;
}

.chat-style:nth-child(7) {
  /* animation-delay: 4s; */
  margin-right: auto;
}


@keyframes ani {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@media (max-width: 1000px) {
  #containerForChats {
    display: none !important;
  }
}
</style>