<template>
  <transition :css="false" appear @enter="show" @leave="hide">
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
    show(targets, complete) {
      anime({
        targets,
        translateY: ['-100%', 0],
        translateZ: 0,
        duration: 1000,
        easing: 'easeOutCubic',
        complete
      })
    },
    hide(targets, complete) {
      anime({
        targets,
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
