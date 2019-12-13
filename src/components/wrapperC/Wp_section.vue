<template>
  <!-- <div v-if="this.wpSectionEmptys" -->
  <div class="w-full flex flex-col justify-center items-center ">
    <div
      class="w-full flex flex-col justify-center items-center border-2px pt-30px pb-30px" :class="this.hover ? 'border-light-green' : 'border-opaque'"
      @mouseenter="onHover" @mouseleave="onLeaveHover" >

      <!-- Add New Row -->

      <!-- GET BACK HERE WHEN "SECTION, ROW, COLUMN" DESIGNES ARE DONE -->
      <!-- <div 
        v-for="(row, array, index) in section_data" 
        :key="index" :row_data="row">
      </div> -->

      <!-- {{section_data}} -->
      
      <div class="w-full flex flex-col justify-center items-center">
        <!-- {{section_data.component_name}} -->
        <wp-row :row_data="section_data" :index="section_index"></wp-row>
      </div>
      <!-- <component :is="section_data.component_name" :row_data="row" :index="index "></component> -->
      <!-- using the wp-row component -->
      <!-- <component 
        v-for="(row, index) in wpSections" 
        :key="index" :row_data="row" 
        :index="index "
        :is="row.component_name" >
      </component> -->
      
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