import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddProduct from "../views/AddProduct.vue";
import ViewProducts from "../views/ViewProducts.vue";
import EditStock from "../views/EditStock.vue";

Vue.use(VueRouter)

  const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/add",
      name: "AddProduct",
      component: AddProduct,
    },
    {
      path: "/view",
      name: "ViewProducts",
      component: ViewProducts,
    },
    {
      path: "/edit/:id",
      name: "EditStock",
      component: EditStock,
    },
  ];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
