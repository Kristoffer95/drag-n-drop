<template>
  <!-- <div v-if="this.wpSectionEmptys" -->
  <div class="w-full h-full flex flex-col justify-center items-center" v-if="wpSections[0].row_list.length > 0">
    <div
      class="w-full h-full flex flex-col justify-center items-center border-2px bg-lighter-grey pt-30px pb-30px" 
      :class="[(this.hover ? 'border-light-green' : 'border-opaque')]"
      @mouseenter="onHover" @mouseleave="onLeaveHover" >
      
      <!-- GET BACK HERE WHEN "SECTION, ROW, COLUMN" DESIGNES ARE DONE -->
            
      <!-- using the wp-row component -->
      <div class="w-full h-full flex flex-col justify-center items-center">
        <wp-row v-for="(row_data, row_index) in this.section_data.row_list" :key="row_index"
        :row_data="row_data" :section_index="section_index" :row_index="row_index"></wp-row>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStateVModel } from 'map-state-vmodel'

export default {
  name: 'wp-section',
  props: {
    section_data: {
      type: Object,
      required: true
    },
    section_index: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      hover: false,
    }
  },
  watch: {
    // wpSectionEmptys() {}
    // row_array() {}
  },
  computed: {
    ...mapStateVModel('pageData', ['wpSections']),
    ...mapStateVModel('rightModal', ['show_rightModal', 'button_clicked', 'option_clicked']),
    // wpSectionEmptys() {
    //   if(this.wpSections[0].rows.length === 0){
    //     return true
    //   } else {
    //     return false
    //   }
    // }
    // row_array() {
    //   return this.wpSections.map(row => row.component_name)
    // }
  },
  methods: {
    onHover() {
      this.hover = true
    },
    onLeaveHover() {
      this.hover = false
    },


    async addElement() {
      this.button_clicked = await 'elements'
      this.option_clicked = await 'Add Element'
      this.show_rightModal = await true
      // this.wpSection[0].columns.push({ name: 'element' })
    }
  }
}
</script>

<style>

</style>