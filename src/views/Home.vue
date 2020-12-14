<template>
  <div class="home">
    <HeroPage />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroPage from '../components/HeroPage'
import Footer from "../components/Footer.vue";
export default {
  name: 'Home',
  components: {
    HeroPage,
    Footer
  }
}
</script>

<style scoped>
  .home{
    background-color: #f0f0f0;
  }
</style>
