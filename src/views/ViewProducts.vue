<template>
  <div>
    <h1>View Stocks</h1>
      <b-alert v-if="!isStocks" show variant="info ">No stocks Added</b-alert>
    <router-link to="/add" v-if="!isStocks">
  
      <button class="btn btn-primary">Add Products</button></router-link
    >


  

    <div class="container"  v-else>
      <div class="row">
        <div class="col-lg-4 m-2 myStocks">
          <ul class="m-2">
            <li v-for="stock in stocks" class="my-2 d-flex justify-content-center flex-wrap" :key="stock.id" >
              <ul>
                <li> Name: {{ stock.productName }}</li>
                <li> Price: {{ stock.productPrice }}</li>
                <li> Description: {{ stock.productDescription }}</li>
              </ul>
              <router-link :to="'/edit/' + stock.id">    <button class="btn btn-primary m-2">Edit</button></router-link>
              <button @click="handleDelete(stock.id)" class="btn btn-danger m-2">Delete</button>
            </li>
          </ul>
        </div>
      </div>
    </div>

       <div>
    
  </div>
  </div>
</template>

<script>
export default {
  computed: {
    stocks() {
      return this.$store.getters.getStocks;
    },
     isStocks() {
      return this.$store.getters.getStocks.length;
    },

    editRoute(){

    }
  },
  methods: {
      handleEdit(id){
          
      },
      handleDelete(id){
           this.$store.dispatch('deleteStocksAction',id)
      }
  },
};
</script>

<style scoped>
ul li {
  list-style: none;
  background: rgb(224, 224, 224);
}

</style>