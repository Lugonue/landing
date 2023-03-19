<template>
  <div class="container-fluid">
    <h1 class="fs-2hx text-center mb-10">Наша команда</h1>

    <div class="row justify-content-evenly">
      <div class="card-wrapper" v-for="item in dataTeam">
        <div class="card">
          <div class="card-image">
            <img class="w-100" :src=item.img alt="profile">
          </div>
          <ul class="social-icons">
            <li>
              <a href="">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i class="fab fa-dribbble"></i>
              </a>
            </li>
          </ul>
          <div class="details p-2">
            <h2>{{ item.name }}
              <br>
              <span class="job-title">{{ item.description }}</span>
            </h2>
          </div>
        </div>
      </div><!-- end box wrapper -->
      <!-- END box wrapper -->
    </div>

  </div><!-- END container -->
</template>
<script setup>
const dataTeam = [
  { id: 1, name: 'Евгений Веренков', description: 'Инженер-эколог, общественный инспектор', img: '/media/avatars/team/photo_2021-09-16_13-34-31.jpg' },
  { id: 2, name: 'Константин Попко', description: 'Инженер-эколог, разработчик', img: '/media/avatars/team/DSC_0055.jpg' },
]
</script>
<style lang="scss" scoped>
/**** Sass Variables ****/
$bodyFont: 'Open Sans', sans-serif;


* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: $bodyFont;
  background: #333;
}

.card-wrapper {
  width: 200px;
  height: 500px;
  position: relative;
}

.card {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 290px;
  transform: translate(-50%, -50%);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: 0.5s;

  .card-image {
    // position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: #000;
    transition: .5s;
  }

  &:hover img {
    opacity: 0.4;
    transition: .5s;
  }
}

.card:hover .card-image {
  transform: translateY(-10%);
  transition: all .9s;
  z-index: 1;

}

.card:hover .details {
  z-index: 2 !important;
  transition: all .9s;
}

/**** Social Icons *****/

.social-icons {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  display: flex;

  li {
    list-style: none;

    a {
      display: flex !important;
      justify-content: center;
      align-items: center;
      margin: 0 5px;
      position: relative;
      display: block;
      width: 30px;
      height: 30px;

      background: #fff;
      font-size: 1rem;
      color: #333;
      transition: .4s;
      transform: translateY(200px);
      opacity: 0;
    }
  }
}

.card:hover .social-icons li a {
  transform: translateY(0px);
  opacity: 1;

}

.social-icons li a:hover {
  background: #000;
  transition: .2s;

  .fab {
    color: #fff;
  }
}

.social-icons li a .fab {
  transition: .8s;

  &:hover {
    transform: rotateY(360deg);
    color: #fff;
  }
}

.card:hover li:nth-child(1) a {
  transition-delay: 0.1s;
}

.card:hover li:nth-child(2) a {
  transition-delay: 0.2s;
}

.card:hover li:nth-child(3) a {
  transition-delay: 0.3s;
}

.card:hover li:nth-child(4) a {
  transition-delay: 0.4s;
}

/**** Personal Details ****/

.details {
  position: absolute;
  bottom: 0;
  left: 0;
  background: #ffffff;
  width: 100%;
  height: 30%;

  h2 {
    padding: 0;
    text-align: center;

    .job-title {
      font-size: 1rem;
      color: #333;
      font-weight: 400;
    }
  }
}

.profile-two .social-icons li a {
  border-radius: 50%;
}

.card:hover .profile-img--two {
  transform: rotateY(180deg);
}
</style>