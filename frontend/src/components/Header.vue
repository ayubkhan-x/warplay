<template>
  <header class="headers" id="header">
    <div class="container">
      <div class="header__df">
        <router-link to="/" class="header__logo">
          <img src="../assets/img/icons/logo.svg" alt="">
          <span class="header__logo_title">WARPLAY.CLOUD</span>
        </router-link>
        <div class="header__menu">
          <ul class="header__menu_nav">
            <li>
              <a href="/#main" class="header__menu_nav_link">
                Главная
              </a>
            </li>
            <li>
              <a href="/#host" class="header__menu_nav_link">
                Сервера
              </a>
            </li>
            <li>
              <a href="/#work" class="header__menu_nav_link">
                Скачать
              </a>
            </li>
            <li>
              <a href="/#browser" class="header__menu_nav_link">
                Открыть в браузере
              </a>
            </li>
            <li>
              <a href="/#sub" class="header__menu_nav_link">
                Цены
              </a>
            </li>
            <li>
              <a href="/#map" class="header__menu_nav_link">
                Тех поддержка
              </a>
            </li>
            <li>
              <a href="/#contacts" class="header__menu_nav_link">
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <header class="header" id="header">
    <div class="container">
      <div class="header__df">
        <router-link to="/" class="header__logo">
          <img src="../assets/img/icons/logo.svg" alt="">
          <span class="header__logo_title">WARPLAY.CLOUD</span>
        </router-link>
        <div class="header__menu">
          <ul class="header__menu_nav">
            <li>
              <a href="/#main" class="header__menu_nav_link">
                Главная
              </a>
            </li>
            <li>
              <a href="/#host" class="header__menu_nav_link">
                Сервера
              </a>
            </li>
            <li>
              <a href="/#work" class="header__menu_nav_link">
                Скачать
              </a>
            </li>
            <li>
              <a href="/#browser" class="header__menu_nav_link">
                Открыть в браузере
              </a>
            </li>
            <li>
              <a href="/#sub" class="header__menu_nav_link">
                Цены
              </a>
            </li>
            <li>
              <a href="/#map" class="header__menu_nav_link">
                Тех поддержка
              </a>
            </li>
            <li>
              <a href="/#contacts" class="header__menu_nav_link">
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "v-Header"
}
</script>

<style lang="scss" scoped>
#header {
  overflow: hidden;
}
.header {
  background: #141C24;
  width: 100%;
  height: 123px;
  position: fixed;
  top: 0;
  width: 100%;

  &__df {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 106px;
    padding-top: 45px;
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: 25px;

    &_title {
      font-family: 'Pulsar-Orginal';
      font-weight: 400;
      font-size: 24px;
      color: #57D6FF;
    }
  }

  &__menu {
    &_nav {
      display: flex;
      align-items: center;
      gap: 46px;

      &_link {
        font-family: 'Roboto';
        font-weight: 300;
        font-size: 16px;
        color: #FFFFFF;
        transition: color 200ms ease-in-out;

        &:hover {
          font-family: 'Roboto';
          font-weight: 400;
          font-size: 16px;
          color: #FFFFFF;
          border-bottom: 1px solid #00C5FF;
        }
      }
    }
  }
}
</style>