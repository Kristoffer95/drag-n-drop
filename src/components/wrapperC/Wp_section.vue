<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <div class="relative w-full h-full flex flex-col justify-center items-center border-2px bg-lighter-grey pt-30px pb-30px" 
      :class="[(this.hover ? 'border-light-green' : 'border-opaque')]"
      @mouseenter="onHover" @mouseleave="onLeaveHover" >

      <div class="w-full flex justify-center">
        <cmn-add-new-btn class="mb-30px" @click_cmn_addNewBtn="addRow" :btn_data="btn_data"></cmn-add-new-btn>
      </div>
      <!-- using the wp-row component -->
      <div class="w-full h-full flex flex-col justify-center items-center">
        <draggable class="w-full"
        :list="section_data.row_list"
        group="drag_drop-row">
          <div class="flex flex-col justify-center items-center"
          v-for="(row_data, row_index) in section_data.row_list" :key="row_index">
            <!-- {{row_data}} -->
              <wp-row :row_data="row_data" :section_index="section_index" :row_index="row_index"></wp-row>
          </div>
        </draggable>
      </div>

      <div class="absolute top-0 right-0 bg-green-500" v-if="hover && this.section_index > 0">
        <i class="icon-trash text-white cursor-pointer" @click="removeSection"></i>  
      </div>
    </div>
  </div>
</template>

<script>
import { mapStateVModel } from 'map-state-vmodel'
import draggable from "vuedraggable";

export default {
  name: 'wp-section',
  props: {
    section_data: {
      type: Object,
      required: true
    },
    section_index: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      btn_data: { value:'add new row', border_color: 'border-darker-blue', bg_color: 'bg-light-blue', btn_onHover_color: 'bg-blue-500' },
      hover: false,
    }
  },
  watch: {
  },
  computed: {
    ...mapStateVModel('pageData', ['wpSections', 'clicked_section',]),
    ...mapStateVModel('rightModal', ['show_rightModal', 'button_clicked', 'option_clicked']),
  },
  methods: {
    onHover() {
      this.hover = true
    },
    onLeaveHover() {
      this.hover = false
    },
    async addRow() {
      this.clicked_section = await this.section_index
      this.button_clicked = await 'rows'
      this.option_clicked = await 'Add Row'
      this.show_rightModal = await true
    },
    removeSection() {
      this.wpSections.splice(this.section_index, 1)
    }
  },
  components: {
    draggable,
  }
}
</script>

<style>

</style>