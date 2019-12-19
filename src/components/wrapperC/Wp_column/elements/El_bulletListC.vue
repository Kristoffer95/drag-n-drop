<template>
  <div class="w-full h-full">
    <!-- <span>{{data_value}}</span> -->

    <ul>
      <li class="cursor-pointer flex flex-row items-center"
        v-for="(data, index) in data_value.value" :key="index">
        <span class="w-6px h-6px bg-black rounded mr-5px"></span>
        <div class="flex flex-col">
          <input type="text" v-if="show_input && list_index === index"
            v-model="data_value.value[index]" v-on-clickaway="save">
          <span v-else
            @click="updateShowInput(index)">{{ data }}</span>
        </div>
      </li>
    </ul>
    <input class=""
      v-if="add_list" ref="newInput" v-on-clickaway="addNewList"
      type="text" v-model="new_list" placeholder="Add list here..." @keyup.enter="addNewList">
    <span class="text-blue-500 cursor-pointer" @click="updateAddList"
      v-if="!add_list" >Add new list</span>
  </div>
</template>

<script>
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
    }
  },
  data(){
    return{
      show_input: false,
      list_index: null,
      add_list: false,
      new_list: ''
    };
  },
  filters: {},
  watch: {},
  computed: {},
  methods: {
    async updateShowInput(index) {
      this.list_index = await index
      await this.save()
    },
    save() {
      this.show_input = !this.show_input
    },
    async addNewList(event) {
      if(this.new_list !== '') await this.data_value.value.push(this.new_list)
      if (!event.key) await this.updateAddList();
      this.new_list = await ''
      if (this.add_list) await this.ref_newInputAutoFocus()
    },
    async updateAddList() {
      this.add_list = await !this.add_list
    },
    async ref_newInputAutoFocus() {
      this.$refs.newInput[0].autofocus = await true;
      // await console.log(this.$refs);
    }
  },
  components: {},
  created() {},
  beforeCreate(){},
  mounted(){}
}
</script>
