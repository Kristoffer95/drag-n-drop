import { createSetters } from 'map-state-vmodel'

// initial state
const state = {
  // body data "Rows and Columns inside"
  wpSection: [
    // { name: 'row', columns: [] },
  ]
};

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
  ...createSetters(state)
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
