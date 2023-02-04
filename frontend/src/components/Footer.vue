<template>
<footer class="footer" id="contacts">
  <div class="container">
    <div class="footer__df">
      <div class="footer__left">
        <router-link to="/" class="footer__left_logo">
          <img src="../assets/img/icons/logo-v2.svg" alt="">
          <div class="footer__left_logo_title">WARPLAY.CLOUD</div>
        </router-link>
        <div class="footer__left_title-v1">
          2022. All rights reserved.
        </div>
        <div class="footer__left_title-v2">
          Design by desart
        </div>
      </div>
      <div class="footer__right">
        <div class="footer__right_title">
          Политика конфиденциальности
        </div>
        <div class="footer__right_title">
          Файлы Coocie
        </div>
        <div class="footer__right_icons">
          <img src="../assets/img/icons/VK.svg" alt="">
          <img src="../assets/img/icons/Discord.svg" alt="">
          <img src="../assets/img/icons/YouTube.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  name: "v-Footer"
}
</script>

<style lang="scss" scoped>
.footer {
  height: 150px;
  background: #171717;
  margin-top: 85px;
  &__df {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 70px;
  }
  &__left {
    display: flex;
    align-items: center;
    gap: 20px;
    &_logo {
      display: flex;
      align-items: center;
      gap: 25px;

      &_title {
        font-family: 'Pulsar-Orginal';
        font-weight: 400;
        font-size: 24px;
        color: #ECECEC
      }
    }
    &_title {
      &-v1 {
        font-family: 'Pulsar-Orginal';
        font-weight: 400;
        font-size: 12px;
        color: #ECECEC
      }
      &-v2 {
        font-family: 'Pulsar-Orginal';
        font-weight: 400;
        font-size: 12px;
        color: #838383
      }
    }
  }
  &__right {
    display: flex;
    align-items: center;
    gap: 51px;

    &_title {
      font-family: 'Roboto';
      font-weight: 200;
      font-size: 12px;
      color: #FFFFFF;
    }
    &_icons {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
}
</style>