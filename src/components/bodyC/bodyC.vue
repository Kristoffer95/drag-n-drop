<template>
  <div class="w-full h-full flex flex-col items-center overflow-y-scroll">
    <!-- body section -->
    <div class="w-full min-h-250px h-full items-center flex flex-col">
      <!-- Cmn_addNewBtn.vue -->
      <div class="w-full flex justify-center border-2px hover:border-green-500 border-opaque"
        v-if="wpSections[0].row_list.length === 0">
        <cmn-add-new-btn class="mt-30px mb-30px" @click_cmn_addNewBtn="addRow" :btn_data="btn_data"></cmn-add-new-btn>
      </div>
      <pre>{{ this.wpSections }}</pre>
    
      <h1>{{ this.clicked_section }}</h1>
      <h1>{{ this.clicked_row }}</h1>
      <h1>{{ this.clicked_column }}</h1>
      <!-- <pre>{{this.wpSections[0].row_list[0][0]}}</pre> -->
      <!-- <pre>{{this.wpSections[0].row_list[0][0].element_list[0]}}</pre> -->

      <div class="w-full" v-for="(section, section_index) in wpSections" :key="section_index" :section_data="section">
        <wp-section :section_data="section" :section_index="section_index"></wp-section>
      </div>
    </div>
  </div>
</template>

<script>
import {mapStateVModel} from 'map-state-vmodel'

export default {
  name: 'body-c',
  extends: {},
  props: {},
  data(){
    return{
      btn_data: { value:'add new row', border_color: 'border-darker-blue', bg_color: 'bg-light-blue', btn_onHover_color: 'bg-blue-500' }
    };
  },
  watch: {
    wpSections() {
      return this.wpSections
    }
  },
  computed: {
    ...mapStateVModel('rightModal', ['show_rightModal', 'button_clicked', 'option_clicked', 'clickOn']),
    ...mapStateVModel('pageData', ['wpSections', 'clicked_section', 'clicked_row', 'clicked_column']),
  },
  methods: {
    // data actions
    addRow() {
      this.button_clicked = 'rows'
      this.option_clicked = 'Add Row'
      this.show_rightModal = true
      // this.wpSections[0].rows.push({ name: 'row', columns: [] })
    },
    update_cmn_addNewBtn() {
      alert('working!!!')
    }
  },
  components: {},
  created() {},
  beforeCreate(){},
  mounted(){}
}
</script>
