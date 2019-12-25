<template>
  <div class="w-full h-full">
    <h1>{{ this.section_index }}</h1>
    <h1>{{ this.row_index }}</h1>
    <h1>{{ this.column_index }}</h1>

    <h1>{{this.checkCheck}}</h1>
    <!-- {{this.list_data}} -->
    {{data_value}}

    <div v-for="(data, index) in this.list_data" :key="index">
      <div class="flex flex-row">
        <input v-if="edit_list && edit_list_index === index" type="text" placeholder="Enter here..." 
          v-model="list_data[index]"
          @keyup.enter="save_editList">
            <!-- v-model="list_data[index]" -->
        <span v-else @click="update_editList(index)">{{data}}</span>

        <div class="">
          <i class="icon-trash cursor-pointer ml-10px" ></i>
          <button class="text-red-500 font-semibold ml-10px"
            @click="edit_list = false; edit_list_index === null">Cancel</button>
          <button class="text-blue-500 font-semibold ml-10px" @click="save_editList">save</button>
        </div>
      </div>
    </div>
    <div>
      <input type="text">
      <button>Add List</button>
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
    async update_editList(index){
      await this.update_clickedElementDetail()
      this.edit_list_index = await index
      this.edit_list = await true
    },
    save_editList() {
      // alert(this.checkCheck)
      // if(this.checkCheck) {
        this.data_value.value = this.list_data
        // this.wpSections[this.section_index].row_list[this.row_index][this.column_index].element_list[this.data_index].value = this.list_data
      // }
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
