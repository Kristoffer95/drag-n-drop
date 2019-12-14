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
  //     name: 'section',
  //     component_name: 'wp-section',
  //     row_list: [
  //       {
  //         name: 'row',
  //         component_name: 'wp-row',
  //         // rightModal_btn_title: '1 column',
  //         column_list: [
  //           {
  //             name: 'columns',
  //             element: []
  //           },
  //           {
  //             name: 'columns',
  //             element: []
  //           }
  //         ]
  //       },
  //       {
  //         name: 'row',
  //         component_name: 'wp-row',
  //         // rightModal_btn_title: '2 column',
  //         column_list: [
  //           {
  //             name: 'columns',
  //             element: []
  //           }
  //         ]
  //       }
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
  ...createSetters(state)
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
