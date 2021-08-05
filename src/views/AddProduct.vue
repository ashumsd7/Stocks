<template>
    <div>
<h1>Add Stocks</h1>
        <form @submit.prevent="sumbitData">
            <input class="mb-2" required v-model.trim="name" type="text" placeholder="Product Name"> <br>
            <input class="mb-2" required v-model.number="price" placeholder="Product Price" type="number"> <br>
            <textarea class="mb-2" v-model.trim="description" placeholder="Product Description"  type=""/> <br>
          <button class="btn btn-success"> Submit</button>
        </form>
    </div>
</template>

<script>
    export default {
       
        data() {
            return {
                name:'',
                description:'',
                price:null
            }
        },
        methods: {
            sumbitData(){
                  let dt= new Date()
                let timeStamp= dt.getTime();
                let stocksData={
                    id:timeStamp,
                    productName: this.name,
                    productPrice: this.price,
                    productDescription: this.description


                }
              

                this.$store.dispatch('addStocksAction',stocksData)
                // console.log(stocksData);
                this.$router.push('/view')
            }
        },
    }
</script>

<style scoped>

</style>