<template>
  <div class="w-full flex flex-wrap justify-center pt-30px">
    <div v-for="(data, index) in col_count" :key="index" class="w-155px h-102px border-2px border-lighter-grey rounded cursor-pointer" 
      :class="[(index % 2 == 0 ? 'mr-10px' : ''), (index > 1 ? 'mt-10px' : '')]"
      @click="addRow(data)">
      <div class="w-full h-full flex flex-col sjustify-center items-center">
        <i class="icon-column text-35px mt-10px text-light-grey"></i>
        <span class="text-12px font-semibold text-dark-grey">{{ data.title | uppercase }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStateVModel } from 'map-state-vmodel'

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
      col_count: [
        { component_name: 'wp-row', title: '1 column', list:[{ name: 'columns', element: [] }] },
        { component_name: 'wp-row', title: '2 column', list:[{ name: 'columns', element: [] }, { name: 'columns', element: [] }] },
        { component_name: 'wp-row', title: '3 column', list:[{ name: 'columns', element: [] }, { name: 'columns', element: [] }, { name: 'columns', element: [] }] },
        { component_name: 'wp-row', title: '4 column', list:[{ name: 'columns', element: [] }, { name: 'columns', element: [] }, { name: 'columns', element: [] }, { name: 'columns', element: [] }] },
        { component_name: 'wp-row', title: '5 column', list:[{ name: 'columns', element: [] }, { name: 'columns', element: [] }, { name: 'columns', element: [] }, { name: 'columns', element: [] }, { name: 'columns', element: [] }] },
        { component_name: 'wp-row', title: '6 column', list:[{ name: 'columns', element: [] }, { name: 'columns', element: [] }, { name: 'columns', element: [] }, { name: 'columns', element: [] }, { name: 'columns', element: [] }, { name: 'columns', element: [] }] },
        { component_name: 'wp-row', title: 'left sidebar' },
        { component_name: 'wp-row', title: 'right sidebar' },
      ]
    };
  },
  watch: {},
  computed: {
    ...mapStateVModel('pageData', ['wpSections']),
    ...mapStateVModel('rightModal', ['show_rightModal', 'button_clicked', 'option_clicked', 'clickOn']),

  },
  methods: {
    addRow(data) {
      this.wpSections.push(data)
      this.show_rightModal = false
    }
  },
  components: {},
  created() {},
  beforeCreate(){},
  mounted(){}
}
</script>
