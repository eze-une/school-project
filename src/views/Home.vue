<template>
  <div class="home">
<<<<<<< HEAD
    <HeroPage />
    <Footer />
=======
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
>>>>>>> 5fa7dadf1b836dfa17b8001bb0dc163fed64d2c7
  </div>
</template>

<script>
// @ is an alias to /src
<<<<<<< HEAD
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
=======
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
>>>>>>> 5fa7dadf1b836dfa17b8001bb0dc163fed64d2c7
