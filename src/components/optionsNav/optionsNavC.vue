<template>
  <!-- body top -->
  <div class="w-auto h-20 bg-light-blue flex items-center justify-between px-4">
    {{right_slide}}
    <!-- left -->
    <div class="w-full h-full flex items-center">
      <div class="flex h-full items-center justify-between">
        <div v-for="(data, index) in get_getLeftNav" :key="index" class="flex rounded bg-white " :class="`${index > 0 ? 'ml-4' : ''}`">
          <span v-for="(inData, inIndex) in data" :key="inIndex" class="">
            <cmn-button :data="inData"></cmn-button>
          </span>
        </div>
      </div>
    </div>

    <!-- right -->
    <div class="w-full h-full flex justify-end">
      <div class="flex h-full items-center justify-between">
        <div v-for="(data, index) in get_getRightNav" :key="index" class="flex rounded bg-white" :class="`${index > 0 ? 'ml-4' : ''}`">
          <span v-for="(inData, inIndex) in data" :key="inIndex" class="">
            <cmn-button :data="inData"></cmn-button>
            <!-- FIXME - Add border-radius here when index is zero and last index -->
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * UPDATE: "click" to "action"
 */
export default {
  name: 'optionsNavC',
  data() {
    return {
      right_slide: false,
      left: [ // left nav
        {
          group: [
            { name: 'back', icon: 'icon-arrow-left', tooltip: 'back', list: [], action: 'click', left_boarder: false, show_name: false },
          ]
        },
        {
          group: [
            { name: 'desktop', icon: 'icon-desktop', tooltip: 'desktop', list: [], action: 'click', left_boarder: false, show_name: false },
            { name: 'mobile', icon: 'icon-mobile', tooltip: 'mobile', list: [], action: 'click', left_boarder: true, show_name: false },
          ]
        },
        {
          group: [
            { name: 'apps', icon: ' icon-plug', tooltip: 'apps', list: [], action: 'click', left_boarder: false, show_name: false },
            { name: 'settings', icon: 'icon-setting', tooltip: 'settings', list: ["Integrations", "SEO Meta Data", "Tracking Code", "Custom Code", "Background", "Typography", "General"], action: 'dropdown', left_boarder: true, show_name: true },
            { name: 'pop up', icon: 'icon-expand', tooltip: 'pop up', list: ["Show Popup", "Edit Settings"], action: 'dropdown', left_boarder: false, show_name: true },
            { name: 'undo', icon: 'icon-undo', tooltip: 'undo', list: [], action: 'click', left_boarder: true, show_name: false },
            { name: 'redo', icon: 'icon-redo', tooltip: 'redo', list: [], action: 'click', left_boarder: true, show_name: false },
          ]
        },
      ],
      right: [ // right nav
        {
          group: [
            { name: 'sections', icon: 'icon-section', tooltip: 'sections', list: ["Add Section", "Manage"], action: 'dropdown', left_boarder: false, show_name: true },
            { name: 'rows', icon: 'icon-row', tooltip: 'rows', list: ["Add Row", "Manage"], action: 'dropdown', left_boarder: false, show_name: true },
            { name: 'columns', icon: 'icon-column', tooltip: 'columns', list: [], column_list: [{ list: [{ breadcrubs: 'section > 2 column row' }, { title: 'left column', icon1: 'write', icon2: 'eye' }, { title: 'right column', icon1: 'write', icon2: 'eye' },] }], action: 'modal', left_boarder: true, show_name: true },
            { name: 'elements', icon: 'icon-element', tooltip: 'elements', list: ["Add Element", "Manage"], action: 'dropdown', left_boarder: true, show_name: true }
          ]
        },
        {
          group: [
            { name: 'preview', icon: 'icon-eye', tooltip: 'preview', list: [], action: 'click', left_boarder: false, show_name: true },
            { name: 'save', icon: 'icon-disk', tooltip: 'save', list: [], action: 'click', left_boarder: true, show_name: true }
          ]
        }
      ]
    }
  },
  watch: {},
  computed: {
    // get right navigation button names
    get_getRightNav() {
      return this.right
        .map(x => x.group.map(group => group )) // get name
        // .map((x, i) => i) // get index
    },
    // get right navigation button names
    get_getLeftNav() {
      return this.left
        .map(x => x.group.map(group => group )) // get name
        // .map((x, i) => i) // get index
    }
  }
}
</script>