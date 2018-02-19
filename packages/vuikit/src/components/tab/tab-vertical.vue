<template>
  <div class="uk-grid" :class="{
    'uk-flex uk-flex-row-reverse': alignment === 'right'
  }">
    <div class="uk-width-auto">
      <tab :alignment="alignment">
        <tab-item v-for="(tab, index) in tabs"
          :active="tab.id === state.activeTab"
          :key="`${tab.id}_${index}`"
          :label="tab.label"
          :disabled="tab.disabled"
          @click.prevent="!tab.disabled && triggerTab(tab.id)"
        ></tab-item>
      </tab>
    </div>
    <div class="uk-width-expand">
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
import { assign } from 'vuikit/src/util/lang'

import Tab from './elements/tab-vertical'
import TabItem from './elements/tab-item'

export default {
  name: 'TabVertical',
  extends: core,
  components: {
    Tab,
    TabItem
  },
  props: assign({}, Tab.props)
}
</script>
