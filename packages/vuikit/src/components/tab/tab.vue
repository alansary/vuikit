<template>
  <div :class="{
    'uk-flex uk-flex-column-reverse': bottom
  }">
    <tab
      :bottom="bottom"
      :alignment="alignment"
    >
      <tab-item v-for="(tab, index) in tabs"
        :active="tab.id === state.activeTab"
        :key="`${tab.id}_${index}`"
        :label="tab.label"
        :disabled="tab.disabled"
        @click.prevent="!tab.disabled && triggerTab(tab.id)"
      ></tab-item>
    </tab>
    <div :class="{ 'uk-margin': bottom }">
      <transition :name="transition" mode="out-in">
        <keep-alive>
          <tab-content></tab-content>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
import core from './core'
import Tab from 'vuikit/src/core/tab/tab'
import TabItem from 'vuikit/src/core/tab/tab-item'
import { assign } from 'vuikit/src/util/lang'

export default {
  name: 'Tab',
  extends: core,
  components: {
    Tab,
    TabItem
  },
  props: assign({}, Tab.props)
}
</script>
