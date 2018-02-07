<template>
  <div class="uk-padding">

    <h2>Grid</h2>
    <grid />
    <h3>Divider</h3>
    <divider />

    <h2>Small</h2>
    <grid gutter="small" />
    <h3>Divider</h3>
    <divider gutter="small" />

    <h2>Medium</h2>
    <grid gutter="medium" />
    <h3>Divider</h3>
    <divider gutter="medium" />

    <h2>Large</h2>
    <grid gutter="large" />
    <h3>Divider</h3>
    <divider gutter="large" />

    <h2>Collapse</h2>
    <grid gutter="collapse" />

    <h2>Divider</h2>

    <h3>Order</h3>

    <vk-grid divided class="uk-child-width-1-2@m">
      <div>

        <vk-grid gutter="small" divided class="uk-child-width-1-4@m">
          <div><panel>First</panel></div>
          <div class="uk-flex-last"><panel>Second</panel></div>
          <div><panel>Third</panel></div>
          <div class="uk-flex-first"><panel>Last</panel></div>
        </vk-grid>

      </div>
      <div>

        <vk-grid gutter="small" divided class="uk-child-width-1-4@m">
          <div class="uk-flex-last"><panel>First</panel></div>
          <div><panel>Second</panel></div>
          <div><panel>Third</panel></div>
          <div class="uk-flex-first"><panel>Last</panel></div>
        </vk-grid>

      </div>
    </vk-grid>

    <h3>Wrap + Order</h3>

    <vk-grid divided class="uk-child-width-1-4@m">
      <div>

        <vk-grid gutter="small" divided class="uk-child-width-1-2@m uk-flex-middle">
          <div><panel>First</panel></div>
          <div><panel>Last<br>...<br>...</panel></div>
          <div><panel>Wrap</panel></div>
        </vk-grid>

      </div>
      <div>

        <vk-grid gutter="small" divided class="uk-child-width-1-2@m uk-flex-middle">
          <div><panel>First</panel></div>
          <div class="uk-flex-first"><panel>Last<br>...<br>...</panel></div>
          <div><panel>Wrap</panel></div>
        </vk-grid>

      </div>
      <div>

        <vk-grid gutter="small" divided class="uk-child-width-1-2@m uk-flex-middle">
          <div><panel>First<br>...<br>...</panel></div>
          <div class="uk-flex-first"><panel>Last</panel></div>
          <div><panel>Wrap</panel></div>
        </vk-grid>

      </div>
      <div>

        <vk-grid gutter="small" divided class="uk-child-width-1-2@m uk-flex-middle">
          <div class="uk-flex-last"><panel>First</panel></div>
          <div><panel>Last<br>...<br>...</panel></div>
          <div><panel>Wrap</panel></div>
        </vk-grid>

      </div>
    </vk-grid>

    <vk-grid divided class="uk-child-width-1-2@m">
      <div>

        <h3>Stack</h3>

        <vk-grid gutter="small" divided class="uk-child-width-1-1">
          <div><panel>First</panel></div>
          <div><panel>Second</panel></div>
          <div class="uk-flex-first"><panel>Last</panel></div>
        </vk-grid>

      </div>
      <div>

        <h3>Align</h3>

        <vk-grid gutter="small" divided class="uk-child-width-1-4@s uk-flex-center">
          <div class="uk-flex-last"><panel>First</panel></div>
          <div><panel>Second</panel></div>
          <div><panel>Third</panel></div>
          <div><panel>Forth</panel></div>
          <div class="uk-flex-first"><panel>Fifth</panel></div>
          <div><panel>Last</panel></div>
        </vk-grid>

      </div>
    </vk-grid>

  </div>
</template>

<script>
import { Grid as VkGrid } from '../'
import mergeData from 'vuikit/src/util/vue-data-merge'
import { Margin as VkMargin } from 'vuikit/src/directives'

import grid from './_grid'
import divider from './_divider'

const panel = {
  functional: true,
  render: (h, { data, children }) =>
    h('div', mergeData(data, {
      class: 'uk-panel'
    }), children)
}

export default {
  components: {
    grid,
    divider,
    panel,
    VkGrid
  },
  directives: {
    VkMargin
  }
}
</script>

<style>
.uk-panel {
  padding: 10px;
  text-align: center;
}

:nth-child(10n-9) > .uk-panel { background: rgba(0,0,0,0.1); }
:nth-child(10n-8) > .uk-panel { background: rgba(0,0,0,0.15); }
:nth-child(10n-7) > .uk-panel { background: rgba(0,0,0,0.2); }
:nth-child(10n-6) > .uk-panel { background: rgba(0,0,0,0.25); }
:nth-child(10n-5) > .uk-panel { background: rgba(0,0,0,0.3); }
:nth-child(10n-4) > .uk-panel { background: rgba(0,0,0,0.35); }
:nth-child(10n-3) > .uk-panel { background: rgba(0,0,0,0.40); }
:nth-child(10n-2) > .uk-panel { background: rgba(0,0,0,0.45); }
:nth-child(10n-1) > .uk-panel { background: rgba(0,0,0,0.50); }
:nth-child(10n) > .uk-panel { background: rgba(0,0,0,0.55); }
</style>
