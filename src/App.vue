<template>
  <div id="app" class="flex w-full h-full relative">
    <!-- Right div -->
    <div class="bg-white w-70px h-screen flex justify-center py-4">
      <!-- <div class="w-12 h-12 bg-white rounded-full">

      </div> -->
      <img src="@/assets/images/favicon.png" class="h-6 mt-3" alt="">
    </div>
    
    <div class="border-2 border-black w-screen relative flex flex-col">
      <!-- header -->
      <div class="w-full h-20 bg-white flex justify-between items-center p-4 border-2 border-blue-500">
        <div><span>Converse store #32</span></div>
        <div class="flex">
          <div class="w-12 h-12 bg-red-500 rounded-full mx-1"></div>
          <div class="w-12 h-12 bg-red-500 rounded-full mx-1"></div>
          <div class="w-12 h-12 bg-red-500 rounded-full mx-1"></div>
          <div class="w-12 h-12 bg-red-500 rounded-full mx-1"></div>
        </div>
      </div>

      <!-- body -->
      <div class="flex-auto relative">
        <options-nav-c></options-nav-c>
      </div>
    </div>
    
  </div> 
</template>

<script>
// fontello
import './assets/icons/css/fontello.css';

// components
import optionsNavC from '@/components/optionsNav/optionsNavC'

export default {
  name: 'sample',
  data () {
    return {}
  },
  components: {
    'options-nav-c' : optionsNavC
  }
}
</script>
