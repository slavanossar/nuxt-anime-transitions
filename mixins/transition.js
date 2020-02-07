import anime from 'animejs'

export default {
  transition: {
    appear: true,
    css: false,
    mode: 'out-in',
    enter(targets, complete) {
      anime({
        targets,
        opacity: [0, 1],
        duration: 500,
        easing: 'easeInOutQuad',
        complete
      })
    },
    leave(targets, complete) {
      anime({
        targets,
        opacity: [1 ,0],
        duration: 500,
        easing: 'easeInOutQuad',
        complete
      })
    }
  }
}
