<template>
  <div class="row">
    <div class="leftcolumn">
      <div class="card left">
        <div class="title">
          <h1>profile</h1>
          <h3>X</h3>
        </div>
        <button type="button" class="btn" title="menu">

        </button>
        <button class="btn">
          <router-link to="/classes/classlist">
            Classes
          </router-link>
        </button>
        <!-- <button class="btn">
          Attendence
        </button>
        <button class="btn">
          <router-link to="/classes/marklist">
            Mark List
          </router-link>
        </button>
        <button class="btn">
          <router-link>
          Assigments
          </router-link>
        </button> -->
        <button class="btn">
          Submissions
        </button>
        <button class="btn">
          Teaching material
        </button>
      </div>
    </div>
    <div class="rightcolumn">
      <div class="card">
        <!-- <div><ClassList /></div>
        <div><MarkList /></div> -->
        <router-view>
      </div>
    </div>
  </div>
</template>

<script>
// import ClassList from "./right-column/ClassList";
// import MarkList from "./right-column/MarkList";
export default {
  name: "Classescomp",
  data() {
    return {
      // isActive: true,
      
    };
  },
  // methods: {
  //   toggleClass: function () {
  //     this.isActive = !this.isActive;
  //   },
  // },
};
</script>

<style scoped>
.row {
  margin: 2rem;
  padding-bottom: 10px;
  align-content: center;
  min-height: 100vh;
}
.leftcolumn {
  float: left;
  width: 25%;
  align-items: center;
  /* border-radius: 5px; */
}
.rightcolumn {
  float: left;
  width: 74%;
  padding-left: 10px;
  align-content: center;
}
.card {
  background: #fffefe;
  padding: 20px;
  margin-top: 20px;
  text-align: center;
  border-radius: 4px;
  min-height: 100%;
}
.card.left {
  text-align: left;
  background-color:  #7656e7;
  padding:0%;
  min-height: 100vh;
  border-radius: 0px;
  justify-content:center;
  position: relative;
}
.card.left.title{
  min-height: 30%;
  color:#fffefe;
}
.btn {
  border: none;
  /* border-left: 4px solid #311b7e; */
  border-bottom: 0.1px solid #fffefe;
  color:#fffefe;
  background-color: #311b7e;
  padding: 8px 16px;
  width: 99%;
  text-align: left;
  display: inline-block;
  font-size: 20px;
  margin: 4px 2px;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
}
.btn:hover {
  background: #f0f0f0;
  color: #311b7e;
  border-radius: 4px;
}
/* .clist {
  display: -moz-box;
}
.mlist {
  display: -moz-box;
} */
.display {
  display: flex;
}
.hide {
  display: none;
}
@media screen and (max-width: 800px) {
  .leftcolumn,
  .rightcolumn {
    width: 100%;
    padding: 0;
  }
}
</style>
