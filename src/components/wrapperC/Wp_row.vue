<!-- 
  NOTE: 
    USED in: Wp_section.vue
    comlumn is in here already
-->
<template>
  <div class=" relative w-full h-500px max-w-1200px flex justify-between mb-10px border-0px hover:border-red-500 border-opaque"
    @mouseenter="hoverEnter" @mouseleave="hoverLeave">
    <!-- {{this.row_data}} -->
    

    <!-- column -->
    <div class="w-full h-auto relative"
      :class="[(column_index === 0 ? 'border-2px' : 'border-t-2px border-r-2px border-b-2px'), (hover ? 'border-blue-500' : 'border-opaque')]"
      v-for="(column, column_index) in this.row_data" :key="column_index">
      
      <wp-column :column_data="column" :section_index="section_index" :row_index="row_index" :column_index="column_index"></wp-column>
    </div>

    <div class="absolute top-n23px right-0 bg-blue-500" v-if="hover">
      <i class="icon-trash text-white cursor-pointer" @click="remove_row"></i>
    </div>
  </div>
</template>

<script>
import { mapStateVModel } from 'map-state-vmodel'

export default {
  name: 'wp-row',
  extends: {},
  props: {
    row_data: {
      type: Array,
      required: false
    },
    section_index: {
      type: Number,
      required: true
    },
    row_index: {
      type: Number,
      required: true
    }
  },
  data(){
    return{
      hover: false,
    };
  },
  watch: {},
  computed: {
    ...mapStateVModel('pageData', ['wpSections', 'clicked_section', 'clicked_row', 'clicked_element']),
    ...mapStateVModel('rightModal', ['show_rightModal', 'button_clicked', 'option_clicked']),
  },
  methods: {
    hoverEnter() {
      this.hover = true
    },
    hoverLeave() {
      this.hover = false
    },
    remove_row() {
      this.wpSections[this.section_index].row_list.splice(this.row_index, 1)
    }
  },
  components: {},
  created() {},
  beforeCreate(){},
  mounted(){}
}
</script>
