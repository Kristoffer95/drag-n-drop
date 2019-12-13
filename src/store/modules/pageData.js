import { createSetters } from 'map-state-vmodel'

// initial state
const state = {
  // body data "Rows and Columns inside"
  // wpSections: [  
  //   {
  //     "component_name": "wp-row",
  //     "title": "1 column",
  //     "list": [ 
  //       {
  //         "name": "columns",
  //         "element": []
  //       }
  //     ]
  //   },
  // ],
  wpSections: [],
  clicked_section: '', 
  clicked_row: '', 
  clicked_element: '', 

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
