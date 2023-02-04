<template>
<section class="first" id="work">
  <div class="container">
    <div class="first__heading">
      <div class="first__heading_title">
        Быстрый старт
      </div>
      <div class="first__heading_subtitle">
        Начни играть
      </div>
    </div>
    <div class="first__about">
      <div class="first__about_item">
        <img src="../assets/img/icons/Mail.svg" alt="">
        <span>Cоздайте аккаунт</span>
      </div>
      <div class="first__about_border"></div>
      <div class="first__about_item">
        <img src="../assets/img/icons/Download.svg" alt="">
        <span>Cкачайте модуль</span>
      </div>
      <div class="first__about_border"></div>
      <div class="first__about_item">
        <img src="../assets/img/icons/Library.svg" alt="">
        <span>Выберите тариф</span>
      </div>
      <div class="first__about_border"></div>
      <div class="first__about_item">
        <img src="../assets/img/icons/Apple.svg" alt="">
        <span>Начни играть</span>
      </div>
    </div>
    <div class="first__footer">
      <router-link to="/subscription">
        Начать
      </router-link>
    </div>

  </div>
</section>
</template>

<script>
export default {
  name: "WorkScreen"
}
</script>

<style lang="scss" scoped>
.first {

  &__heading {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &_title {
      font-family: 'Roboto';
      font-weight: 300;
      font-size: 16px;
      color: #57D6FF;
    }
    &_subtitle {
      font-family: 'AireExterior';
      font-weight: 400;
      font-size: 39px;
      color: #FFFFFF;
      margin-top: 15px;
      margin-bottom: 90px;
    }
  }
  &__about {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 45px;
    margin-bottom: 90px;

    &_item {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 12px;
      font-family: 'Roboto';
      font-weight: 300;
      font-size: 21.33px;
      color: #F1F1F1;
    }
    &_border {
      width: 73px;
      height: 0px;
      background: #141C24;
      border: 1px solid #50AFCD;
      transform: rotate(180deg);
    }
  }
  &__footer {
    text-align: center;
    a {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      color: #00C5FF;
      border-bottom: 1px solid #00C5FF;
    }
  }
}
</style>