<template>
  <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
              <form @submit.prevent="formSubmit">
              <div class="form-group">
                <label for="exampleInputEmail1">Title</label>
                <input v-model="title" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter title">
                
              </div>
              <div class="form-group mt-2">
                <label for="exampleInputPassword1">description</label>
                <textarea v-model="description" class="form-control" name="" id="" cols="30" rows="10"></textarea>
              </div>
            
              <button type="submit" class="btn btn-primary mt-3">Submit</button>
          </form>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
      name:"postCreateComponent",
      data(){
        return({
          title:'',
          description:''
        })
      },
      methods:{
         formSubmit(){
          axios.post(`https://vue-completecourse.firebaseio.com/posts.json`,{
            title:this.title,
            description:this.description
          }).then(response=>console.log(response))
          this.$router.push({
            path:'/post'
          })
         }
      }

}
</script>

<style scoped>

</style>