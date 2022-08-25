<template>
  <div>
      <h2>Home</h2>
      <div class="container">
       <button @click.prevent="postPage">Click and go post page</button>
     </div>
  </div>
</template>

<script>
export default {
      name:"homeComponent",
      methods:{
            postPage(){
                  this.$emit('postPage')
            }
      }

}
</script>

<style scoped>

</style>