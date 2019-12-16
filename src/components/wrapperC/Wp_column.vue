//wpColumn

<template>
  <div class="w-full h-auto border-2px hover:border-orange-500 border-opaque p-20px">
    <cmn-add-new-btn @click_cmn_addNewBtn="addElement" :btn_data="btn_data"></cmn-add-new-btn>
    
    <draggable
    :list="column_data.element_list"
    group="element">
      <div v-for="(data, index) in column_data.element_list" :key="index">
        {{ data }}
      </div>
    </draggable>
    <!-- {{ column_data }} -->
  </div>
</template>

<script>
import { mapStateVModel } from 'map-state-vmodel'
import draggable from "vuedraggable";

export default {
  name: 'wp-column',
  extends: {},
  props: {
    column_data: {
      type: Object,
      required: true
    },
    section_index: {
      type: Number,
      required: true
    },
    row_index: {
      type: Number,
      required: true
    },
    column_index: {
      type: Number,
      required: true
    }
  },
  data(){
    return{
      btn_data: { value:'add new element', border_color: 'border-orange-400', bg_color: 'bg-orange-200', btn_onHover_color: 'bg-orange-500' } 
    };
  },
  filters: {},
  watch: {},
  computed: {
    ...mapStateVModel('rightModal', ['show_rightModal', 'button_clicked', 'option_clicked']),
    ...mapStateVModel('pageData', ['wpSections', 'clicked_section', 'clicked_row', 'clicked_column']),
  },
  methods: {
    // data actions
    async addElement() {
      await this.update_clickedElementDetail()
      this.button_clicked = 'elements'
      this.option_clicked = 'Add Element'
      this.show_rightModal = true
      // this.wpSections[0].rows.push({ name: 'row', columns: [] })
    },
    update_clickedElementDetail() { //pageData.js
      this.clicked_section = this.section_index
      this.clicked_row = this.row_index
      this.clicked_column = this.column_index
    },
  },
  components: {
    draggable,
  },
  created() {},
  beforeCreate(){},
  mounted(){}
}
</script>
