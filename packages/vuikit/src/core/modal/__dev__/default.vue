<template>
  <div class="uk-padding">

    <div v-vk-margin>
      <vk-button @click="show = true">Sections</vk-button>
      <vk-button @click="outside = true">Close Outside</vk-button>
      <vk-button @click="scrollbar = true">Scrollbar</vk-button>
      <vk-button @click="overflowAuto = true">Overflow Auto</vk-button>
      <vk-button @click="full = true">Full</vk-button>
      <vk-button @click="fullSplit = true">Full Split</vk-button>
    </div>

    <modal-transition>
      <modal v-show="show">
        <modal-dialog>
          <modal-close @click="show = false"></modal-close>

          <modal-header>
            <modal-title>Headline</modal-title>
          </modal-header>

          <modal-body>
            <p>{{ lorem }}</p>
          </modal-body>

          <modal-footer class="uk-text-right">
            <vk-button @click="show = false">Cancel</vk-button>
            <vk-button type="primary">Save</vk-button>
          </modal-footer>

        </modal-dialog>
      </modal>
    </modal-transition>

    <modal-transition>
      <modal v-show="outside">
        <modal-dialog>

          <modal-body>
            <modal-close outside @click="outside = false"></modal-close>
            <p>{{ lorem }}</p>
          </modal-body>

        </modal-dialog>
      </modal>
    </modal-transition>

    <modal-transition>
      <modal v-show="scrollbar">
        <modal-dialog>

          <modal-body>
            <modal-close @click="scrollbar = false"></modal-close>
            <p v-for="n in 10">{{ lorem }}</p>
          </modal-body>

        </modal-dialog>
      </modal>
    </modal-transition>

    <modal-transition>
      <modal expand v-show="overflowAuto">
        <modal-dialog>
          <modal-close @click="overflowAuto = false"></modal-close>

          <modal-header>
            <modal-title>Headline</modal-title>
          </modal-header>

          <modal-body v-overflow-auto>
            <p v-for="n in 10">{{ lorem }}</p>
          </modal-body>

          <modal-footer class="uk-text-right">
            <vk-button @click="overflowAuto = false">Cancel</vk-button>
            <vk-button type="primary">Save</vk-button>
          </modal-footer>

        </modal-dialog>
      </modal>
    </modal-transition>

    <modal-transition>
      <modal-full v-show="full">
        <modal-dialog class="uk-flex uk-flex-center uk-flex-middle" v-vk-height-viewport>

          <modal-full-close large @click="full = false"></modal-full-close>
          <div class="uk-width-xxlarge uk-padding-large">
            <h1>Headline</h1>
            <p>{{ lorem }}</p>
          </div>

        </modal-dialog>
      </modal-full>
    </modal-transition>

    <modal-transition>
      <modal-full v-show="fullSplit">
        <modal-dialog>

          <modal-full-close @click="fullSplit = false"></modal-full-close>
          <vk-grid class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle">
            <div class="uk-background-cover" style="background-image: url('/photo.jpg');" v-vk-height-viewport></div>
            <div class="uk-padding-large">
              <h1>Headline</h1>
              <p>{{ lorem }}</p>
            </div>
          </vk-grid>

        </modal-dialog>
      </modal-full>
    </modal-transition>

  </div>
</template>

<script>
import * as components from '../'
import OverflowAuto from '../v-overflow-auto'

export default {
  components,
  directives: {
    OverflowAuto
  },
  data: () => ({
    show: false,
    full: false,
    outside: false,
    fullSplit: false,
    scrollbar: false,
    overflowAuto: false,
    lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  })
}
</script>
