# nuxt-anime-transitions

## Requirements

Animations are achieved using **[anime.js](https://animejs.com/)**.

### yarn
```bash
$ yarn add animejs
```

### npm
```bash
$ npm i animejs --save
```

## Example Component

Using Vue's `<transition>` component, you can create a component that is responsible for its own transitions for when it is added/removed from the DOM.

### Template

```vue
<template>
  <transition
    :css="false"
    appear
    @enter="show"
    @leave="hide"
  >
    <div>
      ...
    </div>
  </transition>
</template>
```

* The `:css="false"` prop tells Vue not to bother with adding/removing transition classes (since you are going to be using anime.js).
    - *This is shorthand for `v-bind:css="false"`.*
* The `appear` prop tells Vue to run the `enter` hook callback when the component is first added to the page.
    - *This is shorthand for `:appear="true"`.*
* The `@enter` and `@leave` events a transition hooks, called by Vue when the component is added/removed from the DOM. You can view all the available hooks [here](https://vuejs.org/v2/guide/transitions.html#JavaScript-Hooks), but you will likely only end up using the two I've shown.
    - *`@enter` is shorthand for `v-on:enter`.*

### Script

```vue
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
```

You can define the callbacks for the transition hooks in your component's methods. Both the `enter` and `leave` callbacks are passed two arguments:
1. The child element of the `<transition>` component.
2. A callback function that lets Vue know the transition has finished.

Since you are able to define the name of arguments to whatever you want, it's nice to give them the same name of the properties the `anime` function is expecting (`targets` and `complete`), so you can use [ES6 object literal shorthand syntax](https://eslint.org/docs/rules/object-shorthand).

Some other things to note:
* Note that an array is used for `translateY` to specify the start/end values of the transition – this is essential when you are animating in an element immediately after it is inserted into the DOM.
* Setting `translateZ: 0` forces the browser to use GPU rendering for the transition, resulting in a smoother transition.
* For more details on how to use **anime.js**, check out the [documentation](https://animejs.com/documentation).

## Example Page

In the example page, the `ExampleComponent` has a conditional set based on a data value on the layout. Since `showExampleComponent` is true by default, and `appear` is set on the `<transition>` component, it will animate in when it is mounted.

The button would toggle the value of `showExampleComponent`, and the `ExampleComponent` would transition in/out every time the button was pressed.

## Page Transitions

Page transitions in Nuxt can be quite unintuitive. See [my answer](https://stackoverflow.com/questions/53721442/nuxt-js-page-transitions-leave-never-executing/54759849#54759849) to a Stack Overflow question to get a better understanding on how they work and how they are best implemented. You can also read about them in the Nuxt docs [here](https://nuxtjs.org/api/pages-transition/).

I've included a simple example in `mixins/transition.js`.
