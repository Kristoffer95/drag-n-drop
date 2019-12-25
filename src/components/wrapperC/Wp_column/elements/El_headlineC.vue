<template>
  <div class="w-full flex flex-col items-center">
    {{data_value}}
    <textarea cols="15" rows="1" type="text" v-if="show_input"
      class="w-full text-35px font-semibold" v-model="headline_value" v-on-clickaway="save"></textarea>
    <h1 class="text-35px font-semibold" v-else
      @click="updateShowInfo">{{ headline_value.length === 0 ? 'Enter Headline here' : headline_value }}</h1>
  <slot name="delete_icon"></slot>

  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: 'headlineElementC',
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
  computed: {},
  methods: {
    updateShowInfo() {
      this.show_input = true
    },
    async save() {
      this.data_value.value = await this.headline_value
      this.show_input = await false
    }
  },
  components: {},
  created() {},
  beforeCreate(){},
  mounted(){}
}
</script>
