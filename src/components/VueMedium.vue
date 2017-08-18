<template>
    <div contenteditable="true"></div>
</template>

<script>
/* eslint-disable no-new */
import '../../node_modules/medium.js/medium.css'
import Medium from '../../node_modules/medium.js/medium'

export default {
  mounted () {
    console.log('Mounted')
    new Medium({
      element: this.$el,
      mode: Medium.richMode,
      maxLength: 25,
      placeholder: 'Your Title'
    })
    // this.$el.oninput = (e) => {
    //   console.log('oninput the field', e.target.value)
    //   this.$emit('oninput', e.target.value)
    // }
  }
}
</script>

<style scoped>
div {
  background-color: yellow;
}
</style>