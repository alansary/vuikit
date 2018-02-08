<template>
  <div class="uk-padding">

    <div class="uk-inline">
      <vk-button>Hover</vk-button>
      <vk-dropdown>
        <vk-dropdown-nav>
          <li class="uk-active"><a href="#">Active</a></li>
          <li class="uk-parent">
              <a href="#">Parent</a>
              <ul class="uk-nav-sub">
                  <li><a href="#">Sub item</a></li>
                  <li><a href="#">Sub item</a></li>
              </ul>
          </li>
          <li class="uk-nav-header">Header</li>
          <li><a href="#"><span class="uk-margin-small-right"></span> Item</a></li>
          <li><a href="#"><span class="uk-margin-small-right"></span> Item</a></li>
          <li class="uk-nav-divider"></li>
          <li><a href="#"><span class="uk-margin-small-right"></span> Item</a></li>
        </vk-dropdown-nav>
      </vk-dropdown>
    </div>
  </div>
</template>
