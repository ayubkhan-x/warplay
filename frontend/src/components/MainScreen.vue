<template>
  <section class="first" id="main">
    <div class="container">
      <Swiper class="first__wrap mySwiper" :autoplay='{"delay": 2500}'>
        <SwiperSlide class="first__wrap_about swiper__one">
          <div class="first__wrap_about_title">
            Сервис облачного гейминга
          </div>
          <div class="first__wrap_about_subtitle">
            Преврати свое устройство в игровое
          </div>
          <router-link to="/subscription" class="first__wrap_about_btn">
            UPGRADE
          </router-link>
        </SwiperSlide>
        <SwiperSlide class="first__wrap_about swiper__two">
          <div class="first__wrap_about_title">
            Сервис облачного гейминга
          </div>
          <div class="first__wrap_about_subtitle">
            Преврати свое устройство в игровое
          </div>
          <router-link to="/subscription" class="first__wrap_about_btn">
            UPGRADE
          </router-link>
        </SwiperSlide>
        <SwiperSlide class="first__wrap_about swiper__three">
          <div class="first__wrap_about_title">
            Сервис облачного гейминга
          </div>
          <div class="first__wrap_about_subtitle">
            Преврати свое устройство в игровое
          </div>
          <router-link to="/subscription" class="first__wrap_about_btn">
            UPGRADE
          </router-link>
        </SwiperSlide>
        <SwiperSlide class="first__wrap_about swiper__four">
          <div class="first__wrap_about_title">
            Сервис облачного гейминга
          </div>
          <div class="first__wrap_about_subtitle">
            Преврати свое устройство в игровое
          </div>
          <router-link to="/subscription" class="first__wrap_about_btn">
            UPGRADE
          </router-link>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue';
import SwiperCore, {Autoplay, Pagination, Navigation} from "swiper/core";
import "swiper/css";
import "swiper/css/scrollbar";
import {Scrollbar} from "swiper";

SwiperCore.use([Autoplay, Pagination, Navigation]);
export default {
  name: "MainScreen",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Scrollbar],
    };
  },
}
</script>

<style lang="scss" scoped>
.first {
  width: 100%;
  height: 100vh;
  padding: 26px 56px 97px 57px;

  &__wrap {

    &_about {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      &_title {
        font-family: 'Roboto';
        font-weight: 500;
        font-size: 16px;
        color: #FFFFFF;
        margin-bottom: 10px;
        margin-top: 297px;
      }

      &_subtitle {
        font-family: 'AireExterior';
        font-weight: 400;
        font-size: 48px;
        color: #FFFFFF;
        margin-bottom: 97px;
      }

      &_btn {
        width: 251px;
        height: 61px;
        background: #FFFFFF;
        font-family: 'AireExterior';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        color: #000000;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top-right-radius: 40px;
      }
    }
  }
}

.swiper-wrapper {
  display: flex !important;
}

.swiper {
  &__one {
    background-image: url("../assets/img/bg/bg1.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
  }

  &__two {
    background-image: url("../assets/img/bg/bg2.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
  }

  &__three {
    background-image: url("../assets/img/bg/bg3.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
  }

  &__four {
    background-image: url("../assets/img/bg/bg4.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
  }
}
</style>