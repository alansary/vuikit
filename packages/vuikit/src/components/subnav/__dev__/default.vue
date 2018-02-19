<template>
  <div class="uk-padding">

    <vk-subnav v-model="active">
      <vk-subnav-item title="Item" name="first" />
      <vk-subnav-item title="Item" name="second" />
      <vk-subnav-item title="Item" name="third" />
      <vk-subnav-item title="Disabled" name="fourth" disabled />
    </vk-subnav>

    Active: {{ active }}

    <hr />

    <p>Using index if name omited</p>
    <vk-subnav v-model="active">
      <vk-subnav-item title="Item" />
      <vk-subnav-item title="Item" />
      <vk-subnav-item title="Item" />
      <vk-subnav-item title="Disabled" disabled />
    </vk-subnav>

    <hr />

    Modifiers supported

    <vk-subnav pilled divided v-model="active">
      <vk-subnav-item title="Active" />
      <vk-subnav-item title="Item" />
      <vk-subnav-item title="Item" />
      <vk-subnav-item title="Disabled" disabled />
    </vk-subnav>

  </div>
</template>

<script>
export default {
  data: () => ({
    active: 'first'
  })
}
</script>
