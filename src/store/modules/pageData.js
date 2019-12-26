import { createSetters } from 'map-state-vmodel'

// initial state
const state = {
  // body data "Rows and Columns inside"
  wpSections: [
    {
      name: 'section',
      row_list: []
    }
  ],
  // wpSections: [
  //   {
  //     name: "section",
  //     row_list: [
  //       [
  //         {
  //           name: "column",
  //           element_list: [
  //             {
  //               name: "headline",
  //               icon: "icon-add-section",
  //               value: ""
  //             }
  //           ]
  //         },
  //         {
  //           name: "column",
  //           element_list: [
  //             {
  //               name: "headline",
  //               icon: "icon-add-section",
  //               value: ""
  //             }
  //           ]
  //         }
  //       ]
  //     ]
  //   }
  // ],

  // updated when a specific "element" of a "row" in a "section" is clicked.
  clicked_section: 0,
  clicked_row: 0,
  clicked_column: 0,

};

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
  ...createSetters(state),
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
