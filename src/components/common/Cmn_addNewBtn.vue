<!-- 
  SAMPLE PROP DATA: 
    btn_data: { value:'add new row', border_color: 'border-darker-blue', bg_color: 'bg-light-blue', btn_onHover_color: 'bg-blue-500' } 
-->

<template>
  <div class="w-full max-w-1200px h-42px rounded border flex justify-center items-center"
    :class="[(btn_data.bg_color ? btn_data.bg_color : ''), (btn_data.border_color ? btn_data.border_color : '')]">

    <button class="bg-white  hover:text-white w-150px h-25px text-11px rounded text-blue-500 text-10px font-bold"
      :class="btn_data.btn_onHover_color ? `hover:${btn_data.btn_onHover_color}` : ''"> {{ btn_data.value | uppercase }} </button>
  </div>
</template>

<script>
export default {
  name: 'cmn-add-new-btn',
  extends: {},
  props: {
    btn_data: {
      type: Object,
      required: true
    }
  },
  data(){
    return{};
  },
  filters: {
    
    uppercase(value) {
      if (!value) return ''
      value = value.toString()
      return value.toUpperCase()
    },
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
