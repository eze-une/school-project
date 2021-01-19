<template>
  <div class="news">
    <div class="newsection">
      <NewsSection v-bind:news="news" />
    </div>
  </div>
</template>

<script>
import NewsSection from "./NewsSection";
export default {
  name: "News",
  components: { NewsSection },
  data() {
    return {
      news: [
        {
          newsnum: "1",
          title: "something happened and posted here right now",
          content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere eos
                    voluptatum ipsa fuga error accusamus qui minus eum, pariatur debitis,
                    delectus dolorum optio rerum sunt a laboriosam. Esse nam deserunt dicta
                    repellendus, recusandae officiis nihil neque, quaerat perferendis quas
                    reiciendis?`,
        },
        {
          newsnum: "2",
          title: "something happened and posted here right now",
          content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere eos
                    voluptatum ipsa fuga error accusamus qui minus eum, pariatur debitis,
                    delectus dolorum optio rerum sunt a laboriosam. Esse nam deserunt dicta
                    repellendus, recusandae officiis nihil neque, quaerat perferendis quas
                    reiciendis?`,
        },
        {
          newsnum: "3",
          title: "something happened and posted here right now",
          content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere eos
                    voluptatum ipsa fuga error accusamus qui minus eum, pariatur debitis,
                    delectus dolorum optio rerum sunt a laboriosam. Esse nam deserunt dicta
                    repellendus, recusandae officiis nihil neque, quaerat perferendis quas
                    reiciendis?`,
        },
      ],
    };
  },
};
</script>

<style scoped>
.news {
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1500px;
  min-height: 60vh;
  margin: 0rem 4.5rem;
  padding: 4rem;
  background-color: #fffefe;
}
</style>
