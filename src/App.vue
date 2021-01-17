<template>
  <div class="main">
    <Header />
    <div class="main-content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from './components/Footer.vue';
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header, 
    Footer,
  },
};
</script>
<style lang="scss">
//global imports
@import "./assets/scss/main.scss";
@import "./assets/scss/resets.scss";
</style>
