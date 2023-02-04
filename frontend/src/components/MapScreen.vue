<template>
<section class="first" id="map">
  <div class="container">
    <div class="first__heading">
      <div class="first__heading_title">
        Игровые сервера на карте
      </div>
      <div class="first__heading_subtitle">
        Карта локаций
      </div>
    </div>
    <div class="first__about">
      <img src="../assets/img/ImageMap.png" alt="" class="first__about_img">
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "MapScreen"
}
</script>

<style lang="scss" scoped>
.first {
  text-align: center;
  &__heading {
    &_title {
      font-family: 'Roboto';
      font-weight: 300;
      font-size: 16px;
      color: #57D6FF;
      margin-bottom: 5px;
    }
    &_subtitle {
      font-family: 'AireExterior';
      font-weight: 400;
      font-size: 39px;
      color: #FFFFFF;
      margin-bottom: 30px;
    }
  }
}
</style>