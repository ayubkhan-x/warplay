<template>
<section class="first" id="sub">
  <div class="container">
    <div class="first__heading">
      <div class="first__heading_title">
        Гибкие тарифы
      </div>
      <div class="first__heading_subtitle">
        Доступные подписки
      </div>
    </div>
    <div class="first__wrap">
      <div class="first__wrap_item">
        <div class="first__wrap_item_title">
          Почасовая <br>
          оплата
        </div>
        <div class="first__wrap_item_price">
          45 р.  -  час
        </div>
        <div class="first__wrap_item_desc">
          Доступно: <br>
          Каталог игр <br>
          Виртуальный ПК <br>
          Безлимитная игровая сессия <br>
        </div>
        <router-link to="/login" class="first__wrap_item_btn">
          Выбрать
        </router-link>
      </div>
      <div class="first__wrap_item">
        <div class="first__wrap_item_title">
          Подписка <br>
          Максимум
        </div>
        <div class="first__wrap_item_price">
          2999 р.  -  месяц
        </div>
        <div class="first__wrap_item_desc">
          Доступно: <br>
          Каталог игр <br>
          Виртуальный ПК <br>
          Игровая сессия 10 часов/день
        </div>
        <router-link to="/login" class="first__wrap_item_btn">
          Выбрать
        </router-link>
      </div>
      <div class="first__wrap_item">
        <div class="first__wrap_item_title">
          Подписка <br>
          Минимум
        </div>
        <div class="first__wrap_item_price">
          1500 р.  -  месяц
        </div>
        <div class="first__wrap_item_desc">
          Доступно: <br>
          Каталог игр <br>
          Виртуальный ПК <br>
          Игровая сессия 10 часов/день
        </div>
        <router-link to="/login" class="first__wrap_item_btn">
          Выбрать
        </router-link>
      </div>
    </div>
    <div class="first__footer"></div>
  </div>
</section>
</template>

<script>
export default {
  name: "SubscriptionScreen",
}
</script>

<style lang="scss" scoped>
.first {
  margin-top: 77px;
  margin-bottom: 245px;
  &__heading {
    text-align: center;
    &_title {
      font-family: 'Roboto';
      font-weight: 300;
      font-size: 16px;
      color: #57D6FF;
      margin-bottom: 15px;
    }
    &_subtitle {
      font-family: 'AireExterior';
      font-weight: 400;
      font-size: 39px;
      color: #FFFFFF;
      margin-bottom: 80px;
    }
  }
  &__wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 90px;
    &_item {
      width: 400px;
      height: 543px;
      background: #1F2631;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 5px;
      padding: 46px 0px 0px 47px;
      cursor: pointer;
      transition: 0.5s ease-out;


      &:hover {
        background: #00C5FF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
      &_title {
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 36px;
        color: #FFFFFF;
        margin-bottom: 15px;
        margin-top: 46px;
      }
      &:hover &_title {
        color: #141C24;
      }
      &_price {
        font-family: 'Roboto';
        font-weight: 500;
        font-size: 24px;
        color: #FFFFFF;
        margin-bottom: 21px;
      }
      &:hover &_price {
        color: #141C24;
      }
      &_desc {
        max-width: 311px;
        font-family: 'Roboto';
        font-weight: 300;
        font-size: 21.33px;
        color: #ABABAB;
      }
      &:hover &_desc {
        color: #141C24;
      }
      &_btn {
        width: 321px;
        height: 70px;
        background: #00C5FF;
        border-radius: 5px;
        font-family: 'AireExterior';
        font-weight: 400;
        font-size: 24px;
        color: #141C24;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 90px;
      }
      &:hover &_btn {
        background: #141C24;
        color: #F1F8FF;
      }
    }
  }
  &__footer {
    width: 582px;
    height: 0px;
    border: 1px solid #00C5FF;
    transform: rotate(180deg);
    margin: 0 auto;
  }
}
</style>