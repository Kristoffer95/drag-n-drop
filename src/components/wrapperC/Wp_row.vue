<!-- USED in: Wp_section.vue -->
<template>
  <div class="w-full max-w-1200px flex justify-between items-center border-2px pt-20px pb-10px"
    :class="hover ? 'border-blue-500' : 'border-opaque'"
    @mouseenter="hoverEnter" @mouseleave="hoverLeave">
    <h1>Row Index: {{ index }}</h1>

    <div class="w-full h-full border-2px hover:border-orange-500 border-opaque p-20px"
    v-for="(column, index) in this.columns_array" :key="index">
      <h1>Element Index: {{index}}</h1>
      <cmn-add-new-btn @click.native="addElement" :btn_data="btn_data"></cmn-add-new-btn>
    </div>
    <!-- <h1>This is wp-row</h1> -->
    <!-- {{this.row_data}} -->
    <!-- {{this.columns_array}} -->
  </div>
</template>

<script>
import { mapStateVModel } from 'map-state-vmodel'

export default {
  name: 'guideC',
  extends: {},
  props: {
    row_data: {
      type: Object,
      required: false
    },
    index: {
      type: Number,
      required: true
    }
  },
  data(){
    return{
      hover: false,
      btn_data: { value:'add new element', border_color: 'border-orange-400', bg_color: 'bg-orange-200', btn_onHover_color: 'bg-orange-500' } 
    };
  },
  watch: {
    columns_array() {}
  },
  computed: {
    ...mapStateVModel('pageData', ['wpSections']),
    ...mapStateVModel('rightModal', ['show_rightModal', 'button_clicked', 'option_clicked']),
    columns_array() {
      return this.row_data.list
    }
  },
  methods: {
    // data actions
    addElement() {
      this.button_clicked = 'elements'
      this.option_clicked = 'Add Element'
      this.show_rightModal = true
      // this.wpSections[0].rows.push({ name: 'row', columns: [] })
    },

    hoverEnter() {
      this.hover = true
    },
    hoverLeave() {
      this.hover = false
    }
  },
  components: {},
  created() {},
  beforeCreate(){},
  mounted(){}
}
</script>
