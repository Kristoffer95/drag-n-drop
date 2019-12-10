<template>
  <div class="w-full flex flex-wrap justify-center pt-30px">
    <div v-for="(data, index) in section_sizes" :key="index" class="w-155px h-102px border-2px border-lighter-grey rounded cursor-pointer" 
      :class="[(index % 2 == 0 ? 'mr-10px' : ''), (index > 1 ? 'mt-10px' : '')]">
      <div class="w-full h-full flex flex-col sjustify-center items-center">
        <i class="text-35px icon-add-section mt-10px text-light-grey"></i>
        <span class="text-12px font-semibold text-dark-grey">{{ data.name | uppercase }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'secion-add-c',
  extends: {},
  props: {},
  filters: {
    uppercase(value) {
      if (!value) return ''
      value = value.toString()
      return value.toUpperCase()
    },
  },
  data(){
    return{
      section_sizes: [
        { name: 'full width' },
        { name: 'wide' },
        { name: 'medium' },
        { name: 'small' },
      ]
    };
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
