<template>
  <div class="uk-padding">

    <h1>Nav</h1>

    <vk-grid class="uk-child-width-1-4@m">
      <div>
        <h2>Default</h2>
        <nav-base />
      </div>

      <div>
        <h2>Primary</h2>
        <nav-base type="primary" />
      </div>

      <div>
        <h2>No style</h2>
        <nav-base :type="false" />
      </div>

      <div>
        <h2>Center</h2>
        <nav-base center />
      </div>
    </vk-grid>

  </div>
</template>

<script>
import NavBase from './_nav'

export default {
  components: {
    NavBase
  }
}
</script>
