<template>
  <div class="uk-padding">

    <vk-grid class="uk-child-width-1-4@m">
      <div>
        <h3>Default</h3>
        <vk-icon name="home" />
      </div>

      <div>
        <h3>Link</h3>
        <vk-icon-link name="home" />
      </div>

      <div>
        <h3>Link Reset</h3>
        <vk-icon-link name="home" reset />
      </div>

      <div>
        <h3>Button</h3>
        <vk-icon-button name="home" />
      </div>
    </vk-grid>

    <vk-grid class="uk-child-width-1-4@m">
      <div>
        <h3>Ratio</h3>
        <vk-icon name="home" ratio="2" />
      </div>

      <div>
        <h3>Width/Height</h3>
        <vk-icon name="home" width="16" height="16" />
      </div>

      <div>
        <h3>ViewBox</h3>
        <vk-icon name="home" viewBox="6 6 16 16" />
      </div>
    </vk-grid>

  </div>
</template>
