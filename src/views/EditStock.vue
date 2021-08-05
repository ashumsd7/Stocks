<template>
    <div>
      <form @submit.prevent="sumbitData">
            <input v-model.trim="name" class="m-2" type="text"> <br>
            <input v-model.number="price"  class="m-2" type="number"> <br>
            <textarea v-model.trim="description"  class="m-2" /> <br>
            <Button class="btn btn-primary">Edit</Button>
        </form>
    </div>
</template>

<script>
    export default {
         data() {
            return {
                id:'',
                name:'',
                description:'',
                price:''
            }
        },
       created() {
            console.log("id is", this.$route.params.id)
       },
       beforeMount(){
           console.log("state us", this.$store.getters.getStocks);
        let fecthedData=    this.$store.getters.getStocks.find((val,idx)=>{
               return val.id==this.$route.params.id
           })

           console.log("this is matched" ,fecthedData);
           this.name= fecthedData.productName,
           this.description= fecthedData.productDescription,
           this.price= fecthedData.productPrice
           this.id= fecthedData.id
       },
       methods: {
           sumbitData(){
               let stocksData={
                    id:this.id,
                    productName: this.name,
                    productPrice: this.price,
                    productDescription: this.description


                }
                console.log("going to idit", stocksData);
                 this.$store.dispatch('editStocksAction',stocksData)
                 this.$router.push('/view')
           }
       },
    }
</script>

<style  scoped>

</style>