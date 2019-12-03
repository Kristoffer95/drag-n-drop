<template>
  <div class="bg-white w-auto h-10 pl-2 pr-3 flex justify-center items-center cursor-pointer relative" :class="`${this.data.left_boarder ? 'border-l' : ''}`">
    
    <i class="text-gray-700 font-medium text-14" :class="data.icon"></i>
      <!-- {{data.left_boarder}} -->
      <!-- {{}} -->
    <span v-if="data.show_name" class="text-14 font-medium ml-2 text-light-grey">{{data.name | capitalize}}</span>
    <div v-if="data.list.length == 7" class="absolute h-auto w-160px left-0px top-40px flex flex-col shadow-1 rounded bg-white py-8px">
      <li class="list-none py-4px px-24px" v-for="(data, index) in data.list" :key="index">{{data}}</li>
    </div>


    <!-- <div v-if="data.list.length > 0" class="absolute bg-red-500 h-20 w-160 top-40 border-2 border-green-500">
      <li class="list-none" v-for="(data, index) in data.list" :key="index">{{data}}</li>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'cmn_Button',
  props: ["data"],
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<style>

</style>