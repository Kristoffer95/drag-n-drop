<template>
  <div class="w-full h-full">
    <div v-for="(data, index) in this.data_value.value" :key="index">
      <div class="flex flex-row">
        <input v-if="edit_list && edit_list_index === index" type="text" placeholder="Enter here..." 
          v-model="list_data[index]"
          @keyup.enter="save_editList"
          v-on-clickaway="hide_editList">
        <span v-else @click="update_editList(index)">{{data}}</span>

        <div class="" v-if="edit_list && edit_list_index === index">
          <i class="icon-trash cursor-pointer ml-10px" @click="remove_listData(index)"></i>
        </div>
      </div>
    </div>
    <div>
      <input type="text" v-on-clickaway="hide_addListInput"
      v-model="add_list_data" v-if="add_list" @keyup.enter="push_addListData">
      <button @click="update_addList" class="font-semibold text-blue-500">{{ this.add_list ? 'Cancel' : 'Add List'}}</button>
    </div>
    <slot name="delete_icon"></slot>
  </div>
</template> 

<script>
import { mapStateVModel } from 'map-state-vmodel'
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: 'el-bullet-list-c',
  extends: {},
  mixins: [ clickaway ],
  props: {
    data_value: {
      type: Object,
      required: true
    },
    data_index: {
      type: Number,
      required: true
    },
    section_index: {
      type: Number,
      required: true
    },
    row_index: {
      type: Number,
      required: true
    },
    column_index: {
      type: Number,
      required: true
    }
  },
  data(){
    return{
      edit_list: false,
      edit_list_index: null,
      add_list: false,
      add_list_data: '',
      list_data: ['list 1', 'list 2', 'list 3']
    };
  },
  filters: {},
  watch: {
    wpSections() {}
  },
  computed: {
    ...mapStateVModel('pageData', ['wpSections', 'clicked_section', 'clicked_row', 'clicked_column']),
    checkCheck() {
      if (this.clicked_section === this.section_index && this.clicked_row === this.row_index && this.clicked_column === this.column_index) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    // edit_list
    async update_editList(index){
      await this.update_clickedElementDetail()
      this.edit_list_index = await index
      this.edit_list = await true
    },
    async save_editList() {
      await this.wpSections[this.section_index].row_list[this.row_index][this.column_index].element_list.splice(this.data_index, 1, {
        "name" : "bullet-list",
        "icon" : "icon-add-section",
        "value" : this.list_data
      })
      await this.hide_editList()
    },
    hide_editList() {
      this.edit_list = false
      this.edit_list_index = null
    },
    // add_list
    update_addList() {
      this.add_list = !this.add_list
    },
    hide_addListInput() {
      this.add_list = false
    },
    // add_list_data
    async push_addListData() {
      // alert(this.add_list_data)
      if(this.add_list_data !== '') {
        await this.list_data.push(this.add_list_data)
        await this.save_editList()
        this.add_list_data = await ''
      }
    },
    // list_data
    async remove_listData(index) {
      await this.list_data.splice(index, 1)
      await this.save_editList()
    },
    // pageData.js
    update_clickedElementDetail() {
      this.clicked_section = this.section_index
      this.clicked_row = this.row_index
      this.clicked_column = this.column_index
    }
  },
  components: {},
  created() {},
  beforeCreate(){},
  mounted(){}
}
</script>
