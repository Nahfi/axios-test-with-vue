<template>
  <div>
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ data.title }}</h6>
        <p class="card-text">
          {{ data.description }}

          <router-link class="mt-2" to="/post/-NAJP5ZJWtOR7dDf2QZa"
            >go to -NAJP5ZJWtOR7dDf2QZa</router-link
          >
        </p>

        <router-link class="btn btn-danger" to="/post">go back</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "postItem",
  data() {
    return {
      data: "",
    };
  },
  props: ["id"],
  watch: {
    id() {
      console.log("watch called");
      this.getIteam();
    },
  },
  created() {
    this.getIteam();
  },

  methods: {
    getIteam() {
      axios
        .get(
          `https://vue-completecourse.firebaseio.com/posts.json?id=-NAJP5ZJWtOR7dDf2QZa`
        )
        .then((respone) => (this.data = respone.data[this.id]));
    },
  },
};
</script>

<style></style>
