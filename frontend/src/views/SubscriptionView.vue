<template>
  <Header/>
  <main>
    <SubscriptionScreen/>
  </main>
</template>

<script>
import Header from "@/components/Header.vue";
import SubscriptionScreen from "@/components/SubscriptionScreen.vue";

export default {
  name: "SubscriptionView",
  components: {
    Header,
    SubscriptionScreen
  }
}
</script>

<style scoped>
</style>