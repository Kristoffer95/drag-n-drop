<template>
  <!-- body top -->
  <div class="w-auto h-16 bg-light-blue flex items-center justify-between px-4">
    <!-- left -->
    <div class="w-full h-full bg-blue-200 flex items-center justify-between">
      <!-- <cmn-button v-for="(data, index) in right[0].group" :key="index" :data="data"></cmn-button> -->
      <!-- <div v-for="(data, index) in right" :key="index">
        <div v-for="(inData, inArray, inIndex) in data" :key="inIndex">
          <div v-for="(innerData, innerIndex) in inData" :key="innerIndex"> 
            {{innerData}}
          </div>
        </div>
      </div> -->
    </div>

    <!-- right -->
    <div class="w-full h-full bg-red-200 flex justify-end">
      <!-- <span class="icon-icon-arrow "></span> -->
      <div class="flex w-3/4 h-full items-center justify-between">
        <div v-for="(data, index) in get_getRightNav" :key="index" class="flex rounded bg-white overflow-hidden">
          <!-- {{data}} -->
          <span v-for="(inData, inIndex) in data" :key="inIndex" class="">
            <!-- {{inData.name}} -->
            <cmn-button :data="inData"></cmn-button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'optionsNavC',
  data() {
    return {
      // right nav
      right: [
        {
          group: [
            { name: 'sections', icon: 'icon-section', list: ["Add Section", "Manage"], click: 'show_dropdown', tooltip: 'sections', left_boarder: false},
            { name: 'rows', icon: 'burger', list: ["Add Row", "Manage"], click: 'show_dropdown', tooltip: 'rows', left_boarder: false },
            { name: 'columns', icon: 'columns', column_list: [{ list: [{ breadcrubs: 'section > 2 column row' }, { title: 'left column', icon1: 'write', icon2: 'eye' }, { title: 'right column', icon1: 'write', icon2: 'eye' },] }], click: 'show_modal', tooltip: 'columns', left_boarder: true },
            { name: 'elements', icon: 'elements', list: ["Add Element", "Manage"], tooltip: 'elements', left_boarder: true }
          ]
        },
        {
          group: [
            { name: 'preview', icon: 'eye', list: [], click: 'click', left_boarder: false },
            { name: 'save', icon: 'save', list: [], click: 'click', left_boarder: true }
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
    }
  }
}
</script>