<template>
  <div class="w-full h-20 bg-white flex justify-between items-center p-4">
    <div><span>Converse store #32</span></div>
    <div class="flex">
      <div class="w-12 h-12 bg-red-500 rounded-full mx-1" v-for="(data, index) in [0,1,2,3]" :key="index"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'guideC',
  extends: {},
  props: {},
  data(){
    return{};
  },
  watch: {},
  computed: {},
  methods: {},
  components: {},
  created() {},
  beforeCreate(){},
  mounted(){}
}
</script>
