<template>
  <div class="classes">
    <Classescomp />
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer'
import Classescomp from '../components/Classescomp.vue'
export default {
    name: "Classes",
    components:{
        Footer,
        Classescomp
    }
}
</script>

<style scoped>
    .classes{
        background-color: #f0f0f0;
    }
</style>