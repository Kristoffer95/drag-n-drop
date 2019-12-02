<template>
  <!-- body top -->
  <div class="w-auto h-full bg-light-blue flex items-center justify-between px-2">
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
      <div v-for="(data, index) in get_buttonTitles" :key="index">
        <!-- {{data}} -->
        <span class="bg-red-500 mx-2"
        v-for="(inData, inIndex) in data" :key="inIndex">
          {{inData}}
        </span>
      </div>
      <!-- {{get_buttonTitles}} -->
    </div>
    <!-- right -->
    <!-- <div class="w-full h-full bg-red-200 flex items-center justify-between">
      <span class="icon-icon-arrow "></span>
    </div> -->
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
            { name: 'sections', icon: 'icon-section', list: ["Add Section", "Manage"], click: 'show_dropdown', tooltip: 'sections' },
            { name: 'rows', icon: 'burger', list: ["Add Row", "Manage"], click: 'show_dropdown', tooltip: 'rows' },
            { name: 'columns', icon: 'columns', column_list: [{ list: [{ breadcrubs: 'section > 2 column row' }, { title: 'left column', icon1: 'write', icon2: 'eye' }, { title: 'right column', icon1: 'write', icon2: 'eye' },] }], click: 'show_modal', tooltip: 'columns' },
            { name: 'elements', icon: 'elements', list: ["Add Element", "Manage"], tooltip: 'elements' }
          ]
        },
        {
          group: [
            { name: 'preview', icon: 'eye', list: [], click: 'click' },
            { name: 'save', icon: 'save', list: [], click: 'click' }
          ]
        }
      ]
    }
  },
  watch: {},
  computed: {
    // get right navigation button names
    get_buttonTitles() {
      return this.right
        .map(x => x.group.map(group => group.name )) // get name
        // .map((x, i) => i) // get index
    }
  }
}
</script>