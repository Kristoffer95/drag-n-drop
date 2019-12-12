import { createSetters } from 'map-state-vmodel'

// initial state
const state = {
  // body data "Rows and Columns inside"
  // wpSections: [{ name: 'section', rows: [{ name: 'row', columns: [] }] }],
  // wpSections: [{ name: 'section', rows: [] }],
  wpSections: [],

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
