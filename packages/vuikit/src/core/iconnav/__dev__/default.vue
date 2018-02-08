<template>
  <div class="uk-padding">

    <div class="uk-margin">
      <vk-iconnav>
        <vk-iconnav-item icon="plus" />
        <vk-iconnav-item icon="copy" />
        <vk-iconnav-item icon="trash" />
      </vk-iconnav>
    </div>

    <vk-iconnav-vertical>
      <vk-iconnav-item icon="plus" />
      <vk-iconnav-item icon="copy" />
      <vk-iconnav-item icon="trash" />
    </vk-iconnav-vertical>

  </div>
</template>

<script>
import IconCopy from './icon-copy'
import IconPlus from './icon-plus'
import IconTrash from './icon-trash'

export default {
  components: {
    IconCopy,
    IconPlus,
    IconTrash
  }
}
</script>
