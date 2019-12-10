<template>
  <div class="w-full flex flex-col justify-center items-center border-2px" :class="this.hover ? 'border-light-green' : 'border-opaque'"
    @mouseenter="onHover" @mouseleave="onLeaveHover" >
    <span class="w-1200px h-42px rounded bg-light-blue border border-darker-blue flex justify-center items-center mt-30px mb-30px">
      <button class="bg-white w-150px h-25px text-10px rounded text-blue-500 text-10px font-bold">ADD NEW ROW</button>
    </span>
  </div>
</template>

<script>
export default {
  name: 'wp-section',
  data() {
    return {
      hover: false
    }
  },
  methods: {
    onHover() {
      this.hover = true
    },
    onLeaveHover() {
      this.hover = false
    }
  }
}
</script>

<style>

</style>