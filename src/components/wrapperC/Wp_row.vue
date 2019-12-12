<template>
  <div class="w-full flex justify-between items-center border-2px pt-20px pb-10px"
    :class="hover ? 'border-blue-500' : 'border-opaque'"
    @mouseenter="hoverEnter" @mouseleave="hoverLeave">

    <div class="w-full h-50px border-2px border-red-500"
    v-for="(column, index) in this.columns_array" :key="index">
      
    </div>
    <!-- <h1>This is wp-row</h1> -->
    <!-- {{this.row_data}} -->
    <!-- {{this.columns_array}} -->
  </div>
</template>

<script>
export default {
  name: 'guideC',
  extends: {},
  props: {
    row_data: {
      type: Object,
      required: false
    }
  },
  data(){
    return{
      hover: false
    };
  },
  watch: {
    columns_array() {}
  },
  computed: {
    columns_array() {
      return this.row_data.list
    }
  },
  methods: {
    hoverEnter() {
      this.hover = true
    },
    hoverLeave() {
      this.hover = false
    }
  },
  components: {},
  created() {},
  beforeCreate(){},
  mounted(){}
}
</script>
