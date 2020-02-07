<template>
  <div>
    <ExampleComponent
      v-if="showExampleComponent"
    />
    <button
      type="button"
      @click.prevent="showExampleComponent = !showExampleComponent"
    >
      Toggle ExampleComponent
    </button>
  </div>
</template>

<script>
import ExampleComponent from '~/components/ExampleComponent'

import transition from '~/mixins/transition'

export default {
  name: 'ExamplePage',
  components: {
    ExampleComponent
  },
  mixin: [
    transition
  ],
  data() {
    return {
      showExampleComponent: true
    }
  }
}
</script>
