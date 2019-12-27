<template>
  <div class="w-full h-auto border-2px hover:border-orange-500 border-opaque p-20px"
    @mouseenter="hover = true" @mouseleave="hover = false">

    <cmn-add-new-btn @click_cmn_addNewBtn="addElement" :btn_data="btn_data"></cmn-add-new-btn>
    <draggable class=""
    :list="column_data.element_list"
    group="element">
      <div v-for="(data, index) in column_data.element_list" :key="index">
        <!-- element components -->
        <component class="relative border hover:border-red-500 border-opaque"
          @mouseenter.native="element_hover = true" @mouseleave.native="element_hover = false"
          :is="`el-${data.name}-c`" :data_value="data" :data_index="index" :section_index="section_index" :row_index="row_index" :column_index="column_index">
        <div slot="delete_icon" class="absolute top-0 right-0 bg-red-500"
          v-if="element_hover">
          <i class="icon-trash cursor-pointer text-white" @click="deleteElement(index)"></i>
        </div>
        </component>
      </div>
    </draggable>
    <!-- {{ column_data }} -->
  </div>
</template>

<script>
import { mapStateVModel } from 'map-state-vmodel'
import draggable from "vuedraggable";

// column elements
import './Wp_column/elements' 

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
      element_hover: false,
      hover: false,
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
    },
    update_clickedElementDetail() { //pageData.js
      this.clicked_section = this.section_index
      this.clicked_row = this.row_index
      this.clicked_column = this.column_index
    },
    deleteElement(index) {
      // this.wpSections[this.section_index].row_list[this.row_index][0].element_list.splice(index, 1)
      this.wpSections[this.section_index].row_list[this.row_index][this.column_index].element_list.splice(index, 1)
      // console.log(this.wpSections[this.section_index].row_list[0][this.column_index].element_list.splice(index, 1));
      
      // alert(this.column_index)
    }
  },
  components: {
    draggable,
  },
  created() {},
  beforeCreate(){},
  mounted(){}
}
</script>
