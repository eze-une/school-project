<template>
  <div class="new">
    <div class="content" v-bind:key="n.newsnum" v-for="n in news">
      <p id="title">{{ n.title }}</p>
      <p id="info">{{ n.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsSection",
  props: ["news"],
};
</script>

<style scoped>
.new {
  display: flex;
  justify-content:center;
  
}
.content {
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 10px;
  margin-top: 20px;
  padding: 20px;
  width: 50%;
  min-height: 60vh;
  background-color:#301b7e62;
  z-index: 1;
  /* box-shadow: 0 4px 8px 0 rgba(99, 98, 98, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
}
.content:hover{
  background: #301b7e;
  color:#fffefe;
  transform: translateY(-3px);
  box-shadow:  0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#title:hover{
  background: #fffefeaf;
}
#title {
  font-size: 20px;
  padding: 30px;
}

</style>
