<template>
  <section class="first" id="host">
    <div class="container">
      <div class="first__df">
        <div class="first__left">
          <img src="../assets/img/ImageServerHost.png" alt="">
        </div>
        <div class="first__right">
          <div class="first__right_title">
            Облачный гейминг
          </div>
          <div class="first__right_subtitle">
            Как это работает
          </div>
          <div class="first__right_desc">
            Наши сервера запускают игру, и передают
            вам картинку, которой вы можете управлять
            в реальном времени!
          </div>
          <div class="first__right_border"></div>
          <div class="first__right_desc-v2">
            Приложение запустится на ПК с процессором
            от 1.5 GHz , от 1 Gb RAM и доступом в интернет
            от 15 мбит/с
            на всех операционых системах
            Windows 7, 8, 10 MacOS и Linux .
          </div>
          <router-link to="/subscription" class="first__right_download">
            Загрузить
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HostScreen"
}
</script>

<style lang="scss" scoped>
.first {
  margin-top: 140px;
  margin-bottom: 90px;
  &__df {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
  }
  &__right {
    &_title {
      font-family: 'Roboto';
      font-weight: 300;
      font-size: 16px;
      color: #57D6FF;
      margin-bottom: 17px;
    }
    &_subtitle {
      font-family: 'AireExterior';
      font-weight: 400;
      font-size: 39px;
      color: #FFFFFF;
      margin-bottom: 60px;
    }
    &_desc {
      max-width: 480px;
      font-family: 'Roboto';
      font-weight: 300;
      font-size: 21.33px;
      color: #ABABAB;
      margin-bottom: 27px;
    }
    &_border {
      width: 271px;
      height: 0px;
      border: 0.5px solid rgba(255, 255, 255, 0.2);
      transform: rotate(180deg);
      margin-bottom: 22px;
    }
    &_desc-v2 {
      max-width: 480px;
      font-family: 'Roboto';
      font-weight: 300;
      font-size: 21.33px;
      color: #ABABAB;
      margin-bottom: 74px;
    }
    &_download {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      color: #00C5FF;
      width: 80px;
      border-bottom: 1px solid #00C5FF;
    }
  }
}
</style>