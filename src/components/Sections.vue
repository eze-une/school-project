<template>
  <div class="section">
    <div class="sect">
      <p class="title">ORGANIZE</p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.cdDignissimos
      itaque qui eos suscipit provident corrupti earum amet facilis modi unde
      nulla ducimus dolorem impedit accusamus, vel possimus nihil dolor, minima
      odit illum ullam ex aliquid error ipsa
    </div>
    <div class="sect">
      <p class="title">SIMPLIIFY</p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
      itaque qui eos suscipit provident corrupti earum amet facilis modi unde
      nulla ducimus dolorem impedit accusamus, vel possimus nihil dolor, minima
      odit illum ullam ex aliquid error ipsa.
    </div>
    <div class="sect">
      <p class="title">MANAGE</p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
      itaque qui eos suscipit provident corrupti earum amet facilis modi unde
      nulla ducimus dolorem impedit accusamus, vel possimus nihil dolor, minima
      odit illum ullam ex aliquid error ipsa
    </div>
  </div>
</template>

<script>
export default {
  name: "Sections",
};
</script>

<style scoped>
.section {
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  background-color: #7656e7;
  color: #fffefe;
  height: 50vh;
}
.sect {
  padding: 10px;
  width: 33.3%;
  /* border-left: 1px black solid; */
}
.title {
  font-size: 20px;
  text-decoration-line:underline;
}
</style>