<template>
   <div>
  <b-navbar toggleable="lg" type="light" variant="outline">
    <b-navbar-brand href="#">Stocks</b-navbar-brand>

  
      <b-navbar-nav>
         <router-link to="/" class="mx-3">Home</router-link>
       <router-link to="/add" class="mx-3"> Add Products</router-link>
<router-link to="/view"> View Products</router-link>
      </b-navbar-nav>

     

       

       
      
  </b-navbar>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
div{
  background: rgb(187, 178, 178);
}
</style>