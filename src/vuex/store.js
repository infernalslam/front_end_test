import Vue from 'vue'
import Vuex from 'vuex'

// Make vue aware of Vuex
Vue.use(Vuex)

// Create an object to hold the initial state when
// the app starts up
const state = {
  // TODO: Set up our initial s
  count: 1
}

// Create an object storing various mutations. We will write the mutation
const mutations = {
  // TODO: set up our mutations
  statePage (state, page) {
    state.count = page
    console.log(page)
  }
}

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
  state,
  mutations
})
