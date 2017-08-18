<template>
  <div class="outer-cell">
    <div v-if="!isEditing" tabindex="0" v-on:keypress="beginEditing" @dblclick="continueEditing" class="value-cell" ref="block">{{ localValue }}</div>
    <input v-else tabindex="0" type="text" @focusout="onFocusout" v-on:keypress.enter="endEditing" v-model="localValue" ref="editor"></input>
  </div>
</template>

<script>
import Vue from 'vue'

const States = Object.freeze({
  DEFAULT: Symbol('default'),
  SELECTED: Symbol('selected'),
  EDITING: Symbol('editing')
})

export default {
  props: {
    value: {
      type: [Number, String],
      required: true
    }
  },
  data () {
    return {
      state: States.DEFAULT,
      localValue: this.value
    }
  },
  computed: {
    isEditing () {
      return this.state === States.EDITING
    }
  },
  methods: {
    onFocusout (event) {
      // console.log(this.localValue)
      this.$emit('input', this.localValue)
      this.state = States.DEFAULT
    },
    beginEditing () {
      console.log('editing')
      this.state = States.EDITING
      this.localValue = ''
      Vue.nextTick(() => {
        this.$refs.editor.focus()
      })
    },
    continueEditing () {
      this.state = States.EDITING
      Vue.nextTick(() => {
        this.$refs.editor.focus()
      })
    },
    endEditing () {
      this.state = States.DEFAULT
      Vue.nextTick(() => {
        this.$refs.block.focus()
      })
    }
  }
}
</script>

<style scoped>
.outer-cell {
  height: 40px;
  width: 200px;
  user-select: none;
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
  color: #444;
  width: 100%;
  height: 100%;
  background-color:  #f9f9f9;
  border: 1px solid;
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
}
</style>

