<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-10">
          <h2>All Post</h2>

          <postTableComponentVue v-show="postData" :datas="posts"></postTableComponentVue>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import postTableComponentVue from "./postTableComponent.vue";
export default {
  name: "postComponent",
  data() {
    return {
      posts: [],
      postData: true,
    };
  },
  components: {
    postTableComponentVue,
  },
  mounted() {
    axios
      .get(`https://vue-completecourse.firebaseio.com/posts.json`)
      .then((response) => this.formateDATA(response.data))
      .catch((e) => console.log(e));
  },
  methods: {
    formateDATA(data) {
      for (let x in data) {
        this.posts.push({ ...data[x], id: x });
      }
      console.log(this.posts);
    },
  },
};
</script>

<style scoped></style>
