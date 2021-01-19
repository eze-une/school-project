<template>
  <div class="classlist">
    <div class="top">
      <p>Date</p>
      <p>department</p>
      <p>block</p>
      <p>section</p>
    </div>
    <div class="container">
      <div class="content" v-for="(clas, index) in classes" :key="clas.classId">
        <p>{{ clas.date }}</p>
        <p>{{ clas.department }}</p>
        <p>{{ clas.block }}</p>
        <p>{{ clas.section }}</p>
        <p class="del circle" @click="deleteSchedule(index)">
          -
        </p>
      </div>
    </div>
    <div class="addSchedule circle" >
      <p>+</p>
      <div class="add-schedule"><AddSchedule v-on:addSchedule="add_schedule"/></div>
    </div>
  </div>
</template>

<script>
import AddSchedule from '../AddSchedule'
export default {
  name: "ClassList",
  components: {
    AddSchedule 
    },
  data() {
    return {
      classes: [
        {
          classId: 1,
          date: "19/12/23",
          department: "SWE",
          block: "47",
          section: "A",
        },
        {
          classId: 2,
          date: "19/12/23",
          department: "ME",
          block: "42",
          section: "D",
        },
        {
          classId: 3,
          date: "19/12/23",
          department: "SWE",
          block: "47",
          section: "B",
        },
        {
          classId: 4,
          date: "19/12/23",
          department: "EE",
          block: "68",
          section: "C",
        },
      ],
    };
  },
  methods: {
    deleteSchedule: function(index) {
      this.classes.splice(index, 1);
    },
    addSchedule:function(newSchedule){
     this.classes=[...this.classes,newSchedule];
    }
  },
}; 
</script>

<style scoped>
.top {
  display: flex;
  justify-content: space-evenly;
  border: 1px #311b7e solid;
  color: #fffefe;
  background: #311b7e;
}
.content {
  display: flex;
  justify-content: space-evenly;
  background: #e3e3e4;
  border-bottom: 0.1px #787879 solid;
  /* align-content: left; */
}

.circle {
  font-weight: bold;
  width: 30px;
  height: 30px;
  cursor: pointer;
  line-height: 30px;
  border-radius: 50%;
  font-size: 20px;
  color: #fffefe;
  text-align: center;
  background: #311b7e;
  vertical-align: middle;
}
.del.circle {
  color: #311b7e;
  background: #fffefe;
}
.addSchedule.circle{
  line-height: 0px;
  float: right;
  margin: 1rem 4rem;
  color: #fffefe;
  display: table-cell;

}
.container {
  text-align: left;
}

</style>
