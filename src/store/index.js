import Vue from 'vue';
import Vuex from 'vuex'; Vue.use(Vuex)

// imported modules
import rightModal from './modules/rightModal'

export default new Vuex.Store({
  modules: {
    rightModal,
  }
})
