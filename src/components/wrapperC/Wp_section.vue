<template>
  <!-- <div v-if="this.wpSectionEmpty" -->
  <div
    class="w-full flex flex-col justify-center items-center border-2px" :class="this.hover ? 'border-light-green' : 'border-opaque'"
    @mouseenter="onHover" @mouseleave="onLeaveHover" >
    <div class="w-1200px h-42px rounded bg-light-blue border border-darker-blue flex justify-center items-center mt-30px mb-30px">
      <button v-if="this.wpSectionEmpty" class="bg-white w-150px h-25px text-10px rounded text-blue-500 text-10px font-bold" @click="addRow">ADD NEW ROW</button>
      <button v-if="!this.wpSectionEmpty" class="bg-white w-150px h-25px text-10px rounded text-blue-500 text-10px font-bold" @click="addElement">ADD ELEMENT</button>
    </div>
    {{ wpSection }}
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
    wpSectionEmpty() {}
  },
  computed: {
    ...mapStateVModel('pageData', ['wpSection']),
    ...mapStateVModel('rightModal', ['show_rightModal', 'button_clicked', 'option_clicked']),
    wpSectionEmpty() {
      if(this.wpSection.length === 0){
        return true
      } else {
        return false
      }
    }
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
      this.wpSection.push({ name: 'row', columns: [] })
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