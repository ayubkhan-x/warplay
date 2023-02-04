<template>
  {{message}}
  <section class="system">
    <div class="container">
    <div class="system__heading">
      <router-link to="/login" class="system__heading_back">
        <img src="../assets/img/icons/Arrow.svg" alt="">
      </router-link>
      <div class="system__heading_title">
        Выберете операционную систему
      </div>
    </div>
    <div class="system__about">
      <img src="../assets/img/icons/Windows.svg" alt="">
      <img src="../assets/img/icons/Mac.svg" alt="">
      <img src="../assets/img/icons/Linux.svg" alt="">
      <img src="../assets/img/icons/Chrome.svg" alt="">
    </div>
  </div>
</section>
</template>

<script>
// import {onMounted, ref} from "vue";

import VueCookies from "vue-cookies";

export default {
  name: "SystemScreen",
  methods: {
    unauthorized() {
      if(VueCookies.get('token')) {
        console.log("ishlayabdi bolam chortimisan dalbayob")
      } else {
        this.$router.push('/login')
      }
    }
  },
  created() {
    this.unauthorized()
  }
}
</script>

<style lang="scss" scoped>
.system {
  margin-top: 314px;
  &__heading {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 71px;

    &_title {
      font-family: 'AireExterior';
      font-weight: 400;
      font-size: 48px;
      color: #FFFFFF;
    }
  }
  &__about {
   margin-top: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 61px;

    img {
      cursor: pointer;
    }
  }
}
</style>