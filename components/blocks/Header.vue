<template>
    <!-- Start  Header -->
    <div class="row">
        <div class="col-12">
            <div class="height-nav-bar">
                <RegionsNavBar />
            </div>
            <div class="row header-100vh main">
                <div class="position-topik ">
                    <p>ПЕРВАЯ ФРИЛАНС-БИРЖА</p>
                    <p class="">ЭКОЛОГИЧЕСКИХ ПРОЕКТОВ</p>
                    <p>ДЛЯ БИЗНЕСА</p>
                </div>
                <div 
                    class="col-md col-lg col-sm-12 position-relative d-flex flex-column justify-content-end gradient-1 split left">
                    <div height="30%"></div>
                    <div class="flex align-self-center text-center margin h-150 bg-light bg-opacity-50 border border-dark rounded">
                        <p class="p-2">Вы управляете компанией или её владелец?<br>Бухгалтер, менеджер или влиятельный
                            человек?<br>Узнайте, что может дать Вам сервис</p>
                    </div>
                    <div class="mx-auto">
                        <button v-on:mouseenter="enterLeft" id="left" type="button" class="btn btn-white bg-hover-info col1-butt-position">Я заказчик</button>
                    </div>
                    <div class="text-center h-650">
                        <img width="70%" src="public/media/header-component-img/first-col.png" alt="">
                    </div>
                </div>
                <div
                    class="col-md col-lg col-sm-12 position-relative d-flex flex-column justify-content-end align-items-end gradient-2 split right">
                    <div height="30%"></div>
                    <div class="align-self-center text-center pd-3 bg-light bg-opacity-50 border border-dark rounded">
                        <p class=" p-3">Вы инженер-эколог или проектировщик?<br>Узнайте, как присоединиться к нам</p>
                    </div>
                    <div class="text-end mx-auto">
                        <button type="button" class="btn btn-white bg-hover-info col2-butt-position">Я исполнитель</button>
                    </div>
                    <div class="text-start overflow-hidden  h-650">
                        <img width="45%" src="public/media/header-component-img/r-col.cdr.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End component Header -->
   
</template>
<script>
    export default {
        el: '#left',
        data() {
            console.log('?');
            
        },
        methods: {
            enterLeft: function (event) {
                console.log('?');
            }
        },
    }
// export default {
    

//     },
//     methods: {
//         enterLeft: function (event) {
//             content.classList.add('hoverLeft');
//         }

//     }
//     // mounted() {
//     //     left.addEventListener('mouseenter', () => {
//     //     })

//     //     left.addEventListener('mouseleave', () => {
//     //         content.classList.remove('hoverLeft');
//     //     })

//     //     right.addEventListener('mouseenter', () => {
//     //         content.classList.add('hoverRight');
//     //     })

//     //     right.addEventListener('mouseleave', () => {
//     //         content.classList.remove('hoverRight');
//     //     })
//     // }
// }




</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');

/* 1-block header */

* {
    font-size: 24px;
    font-family: 'Mukta', sans-serif;

}
.offer {
    font-size: 18px !important;
}
.hoverLeft {
    transform: translate(-40%, -50%);
}

.hoverLeft {
    transform: translate(-40%, -50%);
}

.hoverRight {
    transform: translate(-60%, -50%);
}

.hoverRight {
    transform: translate(-45%, -50%);
}

.m0 {
    margin: 0;
    padding: 0;
}

.header-100vh {
    height: 100vh;
}

.img-1 {
    position: absolute;
    bottom: 0;
    left: 25%;
    max-width: 60%;
}


.gradient-1 {
    background: -webkit-linear-gradient(left top, #38b566, #b8e5c9);
    /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(bottom right, #5bc481, #b8e5c9);
    /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(bottom right, #5bc481, #b8e5c9);
    /* For Firefox 3.6 to 15 */
    background: linear-gradient(to bottom right, #38b566, #b8e5c9);
    /* Standard syntax (must be last) */
}

.gradient-2 {
    background: -webkit-linear-gradient(left top, #e3d53c, #e3e33c);
    /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(bottom right, #e3d53c, #e3e33c);
    /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(bottom right, #e3d53c, #e3e33c);
    /* For Firefox 3.6 to 15 */
    background: linear-gradient(to bottom left, #bebe07, #f4ee9b);
    /* Standard syntax (must be last) */
}

.h1-1col-position {
    position: absolute;
    top: 20%;
    left: 10%;
}

.h1-2col-position {
    position: absolute;
    top: 20%;
    right: 10%;
}





.col2-butt-position::before {
    content: '';

    position: relative;

}

.position-topik {
    width: 600px;
    position: absolute;
    top: 3%;
    left: 35%;
    z-index: 1;
    padding-top: 10px;
    text-align: center;
    font-weight: 700;

    color: #fff;

    box-sizing: border-box;
    border-radius: 20px;
    border: 1.5px solid black;
    box-shadow: 2px 4px rgb(66, 70, 62);
    background-color: #7239ea;
}

.margin {
    margin-top: 3rem;
    margin-left: 4rem;
}

.height-nav-bar {
    position: absolute;
    width: 100%;
    height: 50px;

    z-index: 2;

}

@media (max-width: 700px) {
    .position-topik {
        top: 5px;
        height: 10%;
        left: 0;
        width: 100vw;
        line-height: 1rem;        
    }

    * {
        font-size: 14px;
    }
}

@media (min-width: 1000px) {
    .h-650 {
        height: 55%;
    }

    .h-150 {
        height: 150px;
    }

    .col1-butt-position {
        position: relative;
        top: 200px;
        right: 300px;
    }

    .col2-butt-position {
        position: relative;
        top: 200px;
        left: 300px;
    }
    .main {
    position: relative;
}

.split {
    position: relative;
    width: 50%;
    height: 100%;
    transition: .8s all cubic-bezier(.87, .76, .33, .98);
    overflow: hidden;
}

.split.left {
    left: 0;
}

.split.right {
    right: 0;
}

.hoverLeft .split.left,
.hoverRight .split.right {
    width: 65%;
}

.hoverLeft .split.right,
.hoverRight .split.left {
    width: 35%;
}

.split.left .fa-chevron-left,
.split.right .fa-chevron-right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.5rem;
    margin: 0 1rem;
}

.split.left .fa-chevron-left {
    right: 0;
}



.hoverLeft .split.right .text {
    margin-left: 3rem;
}

.hoverLeft .split.left .text {
    transform: translate(-40%, -50%);
}

.hoverLeft .split.right .text {
    transform: translate(-40%, -50%);
}

.hoverRight .split.right .text {
    transform: translate(-60%, -50%);
}

.hoverRight .split.left .text {
    transform: translate(-45%, -50%);
}

}

/* style offer 2-block */
.img {
    width: 400px;
}

.custom {
    text-align: left;
    margin: 10px 5px;


    box-sizing: border-box;
    border: 1px solid black;

    border-radius: 10px;

}
.btn-white {
    background-color: #7239ea;
    color: white;
}

/*================Spliter================*/

</style>