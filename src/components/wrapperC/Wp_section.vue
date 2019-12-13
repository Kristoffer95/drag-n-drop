<template>
  <!-- <div v-if="this.wpSectionEmptys" -->
  <div
    class="w-full flex flex-col justify-center items-center border-2px pt-30px pb-30px" :class="this.hover ? 'border-light-green' : 'border-opaque'"
    @mouseenter="onHover" @mouseleave="onLeaveHover" >

    <!-- Add New Row -->
    <cmn-add-new-btn @click.native="addRow" :btn_data="btn_data"></cmn-add-new-btn>

    <!-- GET BACK HERE WHEN "SECTION, ROW, COLUMN" DESIGNES ARE DONE -->
    <!-- {{wpSections}} -->
    
    <!-- using the wp-row component -->
    <component :row_data="row" :index="index"
      :is="row.component_name" v-for="(row, index) in wpSections" :key="index" >}}
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
      btn_data: { value:'add new row', border_color: 'border-darker-blue', bg_color: 'bg-light-blue', btn_onHover_color: 'bg-blue-500' }
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