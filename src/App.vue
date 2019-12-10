<template>
  <div id="app" class="flex w-screen h-screen relative overflow-x-hidden" :class="{'pointer-events-none' : this.show_rightModal}">
    <!-- Right div -->
    <div class="bg-red-300 w-70px h-screen flex justify-center py-4">
      <img src="@/assets/images/favicon.png" class="h-6 mt-3" alt="">
    </div>
    
    <div class="w-screen relative flex flex-col">
      <!-- header -->
      <header-c></header-c>
      <!-- navigation -->
      <navigation-c></navigation-c>

      <!-- body -->
      <body-c></body-c>
    </div>
    <div class="absolute w-screen h-screen bg-black opacity-25" v-if="this.show_rightModal"></div>
    <right-modal-c class="absolute transition-500 transition-ease"></right-modal-c>
  </div> 
</template>

<script>
// fontello
import './assets/icons/css/fontello.css';

// components
import headerC from '@/components/headerC/headerC'
import bodyC from '@/components/bodyC/bodyC'
import navigationC from '@/components/navigationC/navigationC'
import rightModalC from '@/components/rightModalC/rightModalC'

// vuex
import {mapStateVModel} from 'map-state-vmodel'

//row components
import './components/wrapperC'   

export default {
  name: 'sample',
  data () {
    return {}
  },
  computed: {
    ...mapStateVModel('rightModal', ['show_rightModal', 'button_clicked', 'option_clicked', 'clickOn']),
  },
  methods: {
  },
  components: {

    'header-c' : headerC,
    'body-c' : bodyC,
    'navigation-c' : navigationC,
    'right-modal-c' : rightModalC,


  },
}
</script>
