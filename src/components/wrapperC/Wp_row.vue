<!-- 
  NOTE: 
    USED in: Wp_section.vue
    comlumn is in here already
-->
<template>
  <div class="w-full h-500px max-w-1200px flex justify-between mb-10px"
    @mouseenter="hoverEnter" @mouseleave="hoverLeave">
    <!-- <h1>This is row</h1> -->
    <!-- <h1>{{row_data}}</h1> -->
    <!-- <h1>Section Index: {{ section_index }}</h1>
    <h1>Row Index: {{ row_index }}</h1> -->
<!-- hover:border-blue-500 border-opaque  -->

    <!-- column -->
    <div class="w-full h-auto"
      :class="[(column_index === 0 ? 'border-2px' : 'border-t-2px border-r-2px border-b-2px'), (hover ? 'border-blue-500' : 'border-opaque')]"
      v-for="(column, column_index) in this.row_data" :key="column_index">
      <!-- {{column}}
      <h1>Section Index: {{ section_index }}</h1>
      <h1>Row Index: {{ row_index }}</h1>
      <h1>Column Index: {{column_index}}</h1> -->

      <wp-column :column_data="column" :section_index="section_index" :row_index="row_index" :column_index="column_index"></wp-column>
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
  watch: {
  },
  computed: {
    ...mapStateVModel('rightModal', ['show_rightModal', 'button_clicked', 'option_clicked']),
    ...mapStateVModel('pageData', ['wpSections', 'clicked_section', 'clicked_row', 'clicked_element']),
  },
  methods: {
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
