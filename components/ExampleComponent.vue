<template>
  <transition
    appear
    :css="false"
    @enter="show"
    @leave="hide"
  >
    <div>
      I am an example component
    </div>
  </transition>
</template>

<script>
import anime from 'animejs'

export default {
  name: 'ExampleComponent',
  methods: {
    show(el, complete) {
      anime({
        targets: el,
        translateY: ['-100%', 0],
        translateZ: 0,
        duration: 1000,
        easing: 'easeOutCubic',
        complete
      })
    },
    hide(el, complete) {
      anime({
        targets: el,
        translateY: ['-100%', 0],
        translateZ: 0,
        duration: 1000,
        easing: 'easeOutCubic',
        complete
      })
    }
  }
}
</script>
