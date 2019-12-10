import { createSetters } from 'map-state-vmodel'

// initial state
const state = {
  show_rightModal: false,
  button_clicked: '', // button - "main/nav button"
  option_clicked: '',  // option - "dropdown button"
  clickOn: [
    // button only
    { option: '', button: '', title: ''}, // do not delete! Important during first render
    { option: '', button: 'columns', title: 'Manage Columns'},
    // with options/dropdown
    { option: 'Add Section', button: 'sections', title: 'Add Sections' },
    { option: 'Manage', button: 'sections', title: 'Manage Sections' },
    { option: 'Add Row', button: 'rows', title: 'Add Row',},
    { option: 'Manage', button: 'rows', title: 'Manage Rows' },
    { option: 'Add Element', button: 'elements', title: '' },
    { option: 'Manage', button: 'elements', title: 'Manage Element' },
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
