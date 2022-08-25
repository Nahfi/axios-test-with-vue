<template>
  <div>
    <headerComponetVue></headerComponetVue>
    <div class="container">
      <div class="row">
        <div class="col-lg-10">
          <router-view @postPage="postPage"> </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import headerComponetVue from "./components/header/headerComponet.vue";
export default {
  name: "App",
  components: {
    headerComponetVue,
  },
  methods: {
    postPage() {
      console.log("asdas");
      axios
        .post(`https://vue-completecourse.firebaseio.com/posts.json`, {
          title: Math.random().toString(36).substring(2, 7),
          description: Math.random().toString(36).substring(2, 10),
        })
        .then((response) => console.log(response))
        .catch((e) => console.log(e));
      this.$router.push({ path: "/post" });
    },
  },
};
</script>

<style></style>
