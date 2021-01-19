<template>
  <div class="mlistbody">
    <div class="top">
      <p>Name</p>
      <p>15%</p>
      <p>15%</p>
      <p>20%</p>
      <p>50%</p>
    </div>
    <div class="content" v-for="mark in marklist" :key="mark.id">
      <p>{{ mark.name }}</p>
      <p>{{ mark.test1 }}</p>
      <p>{{ mark.test2 }}</p>
      <p>{{ mark.assigment }}</p>
      <p>{{ mark.finals }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MarkList",
  data() {
    return {
      marklist: [
        {
          id: 1,
          name: "Hana",
          test1: "13",
          test2: "14",
          assigment: "19",
          finals: "39"
        },
        {
          id: 2,
          name: "Banana",
          test1: "13",
          test2: "14",
          assigment: "19",
          finals: "39"
        },
      ],
    };
  },
};
</script>

<style scoped>
.top {
  display: flex;
  justify-content: space-evenly;
  border: 1px #311b7e solid;
  color:#fffefe;
  background: #311b7e;
}
.content {
  display: flex;
  justify-content: space-evenly;
  background: #c1c1c2 ;
  border-bottom: 0.1px #787879 solid;
  text-align: left;
}
</style>
