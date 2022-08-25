<template>
  <div class="col-lg-8">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">title</th>
          <th scope="col">description</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in datas" :key="index">
          <td>{{ data.id }}</td>
          <td>{{ data.title }}</td>
          <td>{{ data.description }}</td>
          <td>
            <button
              @click.prevent="showDetails(data.id)"
              type="button"
              class="btn btn-success"
            >
              details
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="col-lg-4">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "postDatas",
  props: {
    datas: Array,
  },
  methods: {
    showDetails(id) {
      this.$router.push({
        path: `/post/${id}`,
      });
    },
  },
};
</script>

<style scoped></style>
