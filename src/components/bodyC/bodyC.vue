<template>
  <div class="w-full flex flex-col items-center overflow-y-scroll">
    <!-- body section -->
    <div class="w-full flex flex-col justify-center items-center">
      <cmn-add-new-btn class="mt-30px mb-30px"
        @click.native="addRow" :btn_data="btn_data"></cmn-add-new-btn>
      <!-- <pre>{{wpSections}}</pre> -->

      <!-- <div v-for="(section, index) in wpSections" :key="index">
        {{ section }}
      </div> -->
      <!-- <pre>{{ wpSections.map(x => x) }}</pre> -->
      <!-- <wp-section v-for="(section, index) in wpSections" :key="index" :section_data="section"></wp-section> -->
      <div class="w-full"
        v-for="(section, section_index) in wpSections" :key="section_index" :section_data="section">
        <wp-section :section_data="section" :section_index="section_index"></wp-section>
        <!-- {{section}} -->
      </div>
      <!-- <wp-section></wp-section> -->
    </div>
  </div>
</template>

<script>
import {mapStateVModel} from 'map-state-vmodel'

export default {
  name: 'guideC',
  extends: {},
  props: {},
  data(){
    return{
      btn_data: { value:'add new row', border_color: 'border-darker-blue', bg_color: 'bg-light-blue', btn_onHover_color: 'bg-blue-500' }
    };
  },
  watch: {},
  computed: {
    ...mapStateVModel('rightModal', ['show_rightModal', 'button_clicked', 'option_clicked', 'clickOn']),
    ...mapStateVModel('pageData', ['wpSections']),
  },
  methods: {
    // data actions
    addRow() {
      this.button_clicked = 'rows'
      this.option_clicked = 'Add Row'
      this.show_rightModal = true
      // this.wpSections[0].rows.push({ name: 'row', columns: [] })
    },
  },
  components: {},
  created() {},
  beforeCreate(){},
  mounted(){}
}
</script>
