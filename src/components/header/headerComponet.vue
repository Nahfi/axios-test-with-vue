<template>
  <div>
      <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                 
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                              <router-link class="nav-item nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
                              <router-link to="/post" class="nav-item nav-link" href="#">Post</router-link>
                              <router-link to="/post/create"  class="nav-item nav-link" href="#">Create Post</router-link>
                              
                        </div>
                  </div>
            </nav>
      </div>
  </div>
</template>

<script>
export default {
      name:"headerComponent"

}
</script>

<style scoped>

</style>