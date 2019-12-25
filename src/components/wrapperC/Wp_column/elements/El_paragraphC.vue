<template>
  <div class="w-full">
      {{this.data_value}}
    <textarea cols="30" rows="5" class="w-full border-2px border-red-500" 
      v-if="show_input" v-model="headline_value" v-on-clickaway="save"></textarea>
    <p class="text-18px"
      v-else @click="updateShowInput">
      {{headline_value.length === 0 ? 'Write a Paragraph' : headline_value}}
    </p>
    <slot name="delete_icon"></slot>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import { mapStateVModel } from 'map-state-vmodel'

export default {
  name: 'el-paragraph-c',
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
      headline_value: this.data_value.value
    };
  },
  filters: {},
  watch: {},
  computed: {
    ...mapStateVModel('rightModal', ['show_rightModal', 'button_clicked', 'option_clicked', 'clickOn']),
    ...mapStateVModel('pageData', ['wpSections']),
  },
  methods: {
    async save() {
      this.data_value.value = await this.headline_value
      await this.updateShowInput()
    },
    updateShowInput() {
      this.show_input = !this.show_input
    }
  },
  components: {},
  created() {},
  beforeCreate(){},
  mounted(){}
}
</script>
