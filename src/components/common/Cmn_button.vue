<template>
  <div @click="checkAction(data.action, data)" class="bg-white w-auto h-10 pl-2 pr-3 flex justify-center items-center cursor-pointer relative" :class="`${this.data.left_boarder ? 'border-l' : ''}`">
    <i class="text-gray-700 font-medium text-14px" :class="data.icon"></i>
    <span v-if="data.show_name" class="text-14px font-medium ml-2 text-light-grey">{{data.name | capitalize}}</span>
    <!-- {{typeof data.list}} -->
    <div v-if="data.list.length > 0 && this.show_dropdown" v-on-clickaway="hide_dropdown"  class="absolute h-auto w-160px left-0px top-42px flex flex-col shadow-1 rounded bg-white py-8px">
      <li class="list-none py-4px px-24px text-875 font-normal text-light-grey hover:bg-lighter-grey" v-for="(inData, inIndex) in data.list" :key="inIndex">{{inData}}</li>
    </div>


    <!-- <div v-if="data.list.length > 0" class="absolute bg-red-500 h-20 w-160 top-40 border-2 border-green-500">
      <li class="list-none" v-for="(data, index) in data.list" :key="index">{{data}}</li>
    </div> -->
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: 'cmn_Button',
  props: ["data"],
  mixins: [ clickaway ],
  data() {
    return {
      show_dropdown: false
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  methods: {
    checkAction(action, data) {
      this[`${action}`](data)
    },
    dropdown() {
      this.show_dropdown = !this.show_dropdown
    },
    click() {
      this.$parent.right_slide = true
      // FIXME - must show right slide 
    },
    modal(data) {
      alert(data.name)
    },

    // clickaway
    hide_dropdown() {
      this.show_dropdown = false
    },
  }
}
</script>

<style>

</style>