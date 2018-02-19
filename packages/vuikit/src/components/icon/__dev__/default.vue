<template>
  <div class="uk-padding">

    <vk-grid class="uk-child-width-1-4@m">
      <div>
        <h3>icon</h3>
        <vk-icon icon="home" />
      </div>

      <div>
        <h3>icon-link</h3>
        <vk-icon-link href="#" icon="home" />
      </div>

      <div>
        <h3>icon-button</h3>
        <vk-icon-button icon="home" />
      </div>

      <div>
        <h3>icon-image</h3>
        <vk-icon-image src="/avatar.jpg" />
      </div>
    </vk-grid>

    <vk-grid class="uk-child-width-1-4@m">
      <div>
        <h3>Ratio</h3>
        <vk-icon icon="home" ratio="2" />
      </div>

      <div>
        <h3>Link Reset</h3>
        <vk-icon-link icon="home" reset />
      </div>

      <div>
        <h3>Width/Height</h3>
        <vk-icon icon="home" width="16" height="16" />
      </div>

      <div>
        <h3>ViewBox</h3>
        <vk-icon icon="home" viewBox="6 6 16 16" />
      </div>
    </vk-grid>

  </div>
</template>
