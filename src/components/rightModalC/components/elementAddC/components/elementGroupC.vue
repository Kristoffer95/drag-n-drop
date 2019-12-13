<template>
  <div class="w-full mb-20px">
    <!-- {{group_data.list}} -->
    <div class="w-full mb-10px">
      <span class="text-14px">{{group_data.title | capitalize}}</span>
    </div>
    <div class="w-full flex flex-wrap justify-between ">
      <div v-for="(data, index) in group_data.list" :key="index" @click="addElement(data)"
      class="w-118px h-102px border-2px border-lighter-grey flex flex-col justify-center items-center cursor-pointer"
      :class="[( index > 1 ? 'mt-10px' : '')]">
        <i class="text-30px" :class="data.icon"></i>
        <span class="text-12px text-dark-grey">{{ data.name | uppercase}}</span>
      </div>
    </div>
    {{this.wpSections[0].list[0].element}}
  </div>
</template>

<script>
import {mapStateVModel} from 'map-state-vmodel'

export default {
  name: 'element-type-c',
  extends: {},
  filters: {
    capitalize(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    uppercase(value) {
      if (!value) return ''
      value = value.toString()
      return value.toUpperCase()
    },
  },
  props: {
    group_data: {
      type: Object,
      required: false
    }
  },
  data(){
    return{};
  },
  watch: {},
  computed: {
    ...mapStateVModel('pageData', ['wpSections']),
    ...mapStateVModel('rightModal', ['show_rightModal']),
  },
  methods: {
    async addElement(data) {
      // await this.wpSections[0].list[0].element.push(data)
      // this.show_rightModal = await false
      await alert(this.wpSections[0].list[0].element.push(data))
    }
  },
  components: {},
  created() {},
  beforeCreate(){},
  mounted(){}
}
</script>
