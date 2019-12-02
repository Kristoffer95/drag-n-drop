<template>
  <div class="bg-white w-auto h-10 pl-2 pr-3 flex justify-center items-center cursor-pointer" :class="`${this.data.left_boarder ? 'border-l' : ''}`">
      <!-- <i class="icon-arrow-left text-gray-700 font-medium text-sm"></i> -->
      <!-- {{data.left_boarder}} -->
    <span class="text-14 font-medium ml-2 text-light-grey">{{data.name | capitalize}}</span>
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