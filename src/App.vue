<template>
  <div id="app" class="flex w-screen h-screen relative overflow-x-hidden" :class="{'pointer-events-none' : this.show_rightModal}">
    <!-- Right div -->
    <div class="bg-red-300 w-70px h-screen flex justify-center py-4">
      <!-- <div class="w-12 h-12 bg-white rounded-full">

      </div> -->
      <img src="@/assets/images/favicon.png" class="h-6 mt-3" alt="">
    </div>
    
    <div class="w-screen relative flex flex-col">
      <!-- header -->
      <div class="w-full h-20 bg-white flex justify-between items-center p-4">
        <div><span>Converse store #32</span></div>
        <div class="flex">
          <div class="w-12 h-12 bg-red-500 rounded-full mx-1" v-for="(data, index) in [0,1,2,3]" :key="index"></div>
        </div>
      </div>

      <!-- body -->
      <div class="flex-auto relative">
        <options-nav-c></options-nav-c>
        <div class="w-100 flex flex-col items-center p-30px">
          <span class="w-1200px h-42px rounded bg-light-blue border border-darker-blue flex justify-center items-center">
            <button class="bg-white w-150px h-25px text-10px rounded text-blue-500 text-10px font-bold">ADD NEW ROW</button>
          </span>
        </div>
      </div>
    </div>
    <div class="absolute w-screen h-screen bg-black opacity-25" v-if="this.show_rightModal"></div>
    <right-modal-c class="absolute transition-500 transition-ease"></right-modal-c>
  </div> 
</template>

<script>
// fontello
import './assets/icons/css/fontello.css';

// components
import optionsNavC from '@/components/optionsNav/optionsNavC'
import rightModalC from '@/components/rightModal/rightModalC'

// vuex
import {mapStateVModel} from 'map-state-vmodel'

export default {
  name: 'sample',
  data () {
    return {
      // body data "Rows and Columns inside"
      rows: [
        { name: 'row', columns: 2, columns_data: [{ column_one: [] }, { column_two: [] }] },
        { name: 'row', columns: 1, columns_data: [{ column_one: [] }] },
        { name: 'row', columns: 3, columns_data: [{ column_one: [] }, { column_two: [] }, { column_three: [] }] },
      ]
    }
  },
  components: {
    'options-nav-c' : optionsNavC,
    'right-modal-c' : rightModalC
  },
  computed: {
    ...mapStateVModel('rightModal', ['show_rightModal', 'button_clicked'])
  },
}
</script>
