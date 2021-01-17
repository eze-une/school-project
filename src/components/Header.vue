<template>
  <nav>
    <ul>
      <li id="logo">
        <router-link to="/">
          TEAMER
        </router-link>
      </li>
      <li>
        <router-link to="/">
          Home
        </router-link>
      </li>
      <li>
        <router-link to="/about">
          About
        </router-link>
      </li>
      <li>
        <router-link to="/classes">
          CLASSES
        </router-link>
      </li>
      <li>
        <router-link to="/news">
          NEWS
        </router-link>
      </li>
      <li>
        <router-link to="/profile">
          PROFILE
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
nav {
  background-color: #f0f0f0;
  box-shadow: 0px 1px 5px #999;
  margin-bottom: 5px;
}
ul {
  display: flex;
  align-items: stretch;
  flex-grow: 1;
}
li {
  display: inline;
  text-align: center;
  &:hover {
    color: #f0f0f0;
    background-color: #e4e4e4;
  }
  a {
    display: inline-block;
    padding: 1rem;
    vertical-align: bottom;
    font-weight: bold;
  }
}
#logo {
  margin-right: auto;
  color: #311b7e;
  a {
    font-size: 1.5rem;
    padding: 0.75rem 1rem;
  }
}
</style>