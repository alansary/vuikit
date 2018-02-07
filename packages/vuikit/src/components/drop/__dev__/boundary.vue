<template>
  <div class="uk-padding">

    <h2>Drop with Boundary</h2>

    <div ref="boundary" class="boundary uk-margin uk-flex uk-flex-between">

      <div class="uk-inline">
        <vk-button>Right</vk-button>
        <vk-drop position="bottom-right" boundary="boundary">
          <vk-card><lorem-ipsum /></vk-card>
        </vk-drop>
      </div>

      <div class="uk-inline">
        <vk-button>Justify</vk-button>
        <vk-drop position="bottom-justify" boundary="boundary" boundary-align>
          <vk-card><lorem-ipsum /></vk-card>
        </vk-drop>
      </div>

      <div class="uk-inline">
        <vk-button>Center</vk-button>
        <vk-drop position="bottom-center" boundary="boundary">
          <vk-card><lorem-ipsum /></vk-card>
        </vk-drop>
      </div>

      <div class="uk-inline">
        <vk-button>Left</vk-button>
        <vk-drop position="bottom-left" boundary="boundary" boundary-align>
          <vk-card><lorem-ipsum /></vk-card>
        </vk-drop>
      </div>

      <div class="uk-inline">
        <vk-button>Right</vk-button>
        <vk-drop position="bottom-right" boundary="boundary" boundary-align>
          <vk-card><lorem-ipsum /></vk-card>
        </vk-drop>
      </div>

      <div class="uk-inline">
        <vk-button>Centered</vk-button>
        <vk-drop position="bottom-center" boundary="boundary" boundary-align>
          <vk-card><lorem-ipsum /></vk-card>
        </vk-drop>
      </div>

      <div class="uk-inline">
        <vk-button>Left</vk-button>
        <vk-drop position="bottom-left" boundary="boundary">
          <vk-card><lorem-ipsum /></vk-card>
        </vk-drop>
      </div>

    </div>

    <div ref="boundary-v" class="boundary small-width uk-panel">

      <div class="uk-inline uk-margin-small-bottom">
        <vk-button>Top</vk-button>
        <vk-drop position="right-bottom" boundary="boundary-v">
          <vk-card><lorem-ipsum /></vk-card>
        </vk-drop>
      </div>

      <div class="uk-inline uk-margin-small-bottom">
        <vk-button>Justify</vk-button>
        <vk-drop position="right-justify" boundary="boundary-v" boundary-align>
          <vk-card class="uk-height-1-1"><lorem-ipsum /></vk-card>
        </vk-drop>
      </div>

      <div class="uk-inline uk-margin-small-bottom">
        <vk-button>Center</vk-button>
        <vk-drop position="right-center" boundary="boundary-v">
          <vk-card><lorem-ipsum /></vk-card>
        </vk-drop>
      </div>

      <div class="uk-inline uk-margin-small-bottom">
        <vk-button>Top</vk-button>
        <vk-drop position="right-top" boundary="boundary-v" boundary-align>
          <vk-card><lorem-ipsum /></vk-card>
        </vk-drop>
      </div>

      <div class="uk-inline uk-margin-small-bottom">
        <vk-button>Bottom</vk-button>
        <vk-drop position="right-bottom" boundary="boundary-v" boundary-align>
          <vk-card><lorem-ipsum /></vk-card>
        </vk-drop>
      </div>

      <div class="uk-inline uk-margin-small-bottom">
        <vk-button>Centered</vk-button>
        <vk-drop position="right-center" boundary="boundary-v" boundary-align>
          <vk-card><lorem-ipsum /></vk-card>
        </vk-drop>
      </div>

      <div class="uk-inline">
        <vk-button>Bottom</vk-button>
        <vk-drop position="right-top" boundary="boundary-v">
          <vk-card><lorem-ipsum /></vk-card>
        </vk-drop>
      </div>

    </div>

  </div>
</template>

<script>
import { Drop as VkDrop } from '../'
import { Button as VkButton, Card as VkCard } from '../..'

const LoremIpsum = {
  functional: true,
  render (h) {
    return h('p', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.')
  }
}

export default {
  components: {
    VkCard,
    VkDrop,
    VkButton,
    LoremIpsum
  }
}
</script>

<style type="text/css">
.boundary { border: 1px dashed rgba(0,0,0,0.2); }
.small-width { width: 165px; }
</style>
