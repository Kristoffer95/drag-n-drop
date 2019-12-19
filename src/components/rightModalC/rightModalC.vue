<template>
    <div class="w-383px h-100_80px transition-100 transition-ease absolute top-80px right-0 bg-white pointer-events-auto" 
      :class="this.show_rightModal ? 'right-0px' : 'right-n433px'" >
      
      <div class="w-35px h-35px bg-lighter-blue absolute left-n35px flex justify-center items-center">
        <p class="cursor-pointer" @click="hide">&#10006;</p>
      </div>
      
      <div class="w-full h-full flex flex-col" v-if="dataReady">
        <div class="w-full h-49px bg-lighter-blue" v-if="result[0].title !== ''">
          <div class="w-full h-full flex justify-center items-center">
            <span class="font-semibold">{{result[0].title}}</span>
          </div>
        </div>

        <div class="w-full h-full relative">
          <column-c v-if="button_clicked === 'columns'"></column-c>
          <section-add-c v-if="button_clicked === 'sections' && option_clicked === 'Add Section'"></section-add-c>
          <section-manage-c v-if="button_clicked === 'sections' && option_clicked === 'Manage'"></section-manage-c>
          <row-add-c v-if="button_clicked === 'rows' && option_clicked === 'Add Row'"></row-add-c>
          <element-add-c v-if="button_clicked === 'elements' && option_clicked === 'Add Element'"></element-add-c>
        </div>
      </div>

    </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import { mapStateVModel } from 'map-state-vmodel'

// components
import sectionAddC from './components/sectionAddC'
import sectionManageC from './components/sectionManageC'
import rowAddC from './components/rowAddC'
import columnC from './components/columnC'
import elementAddC from './components/elementAddC/elementAddC'

export default {
  mixins: [ clickaway ],
  data() {
    return {
      result: '',
      dataReady: false
    }
  },
  watch: {
    async option_clicked() {
      let result = await this.clicked_OptionButton
      this.result = await result
      this.dataReady = await true
    }, 
  },
  computed: {
    ...mapStateVModel('rightModal', ['show_rightModal', 'button_clicked', 'option_clicked', 'clickOn']),
    clicked_OptionButton() {
      let result = this.clickOn.filter(val => val.option === `${this.option_clicked}` && val.button === `${this.button_clicked}`)
      return result
    },
  },
  components: {
    'column-c' : columnC,
    'section-add-c': sectionAddC,
    'section-manage-c': sectionManageC,
    'row-add-c': rowAddC,
    'element-add-c' : elementAddC
  },
  methods: {
    hide() {
      this.show_rightModal = false
    },
  },
}
</script>