<template>
  <!-- <div class="classes">
    <Classescomp />
    <Footer />
  </div> -->
  <div class="clas">
    <div class="sidebar">
      <SideBar />
    </div>
    <div class="content">
      <p class="title">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
        molestias, pariatur quos repudiandae exercitationem fuga commodi sint.
        Incidunt explicabo suscipit tempore quidem accusamus minima maiores,
        molestias qui nostrum beatae,
      </p>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import Footer from '../components/Footer'
// import Classescomp from '../components/Classescomp.vue'
import SideBar from "../components/SideBar";
export default {
  name: "Classes",
  components: {
    // Footer,
    // Classescomp
    SideBar,
  },
};
</script>

<style scoped>
/* .classes{
        background-color: #f0f0f0; 
    }*/

.content {
  background-color: #fffefe;
  margin: 1rem;
}
.title {
  color:#311b7e;
  text-align: center;
  padding: 1rem;
}
.clas {
  display: grid;
  grid-template-columns: 1fr 5fr;
  background-color: #f0f0f0;
}
</style>
