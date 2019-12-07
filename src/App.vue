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
      <!-- {{window._.isEmpty(this.sample)}} -->
      <!-- body -->
      <div class="flex-auto relative">
        <options-nav-c></options-nav-c>
        <div class="w-100 flex flex-col items-center">
          <!-- body section -->
          <div class="w-full flex flex-col justify-center items-center">
            <wp-section></wp-section>
            <!-- <component :is="data.name" v-for="(data, index) in rows" :key="index"></component> -->
          </div>
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

//row components
import './components/wrapperC'   

export default {
  name: 'sample',
  data () {
    return {
      sample: 5,
      // body data "Rows and Columns inside"
      wrapperSection: [
        { name: 'row', columns: [] },
      ]
    }
  },
  computed: {
    ...mapStateVModel('rightModal', ['show_rightModal', 'button_clicked', 'option_clicked', 'clickOn']),
  },
  methods: {
  },
  components: {
    'options-nav-c' : optionsNavC,
    'right-modal-c' : rightModalC,


  },
}
</script>
