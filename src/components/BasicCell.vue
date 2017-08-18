<template>
  <div class="outer-cell">
    <div v-if="!hasFocus" tabindex="0"  @focus="onFocus" class="value-cell">{{ text }}</div>
    <input v-else tabindex="0" type="text" @focusout="onFocusOut" :value="text" ref="editor"></input>
  </div>
</template>

<script>
import Vue from 'vue'

// const States = Object.freeze({
//     DEFAULT:  Symbol('default'),
//     SELECT:   Symbol('select'),
//     EDIT:     Symbol('edit')
// });

export default {
  props: {
    text: {
      type: [Number, String],
      required: true
    }
  },
  data () {
    return {
      hasFocus: false
    }
  },
  methods: {
    onFocus () {
      console.log('Focusing...')
      this.hasFocus = true
      Vue.nextTick(() => {
        this.$refs.editor.focus()
      })
    },
    onFocusOut () {
      console.log('Bluring...')
      this.hasFocus = false
    }
  }
}
</script>

<style scoped>
.outer-cell {
  height: 40px;
  width: 200px;
}

.value-cell {
  /* background-color: red; */
  /* padding: 10px 20px;  */
  height: 100%;
  display:flex;
  align-items:center;
  justify-content: center;
}
input {
  text-align: center;
  
  width: 100%;
  height: 100%;
  background-color:  #f9f9f9;

  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
}
</style>

