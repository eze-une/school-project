<template>
  <div class="sidebar">
    <link
      rel="stylesheet"
      href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons"
    />
    <div class="title">
      <p>SideBar profile goes here</p>
    </div>
    <div class="sidelist">
      <router-link to="/classlist" active-class="active" exact class="button">
        Classes
      </router-link>
      <router-link to="/marklist" active-class="active" exact class="button">
        MarkList
      </router-link>
      <router-link to="/assigments" active-class="active" exact class="button">
        Assigments
      </router-link>
      <router-link to="/submissions" active-class="active" exact class="button">
        Submissions
      </router-link>
      <!-- <router-link to="/classlist" tag="button">
        Teaching Materials
      </router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style scoped>
.sidebar {
  padding: 1rem 0;
  background-color: #fffefe;
  min-height: 60vh;
  color: #311b7e;
  margin-top: 1rem;
  border-radius: 10px;
}
.close {
  padding-right: 1rem;
  text-align: right;
}
#button {
  padding: 8px 16px;
  font-size: 20px;
  margin: 4px 2px;
}
/* #nav a.router-link-exact-active{
        color:#fffefe !important;
    } */
.sidelist {
  display: flex;
  flex-direction: column;
  /* margin: 10px; */
  margin-top: 4rem;
  text-align: left;
}
.button {
  padding: 1rem;
  border-bottom: rgb(170, 170, 170) 0.3px solid;
  /* width: 100%; */
}
.button.active {
  /* background-color: #fffefe;
        color: #4a1cee; */
  outline: solid #fffefe 0.4px;
  color: #fffefe !important;
  background: #301b7e79;
  border-left: 3px #311b7e solid;
}
/* .side-list >*{
        margin-top: 20px;
    } */
</style>
