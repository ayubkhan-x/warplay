<template>
<Header/>
<main>
  <MainScreen/>
  <HostScreen/>
  <WorkScreen/>
  <SubscriptionScreen/>
  <BrowserScreen/>
  <MapScreen/>
</main>
<Footer/>
</template>

<script>
import Header from "@/components/Header.vue";
import MainScreen from "@/components/MainScreen.vue";
import HostScreen from "@/components/HostScreen.vue";
import WorkScreen from "@/components/WorkScreen.vue";
import SubscriptionScreen from "@/components/SubscriptionScreen.vue";
import BrowserScreen from "@/components/BrowserScreen.vue";
import MapScreen from "@/components/MapScreen.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "HomeView",
  components: {
    Header,
    MainScreen,
    HostScreen,
    WorkScreen,
    SubscriptionScreen,
    BrowserScreen,
    MapScreen,
    Footer
  }
}
</script>

<style scoped>

</style>