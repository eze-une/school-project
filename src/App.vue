<template>
  <div id="nav">
<<<<<<< HEAD
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
=======
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

>>>>>>> 5fa7dadf1b836dfa17b8001bb0dc163fed64d2c7
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
<<<<<<< HEAD
  background-color: #f0f0f0;
}

#nav {
  padding: 0px;
=======
}

#nav {
  padding: 30px;
>>>>>>> 5fa7dadf1b836dfa17b8001bb0dc163fed64d2c7
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
<<<<<<< HEAD
  text-decoration: none;
}
#space{
  margin: 10px;
}
#nav a.router-link-exact-active {
  color: #5934dd;
=======
}

#nav a.router-link-exact-active {
  color: #42b983;
>>>>>>> 5fa7dadf1b836dfa17b8001bb0dc163fed64d2c7
}
</style>
