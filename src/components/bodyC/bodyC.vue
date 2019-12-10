<template>
  <div class="w-100 flex flex-col items-center">
    <!-- body section -->
    <div class="w-full flex flex-col justify-center items-center">
      <wp-section></wp-section>
      <!-- <component :is="data.name" v-for="(data, index) in rows" :key="index"></component> -->
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
