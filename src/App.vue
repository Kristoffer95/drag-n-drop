<template>
  <div id="app" class="flex w-full h-full relative">
    <!-- Right div -->
    <div class="bg-white w-70 h-screen flex justify-center py-4">
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
        <!-- body top -->
        <div class="w-auto h-16 bg-light-blue flex items-center justify-between px-2">
          <!-- left -->
          <div class="w-full h-full bg-blue-300 flex items-center justify-between">
            <div class="bg-white w-10 h-10 flex justify-center items-center cursor-pointer">
              <span class="icon-icon-arrow"></span>
            </div>
          </div>
          <!-- right -->
          <div class="w-full h-full bg-red-300 flex items-center justify-between">
              <span class="icon-icon-arrow"></span>
          </div>
        </div>
      </div>
    </div>
    
  </div> 
</template>

<script>
import './assets/icons/css/fontello.css';

export default {
  name: 'sample'
}
</script>
