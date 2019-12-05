<template>
  <!-- <div class="bg-black-25 transition-100 w-screen h-screen absolute right-0 top-0"> -->
    <div class="w-383px h-100_80px transition-100 transition-ease absolute top-80px right-0 bg-red-500" :class="this.show_rightModal ? 'right-0px' : 'right-n433px'" >
      <!-- v-on-clickaway="hide" -->
    <div class="w-50px h-50px bg-red-500 absolute left-n50px flex justify-center items-center">
      <p class="cursor-pointer" @click="hide">&#10006;</p>
    </div>
      <div class="flex flex-col">
        <span>show_rightModal: {{show_rightModal}}</span>
        <span>button_clicked: {{button_clicked}}</span>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import {mapStateVModel} from 'map-state-vmodel'

export default {
  data() {
    return {}
  },
  mixins: [ clickaway ],
  computed: {
  ...mapStateVModel('rightModal', ['show_rightModal', 'button_clicked'])
  },
  methods: {
    hide() {
      this.show_rightModal = false
    }
  }
}
</script>

<style>

</style>