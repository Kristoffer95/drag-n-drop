<template>
  <div class="bg-white w-auto h-10 pl-2 pr-3 flex justify-center items-center cursor-pointer rounded">
    <i class="icon-icon-arrow text-gray-700 font-medium text-sm"></i>
    <span class="text-lg ml-2">{{data.name}}</span>
  </div>
</template>

<script>
export default {
  name: 'cmn_Button',
  props: ["data"]
}
</script>

<style>

</style>