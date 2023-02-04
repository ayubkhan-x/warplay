<template>
  <section class="first" id="browser">
    <div class="container">
      <div class="first__df">
        <div class="first__left">
          <div class="first__left_title">
            Играть можно в браузере
          </div>
          <div class="first__left_subtitle">
            Запускайте на любых устройствах
          </div>
          <div class="first__left_desc">
            Наш модуль доступен на все популярные ОС
            и работает на всех компьютерах.
          </div>
          <div class="first__left_btn">
            <router-link to="/subscription">
              Открыть в браузере
            </router-link>
          </div>
        </div>
        <div class="first__right">
          <img src="../assets/img/ImageBrowser.png">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BrowserScreen"
}
</script>

<style lang="scss" scoped>
.first {
  margin-bottom: 68px;
  &__df {
    display: flex;
    gap: 22px;
  }

  &__left {
    &_title {
      font-family: 'Roboto';
      font-weight: 300;
      font-size: 16px;
      color: #57D6FF;
      margin-bottom: 25px;
    }

    &_subtitle {
      font-family: 'AireExterior';
      font-weight: 400;
      font-size: 39px;
      color: #FFFFFF;
      margin-bottom: 90px;
    }

    &_desc {
      font-family: 'Roboto';
      font-weight: 300;
      font-size: 21.33px;
      color: #ABABAB;
      margin-bottom: 60px;
    }

    &_btn {
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
}
</style>