<template>
  <div id="app">
    <tailwind/>
    <div class="flex">
      <!-- <button @click="tryMe">Increment</button> -->
      <!-- {{divs}} -->
      <!-- {{checkDivs}} -->
      <!-- {{checkDivs.length}} -->
      <div v-for="(data, index) in divs" :key="index">
        <!-- {{data.name}} -->
        <component :is="data.name"/>
      </div>
    </div>
    <!-- <comp></comp> -->
  </div> 
</template>

<script>
import comp from './components/comp.vue'
import tailwind from './components/tailwind'

export default {
  name: 'sample',
  data() {
    return {
      // count: 0,
      divs: [
        {
          name: 'comp'
        },
        {
          name: 'comp'
        },
        {
          name: 'comp'
        }
      ]
    }
  },
  computed: {
    checkDivs() {
      let array = this.divs.map(obj => obj.name)
      return array
    }
  },
  methods: {
    // tryMe() {
    //   this.count += 1
    // }
  },
  components: {
    comp,
    tailwind
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
