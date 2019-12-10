<template>
  <div @click="checkAction(data.action, data)" class="bg-white w-auto h-10 pl-2 pr-3 flex justify-center items-center cursor-pointer relative" :class="`${this.data.left_boarder ? 'border-l' : ''}`">
    <i class="text-gray-700 font-medium text-14px" :class="data.icon"></i>
    <span v-if="data.show_name" class="text-14px font-medium ml-2 text-light-grey">{{data.name | capitalize | underscore_to_space }}</span>
    <!-- {{typeof data.list}} -->
    <div v-if="data.list.length > 0 && this.show_dropdown" v-on-clickaway="hideDropdown"  class="absolute h-auto w-160px left-0px top-42px flex flex-col shadow-1 rounded bg-white py-8px">
      <li @click="optionClicked(data.name, inData)" class="list-none py-4px px-24px text-875 font-normal text-light-grey hover:bg-lighter-grey" v-for="(inData, inIndex) in data.list" :key="inIndex">{{inData}}</li>
    </div>
    <!-- {{data.name}} -->

    <!-- <div v-if="data.list.length > 0" class="absolute bg-red-500 h-20 w-160 top-40 border-2 border-green-500">
      <li class="list-none" v-for="(data, index) in data.list" :key="index">{{data}}</li>
    </div> -->
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import { mapStateVModel } from 'map-state-vmodel'
import { isObject } from 'util';

export default {
  name: 'cmn_Button',
  props: ["data"],
  mixins: [ clickaway ],
  data() {
    return {
      show_dropdown: false,
    }
  },
  filters: {
    capitalize(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    underscore_to_space(value) {
      return value.replace(/_/g,' ');
    }
  },
  methods: {
    checkAction(action, data) {
      this[`${action}`](data)
      // alert(data.name)
      // alert(action)
    },
    optionClicked(button, option) {
      this[`${button}`](option, button)
      // alert(button)
    },
    dropdown() {
      this.show_dropdown = !this.show_dropdown
    },
    // Button Click - "METHOD names are ACTION names"
    click(data) {
      if(data.name === 'back') alert("working")
      else alert("not added yet")
    },
    

    // Left Button Options
    settings() {

    },
    pop_up() {
      
    },

    // Right Button Options
    sections(option, button) {
      this.right_modal(option, button)
      // alert(option)
    },
    rows(option, button) {
      this.right_modal(option, button)
    },
    elements(option, button) {
      this.right_modal(option, button)
    },

    // Common methods
    right_modal(option, button) {
      // alert(option.name)
      
      if (isObject(option)) {                    // IF - button has no dropdown
        this.button_clicked = option.name;
        this.option_clicked = ''
        
        this.show_rightModal = true
      } else {                                    // ELSE
        this.button_clicked = button;   // button ex. section
        this.option_clicked = option;   // option ex. Add Section - "dropdown option"
        
        this.show_rightModal = true
      }
    },
    // clickaway
    hideDropdown() {
      this.show_dropdown = false
    },
  },
  computed: {
    ...mapStateVModel('rightModal', ['show_rightModal', 'button_clicked', 'option_clicked'])
  }
}
</script>

<style>

</style>