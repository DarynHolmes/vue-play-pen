<template>
  <div id="app">
    <grid 
      :data="gridData"
      :columns="gridColumns"
      :filter-key="searchQuery"
      @input="onInput">
    </grid>
  </div>
</template>

<script>
import Grid from './components/Grid'

export default {
  name: 'app',
  components: {
    Grid
  },
  data () {
    return {
      searchQuery: '',
      gridColumns: ['name', 'power'],
      gridData: [
        { id: 100, name: 'Chuck Norris', power: Infinity },
        { id: 101, name: 'Bruce Lee', power: 9000 },
        { id: 102, name: 'Jackie Chan', power: 7000 },
        { id: 103, name: 'Jet Li', power: 8000 }
      ]
    }
  },
  methods: {
    onInput (event) {
      const item = this.gridData.find(item => item.id === event.id)
      Object.assign(item, event.value)
      console.log(this.gridData)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
