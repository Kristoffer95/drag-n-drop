<template>
  <div class="w-full pt-30px">
    <draggable class="w-full flex flex-wrap justify-center"
    :value="col_count"
    :sort="false"
    :group="{ name: 'row', pull: 'clone', put: false }"
    >
      <div v-for="(data, index) in col_count" :key="index" class="w-155px h-102px border-2px border-lighter-grey rounded cursor-pointer" 
        :class="[(index % 2 == 0 ? 'mr-10px' : ''), (index > 1 ? 'mt-10px' : '')]"
        @click="addRow(data)">
        <div class="w-full h-full flex flex-col sjustify-center items-center">
          <i class="icon-column text-35px mt-10px text-light-grey"></i>
          <span class="text-12px font-semibold text-dark-grey">{{ data[0].title | uppercase }}</span>
          <!-- <span class="text-12px font-semibold text-dark-grey">{{ data[0].title}}</span> -->
        </div>
      </div>
    </draggable>
  </div>
</template>

<script>
import { mapStateVModel } from 'map-state-vmodel'
import draggable from "vuedraggable";

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
        [{ title: '1 column', list:[{ name: 'column', element_list: [] }] }],
        [{ title: '2 column', list:[{ name: 'column', element_list: [] }, { name: 'column', element_list: [] }] }],
        [{ title: '3 column', list:[{ name: 'column', element_list: [] }, { name: 'column', element_list: [] }, { name: 'column', element_list: [] }] }],
        [{ title: '4 column', list:[{ name: 'column', element_list: [] }, { name: 'column', element_list: [] }, { name: 'column', element_list: [] }, { name: 'column', element_list: [] }] }],
        [{ title: '5 column', list:[{ name: 'column', element_list: [] }, { name: 'column', element_list: [] }, { name: 'column', element_list: [] }, { name: 'column', element_list: [] }, { name: 'column', element_list: [] }] }],
        [{ title: '6 column', list:[{ name: 'column', element_list: [] }, { name: 'column', element_list: [] }, { name: 'column', element_list: [] }, { name: 'column', element_list: [] }, { name: 'column', element_list: [] }, { name: 'column', element_list: [] }] }],
        [{ title: 'left sidebar' }],
        [{ title: 'right sidebar' }],
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
      if(this.wpSections.length === 1) {
      this.wpSections[0].row_list.push(data.list)
      }else{
        // this.wpSections.push(data)
        alert(this.wpSections.length)
      }
      this.show_rightModal = false
    }
  },
  components: {
    draggable,
  },
  created() {},
  beforeCreate(){},
  mounted(){}
}
</script>
