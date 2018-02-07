<template>
  <div class="uk-padding">

    <!-- Hover with childs -->
    <div class="uk-inline">
      <vk-button>Hover</vk-button>
      <vk-drop id="parent-drop">
        <vk-card id="parent-drop-card">
          <lorem-ipsum />

          <vk-button type="primary" class="uk-width-1-1">Hover</vk-button>
          <vk-drop id="child-drop" position="right-center" :offset="50">
            <vk-card id="child-drop-card">
              <lorem-ipsum />

              <vk-button type="primary" class="uk-width-1-1">Hover</vk-button>
              <vk-drop id="child-child-drop" position="right-center" :offset="50">
                <vk-card id="child-child-drop-card">
                  <lorem-ipsum />
                </vk-card>
              </vk-drop>
            </vk-card>
          </vk-drop>

        </vk-card>
      </vk-drop>
    </div>

    <!-- Click with childs -->
    <div class="uk-inline">
      <vk-button>Click</vk-button>
      <vk-drop id="parent-drop" mode="click">
        <vk-card id="parent-drop-card">
          <lorem-ipsum />

          <vk-button type="primary" class="uk-width-1-1">Click</vk-button>
          <vk-drop id="child-drop" position="right-center" :offset="50" mode="click">
            <vk-card id="child-drop-card">
              <lorem-ipsum />

              <vk-button type="primary" class="uk-width-1-1">Click</vk-button>
              <vk-drop id="child-child-drop" position="right-center" :offset="50" mode="click">
                <vk-card id="child-child-drop-card">
                  <lorem-ipsum />
                </vk-card>
              </vk-drop>
            </vk-card>
          </vk-drop>

        </vk-card>
      </vk-drop>
    </div>

    <div class="uk-inline">
      <vk-button>Hover Only</vk-button>
      <vk-drop mode="hover" :delay-hide="0">
        <vk-card>
          <lorem-ipsum />
        </vk-card>
      </vk-drop>
    </div>

    <div class="uk-inline">
      <vk-button ref="target">Target</vk-button>
    </div>
    <vk-drop target="target">
      <vk-card>
        <lorem-ipsum />
      </vk-card>
    </vk-drop>

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
