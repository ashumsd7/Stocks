import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stocks: [],
  },
  mutations: {
    addStocksMutation(state, payload) {
      console.log(state.stocks);
      state.stocks.push(payload);
      console.log("after added", state.stocks);
    },
    deleteStocksMutation(state, id) {
      

      console.log(state.stocks.length);
      for (let index in state.stocks) {
        console.log(state.stocks[index].id);
        if (state.stocks[index].id == id) {
          state.stocks.splice(index, 1);
        }
      }
      console.log(state.stocks.length);
    },
    editStocksMutation(state, payload) {
      for (let index in state.stocks) {
        console.log(state.stocks[index].id);
        if (state.stocks[index].id == payload.id) {
          state.stocks.splice(index, 1, payload);
        }
      }
    },
  },
  actions: {
    addStocksAction(context, payload) {
      context.commit("addStocksMutation", payload);
    },
    editStocksAction(context, payload) {
      context.commit("editStocksMutation", payload);
    },
    deleteStocksAction(context, id) {
      console.log("delete id", id);
      context.commit("deleteStocksMutation", id);
    },
  },
  modules: {},
  getters: {
    getStocks(state) {
      console.log("return this stock", state.stocks);
      return state.stocks;
    },
  },
});
