<template>
  <div id="nav">
    <Header />
    <p id="space"></p>

  </div>
</template>
<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f0f0f0;
}

#nav {
  padding: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
#space{
  margin: 10px;
}
#nav a.router-link-exact-active {
  color: #5934dd;
}
</style>
