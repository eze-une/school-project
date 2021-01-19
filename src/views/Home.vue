<template>
  <div class="home">
    <HeroPage />
    <Sections />
    <News />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import News from '../components/News';
import HeroPage from '../components/HeroPage';
import Sections from '../components/Sections';
import Footer from "../components/Footer.vue";
export default {
  name: 'Home',
  components: {
    HeroPage,
    Sections,
    Footer,
    News
  }
}
</script>

<style scoped>
  .home{
    background-color: #f0f0f0;
  }
</style>
