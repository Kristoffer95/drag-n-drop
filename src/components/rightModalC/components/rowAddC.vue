<template>
  <div class="w-full pt-30px">
    <!-- <pre>{{this.merge_columns}}</pre> -->
    <draggable class="w-full flex flex-wrap justify-center"
    :value="list_title"
    :sort="false"
    :group="{ name: 'drag_drop-row', pull: 'clone', put: false }"
    >
      <div v-for="(data, index) in list_title" :key="index" class="w-155px h-102px border-2px border-lighter-grey rounded cursor-pointer" 
        :class="[(index % 2 == 0 ? 'mr-10px' : ''), (index > 1 ? 'mt-10px' : '')]"
        @click="addRow(data[0])">
        <div class="w-full h-full flex flex-col sjustify-center items-center">
          <i class="icon-column text-35px mt-10px text-light-grey"></i>
          <span class="text-12px font-semibold text-dark-grey">{{ data[0].title | uppercase }}</span>
          <!-- <span class="text-12px font-semibold text-dark-grey">{{ data[0].title}}</span> -->
        </div>
      </div>
    </draggable>
    <!-- <pre>{{drag_drop}}</pre> -->
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
    const drag_drop = [
        [{ name: 'column', element_list: [] }],
        [{ name: 'column', element_list: [] }, { name: 'column', element_list: [] }],
        [{ name: 'column', element_list: [] }, { name: 'column', element_list: [] }, { name: 'column', element_list: [] }],
        [{ name: 'column', element_list: [] }, { name: 'column', element_list: [] }, { name: 'column', element_list: [] }, { name: 'column', element_list: [] }],
        [{ name: 'column', element_list: [] }, { name: 'column', element_list: [] }, { name: 'column', element_list: [] }, { name: 'column', element_list: [] }, { name: 'column', element_list: [] }],
        [{ name: 'column', element_list: [] }, { name: 'column', element_list: [] }, { name: 'column', element_list: [] }, { name: 'column', element_list: [] }, { name: 'column', element_list: [] }, { name: 'column', element_list: [] }],
        [],
        [],
      ];
    
    let col_count = [
        [{ title: '1 column', list: drag_drop[0] }],
        [{ title: '2 column', list: drag_drop[1] }],
        [{ title: '3 column', list: drag_drop[2] }],
        [{ title: '4 column', list: drag_drop[3] }],
        [{ title: '5 column', list: drag_drop[4] }],
        [{ title: '6 column', list: drag_drop[5] }],
        [{ title: 'left sidebar' }],
        [{ title: 'right sidebar' }],
      ]

    return{
      list_data: drag_drop,
      list_title: col_count
      
    };
  },
  watch: {},
  computed: {
    ...mapStateVModel('pageData', ['wpSections', 'clicked_section']),
    ...mapStateVModel('rightModal', ['show_rightModal', 'button_clicked', 'option_clicked', 'clickOn']),

  },
  methods: {
    addRow(data) {
      this.wpSections[this.clicked_section].row_list.push(data.list)
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
