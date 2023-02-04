<template>
<section class="contacts">
  <div class="container">
    <div class="contacts__heading">
      <div class="contacts__heading_back">
        <img src="../assets/img/icons/Arrow.svg" alt="">
      </div>
      <div class="contacts__heading_title">
        Контакты
      </div>
    </div>
    <div class="contacts__about">
      <img src="../assets/img/icons/VK-v2.svg" alt="">
      <img src="../assets/img/icons/Discord-v2.svg">
      <img src="../assets/img/icons/YouTube-v2.svg" alt="">
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "ContactsScreen"
}
</script>

<style lang="scss" scoped>
.contacts {
  margin-top: 227px;
  &__heading {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 38px;
    margin-bottom: 54px;

    &_title {
      font-family: 'AireExterior';
      font-weight: 400;
      font-size: 48px;
      color: #FFFFFF;
    }
  }
  &__about {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
}
</style>