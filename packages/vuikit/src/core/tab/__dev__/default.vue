<template>
  <div class="uk-padding">

    <h2>Tab</h2>

  </div>
</template>

<script>
import { Tab, TabItem } from '../'

export default {
  components: {
    Tab,
    TabItem
  },
  data: () => ({
    activeTab: ''
  })
}
</script>
