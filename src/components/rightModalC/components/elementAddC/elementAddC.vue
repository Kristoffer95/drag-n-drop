<template>
  <div class="w-full h-full flex">
    <!-- left -->
    <div class="w-full p-15px overflow-y-scroll">
      <input v-if="this.show_rightModal"
        type="text" placeholder="Search" class="w-full h-51px text-15px text-dark-grey px-20px py-15px bg-lighter-blue rounded">
      <div class="w-full mt-10px">
        <element-group-c v-for="(data, index) in group" :key="index" :group_data="data"></element-group-c>
      </div>
    </div>

    <!-- right -->
    <div class="w-120px h-full bg-light-blue p-10px">
      <span class="text-15px font-semibold">All</span>
      <div class="w-full flex flex-col">
        <span v-for="(data, index) in group" :key="index" class="text-15px font-semibold cursor-pointer py-5px">{{data.title | capitalize}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import elementGroupC from './components/elementGroupC'
import { mapStateVModel } from 'map-state-vmodel'

export default {
  name: 'element-add-c',
  extends: {},
  props: {},
  filters: {
    capitalize(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
  },
  data(){
    return{
      group: [
        { title: 'text', list:[{ name: 'headline', icon: 'icon-add-section', value: '' }, { name: 'sub-headline', icon: 'icon-add-section' }, { name: 'paragraph', icon: 'icon-add-section', value: '' }, { name: 'bullet-list', icon: 'icon-add-section', value: ['list 1', 'list 2', 'list 3'] } ]},
        { title: 'media', list:[{ name: 'headline', icon: 'icon-add-section' }, { name: 'headline', icon: 'icon-add-section' }, { name: 'headline', icon: 'icon-add-section' }, { name: 'headline', icon: 'icon-add-section' }, { name: 'headline', icon: 'icon-add-section' }, ]},
        { title: 'form', list:[{ name: 'headline', icon: 'icon-add-section' }, { name: 'headline', icon: 'icon-add-section' }, { name: 'headline', icon: 'icon-add-section' }, { name: 'headline', icon: 'icon-add-section' }, ]},
        { title: 'form 2', list:[{ name: 'headline', icon: 'icon-add-section' }, { name: 'headline', icon: 'icon-add-section' }, { name: 'headline', icon: 'icon-add-section' }, { name: 'headline', icon: 'icon-add-section' }, ]},
      ]
    };
  },
  watch: {},
  computed: {
    ...mapStateVModel('rightModal', ['show_rightModal', 'button_clicked', 'option_clicked', 'clickOn']),
  },
  methods: {},
  components: {
    'element-group-c' : elementGroupC
  },
  created() {},
  beforeCreate(){},
  mounted(){}
}
</script>
