import '../../node_modules/medium.js/medium.css'
import Medium from '../../node_modules/medium.js/medium'

// Register a global custom directive called v-focus
export default {
  /* eslint-disable no-new */
  // When the bound element is inserted into the DOM...
  // twoWay: true,
  inserted (el, binding) {
    // Focus the element
    console.log('inserted the BINDING', binding)
    // console.log('inserted ', binding.value)

    new Medium({
      element: el,
      mode: Medium.richMode,
      maxLength: 25,
      placeholder: 'testing...'
    })
    // medium.value('set inside')
    // medium.element.addEventListener('keyup', event => {
    //   console.log('changed...' + new Date(), event)
    //   // medium.value(event)
    //   // this.set(medium.value)
    //   console.log('updated...')
    // })
  },
  update: function () {
    console.log('updating in the method')
  }
}
