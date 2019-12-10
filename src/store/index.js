import Vue from 'vue';
import Vuex from 'vuex'; Vue.use(Vuex)

// imported modules
import rightModal from './modules/rightModal'
import pageData from './modules/pageData'

export default new Vuex.Store({
  modules: {
    rightModal,
    pageData,
  }
})
