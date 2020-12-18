<template>
  <div class="row">
    <div class="column left">
      <h3>
        A Teacher-student learning organizaing webstie that helps you increase
        your effectivenes and organizatin.
      </h3>
    </div>
    <div class="column right">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        itaque qui eos suscipit provident corrupti earum amet facilis modi unde
        nulla ducimus dolorem impedit accusamus, vel possimus nihil dolor,
        minima odit illum ullam ex aliquid error ipsa. Autem, ipsa? Corrupti
        quod distinctio nulla optio possimus ipsum odio eius laudantium debitis!
      </p>
      <button class="button btn">
        Sign Up
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroPage",
};
</script>

<style scoped>
.row {
  min-height: 60vh;
  margin: 0rem 4.5rem;
  padding: 4rem;
  background-color: #fffefe;
}
.column{
  float:left;
  padding-top: 4rem;
  text-align: left;
}
.column.left{
  width:40%;
  font-size: 20px;
}
.column.right{
  width: 60%;
  float:right;
}
.row:after {
    content: "";
    display: table;
    clear: both;
}
 @media screen and (max-width: 800px) {
    .column.left, .column.right {   
        width: 100%;
        padding: 0;
        }
    }
.button {
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  cursor: pointer;
}
.btn {
  background: #fffefe;
  color: #311b7e;
  border: 1px solid #311b7e;
}
.btn:hover {
  background: #311b7e;
  color: white;
  border-color: #311b7e;
}
</style>