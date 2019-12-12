<template>
  <!-- <div v-if="this.wpSectionEmptys" -->
  <div
    class="w-full flex flex-col justify-center items-center border-2px" :class="this.hover ? 'border-light-green' : 'border-opaque'"
    @mouseenter="onHover" @mouseleave="onLeaveHover" >
    <div class="w-1200px h-42px rounded bg-light-blue border border-darker-blue flex justify-center items-center mt-30px mb-30px">
      <button class="bg-white w-150px h-25px text-10px rounded text-blue-500 text-10px font-bold" @click="addRow">ADD NEW ROW</button>
      <!-- <button v-if="!this.wpSectionEmptys" class="bg-white w-150px h-25px text-10px rounded text-blue-500 text-10px font-bold" @click="addElement">ADD ELEMENT</button> -->
    </div>
    <!-- GET BACK HERE WHEN "SECTION, ROW, COLUMN" DESIGNES ARE DONE -->
    <!-- {{wpSections}} -->
    <!-- <component :is="row" v-for="(row, index) in row_array" :key="index"></component> -->
    <component :row_data="row"
      :is="row.component_name" v-for="(row, index) in wpSections" :key="index">
    </component>
    
  </div>
</template>

<script>
import { mapStateVModel } from 'map-state-vmodel'

export default {
  name: 'wp-section',
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

    // data actions
    addRow() {
      this.button_clicked = 'rows'
      this.option_clicked = 'Add Row'
      this.show_rightModal = true
      // this.wpSections[0].rows.push({ name: 'row', columns: [] })
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