<template>
  <div>
    <div class="uk-padding">

      <h1>Navbar</h1>

      <vk-grid>
        <div class="uk-width-2-3@m">

          <navbar container class="uk-margin">
            <navbar-nav slot="left">
              <navbar-nav-item title="Active" active href="#" />
              <navbar-nav-item title="Parent (TODO)" href="#" />
              <navbar-nav-item title="Content (TODO)" href="#" />
              <navbar-nav-item title="Item" href="#" />
              <navbar-nav-item title="Item" href="#" />
            </navbar-nav>
          </navbar>

          <h2>Transparent</h2>

          <div class="uk-margin uk-position-relative uk-light">
            <canvas class="uk-background-cover" style="background-image: url('/dark.jpg')" width="1000" height="200"></canvas>
            <div class="uk-position-top">

              <navbar container transparent>
                <navbar-nav slot="left">
                  <navbar-nav-item title="Active" active href="#" />
                  <navbar-nav-item title="Parent (TODO)" href="#" />
                  <navbar-nav-item title="Item" href="#" />
                  <navbar-nav-item title="Item" href="#" />
                </navbar-nav>
                <navbar-item slot="right">
                  <div>Some <a href="#">Link</a></div>
                </navbar-item>
                <navbar-toggle slot="right" href="#"></navbar-toggle>
              </navbar>

            </div>
          </div>

          <div class="uk-margin uk-position-relative uk-dark">
            <canvas class="uk-background-cover" style="background-image: url('/light.jpg')" width="1000" height="200"></canvas>
            <div class="uk-position-top">

              <navbar container transparent>
                <navbar-nav slot="left">
                  <navbar-nav-item title="Active" active href="#" />
                  <navbar-nav-item title="Parent (TODO)" href="#" />
                  <navbar-nav-item title="Item" href="#" />
                  <navbar-nav-item title="Item" href="#" />
                </navbar-nav>
                <navbar-item slot="right">
                  <div>Some <a href="#">Link</a></div>
                </navbar-item>
                <navbar-toggle slot="right" href="#"></navbar-toggle>
              </navbar>

            </div>
          </div>

        </div>

      </vk-grid>

      <h2>Icons and Subtitles</h2>

      <navbar container class="uk-margin">
        <navbar-nav slot="left">
          <navbar-nav-item title="Item" href="#"></navbar-nav-item>
          <navbar-nav-item title="Item" icon="trash" href="#"></navbar-nav-item>
          <navbar-nav-item title="Item" subtitle="Subtitle" href="#"></navbar-nav-item>
          <navbar-nav-item title="Item" subtitle="Subtitle" icon="trash" href="#"></navbar-nav-item>
          <navbar-nav-item icon="trash" href="#"></navbar-nav-item>
        </navbar-nav>
      </navbar>

      <h2>Content Items</h2>

      <navbar container class="uk-margin">
        <navbar-nav slot="left">
          <navbar-nav-item title="Item" href="#"></navbar-nav-item>
        </navbar-nav>
        <navbar-item slot="left">
          <div>Some <a href="#">Link</a></div>
        </navbar-item>
        <navbar-item slot="left">
          <vk-icon-button href="#" icon="trash"></vk-icon-button>
        </navbar-item>
        <navbar-item slot="left">
          <img class="uk-logo uk-responsive-height" src="/photo.jpg" alt="">
        </navbar-item>
        <navbar-item slot="left">Search</navbar-item>
        <navbar-item slot="left">
          <form>
            <input class="uk-input uk-form-width-medium" type="text" placeholder="Input">
            <button class="uk-button uk-button-default">Button</button>
          </form>
        </navbar-item>
      </navbar>

      <h2>Toggle and Logo</h2>

      <vk-grid class="uk-child-width-1-2@m">
        <div>

          <navbar container class="uk-margin">
            <navbar-toggle slot="left" href="#"></navbar-toggle>
            <navbar-item-logo slot="right" href="#">Logo</navbar-item-logo>
          </navbar>

          <navbar container class="uk-margin">
            <navbar-toggle title="Menu" slot="left" href="#"></navbar-toggle>
            <navbar-toggle title="Menu" :icon="false" slot="right" href="#"></navbar-toggle>
          </navbar>

        </div>
        <div>

          With dropdown (TODO)

        </div>
      </vk-grid>

      <h2>Center</h2>

      <navbar container class="uk-margin">
        <navbar-nav slot="left">
          <navbar-nav-item title="Left" href="#"></navbar-nav-item>
        </navbar-nav>

        <template slot="center">
          <navbar-nav>
            <navbar-nav-item title="Active" active href="#"></navbar-nav-item>
            <navbar-nav-item title="Parent (TODO)" href="#"></navbar-nav-item>
            <navbar-nav-item title="Content (TODO)" href="#"></navbar-nav-item>
            <navbar-nav-item title="Item" href="#"></navbar-nav-item>
            <navbar-nav-item title="Item" href="#"></navbar-nav-item>
            <navbar-nav-item title="Item" href="#"></navbar-nav-item>
          </navbar-nav>
          <navbar-item>
            <div>Some <a href="#">Link</a></div>
          </navbar-item>
        </template>

        <navbar-nav slot="right">
          <navbar-nav-item title="Right" href="#"></navbar-nav-item>
        </navbar-nav>
      </navbar>

      <navbar container class="uk-margin">
        <navbar-nav slot="left">
          <navbar-nav-item title="Left" href="#"></navbar-nav-item>
        </navbar-nav>

        <template slot="center-left">
          <navbar-nav>
            <navbar-nav-item title="Active" active href="#"></navbar-nav-item>
            <navbar-nav-item title="Parent (TODO)" href="#"></navbar-nav-item>
            <navbar-nav-item title="Content (TODO)" href="#"></navbar-nav-item>
          </navbar-nav>
        </template>

        <navbar-item-logo slot="center" href="#">Logo</navbar-item-logo>

        <template slot="center-right">
          <navbar-nav>
            <navbar-nav-item title="Active" active href="#"></navbar-nav-item>
            <navbar-nav-item title="Parent (TODO)" href="#"></navbar-nav-item>
            <navbar-nav-item title="Content (TODO)" href="#"></navbar-nav-item>
          </navbar-nav>
          <navbar-item>
            <div>Some <a href="#">Link</a></div>
          </navbar-item>
        </template>

        <navbar-nav slot="right">
          <navbar-nav-item title="Right" href="#"></navbar-nav-item>
        </navbar-nav>
      </navbar>

      <h2>Layouts</h2>
    </div>

    <navbar-full class="uk-margin">
      <template slot="left">
        <navbar-item-logo href="#">Logo</navbar-item-logo>
        <navbar-nav>
          <navbar-nav-item title="Active" active href="#"></navbar-nav-item>
          <navbar-nav-item title="Parent" href="#"></navbar-nav-item>
          <navbar-nav-item title="Item" href="#"></navbar-nav-item>
          <navbar-nav-item title="Item" href="#"></navbar-nav-item>
        </navbar-nav>
      </template>
    </navbar-full>

    <navbar-full class="uk-margin">
      <template slot="left">
        <navbar-item-logo href="#">Logo</navbar-item-logo>
        <navbar-nav>
          <navbar-nav-item title="Active" active href="#"></navbar-nav-item>
          <navbar-nav-item title="Parent" href="#"></navbar-nav-item>
          <navbar-nav-item title="Item" href="#"></navbar-nav-item>
          <navbar-nav-item title="Item" href="#"></navbar-nav-item>
        </navbar-nav>
      </template>

      <template slot="right">
        <navbar-nav>
          <navbar-nav-item title="Active" active href="#"></navbar-nav-item>
          <navbar-nav-item title="Parent" href="#"></navbar-nav-item>
          <navbar-nav-item title="Item" href="#"></navbar-nav-item>
        </navbar-nav>
        <navbar-item>
          <vk-grid tag="ul" gutter="small">
            <li>
              <vk-icon-button href="#" icon="trash"></vk-icon-button>
            </li>
            <li>
              <vk-icon-button href="#" icon="trash"></vk-icon-button>
            </li>
            <li>
              <vk-icon-button href="#" icon="trash"></vk-icon-button>
            </li>
          </vk-grid>
        </navbar-item>
      </template>
    </navbar-full>

    <navbar-full class="uk-margin">
      <template slot="left">
        <navbar-item-logo href="#">Logo</navbar-item-logo>
      </template>

      <template slot="center">
        <navbar-nav>
          <navbar-nav-item title="Active" active href="#"></navbar-nav-item>
          <navbar-nav-item title="Parent" href="#"></navbar-nav-item>
          <navbar-nav-item title="Item" href="#"></navbar-nav-item>
          <navbar-nav-item title="Item" href="#"></navbar-nav-item>
        </navbar-nav>
      </template>

      <template slot="right">
        <navbar-item>
          <vk-grid tag="ul" gutter="small">
            <li>
              <vk-icon-button href="#" icon="trash"></vk-icon-button>
            </li>
            <li>
              <vk-icon-button href="#" icon="trash"></vk-icon-button>
            </li>
            <li>
              <vk-icon-button href="#" icon="trash"></vk-icon-button>
            </li>
          </vk-grid>
        </navbar-item>
      </template>
    </navbar-full>

    <!-- expanded -->
    <navbar-full expanded class="uk-margin">
      <template slot="left">
        <navbar-item-logo href="#">Logo</navbar-item-logo>
        <navbar-nav>
          <navbar-nav-item title="Active" active href="#"></navbar-nav-item>
          <navbar-nav-item title="Parent" href="#"></navbar-nav-item>
          <navbar-nav-item title="Item" href="#"></navbar-nav-item>
          <navbar-nav-item title="Item" href="#"></navbar-nav-item>
        </navbar-nav>
      </template>
    </navbar-full>

    <navbar-full expanded class="uk-margin">
      <template slot="left">
        <navbar-item-logo href="#">Logo</navbar-item-logo>
        <navbar-nav>
          <navbar-nav-item title="Active" active href="#"></navbar-nav-item>
          <navbar-nav-item title="Parent" href="#"></navbar-nav-item>
          <navbar-nav-item title="Item" href="#"></navbar-nav-item>
          <navbar-nav-item title="Item" href="#"></navbar-nav-item>
        </navbar-nav>
      </template>

      <template slot="right">
        <navbar-nav>
          <navbar-nav-item title="Active" active href="#"></navbar-nav-item>
          <navbar-nav-item title="Parent" href="#"></navbar-nav-item>
          <navbar-nav-item title="Item" href="#"></navbar-nav-item>
        </navbar-nav>
        <navbar-item>
          <vk-grid tag="ul" gutter="small">
            <li>
              <vk-icon-button href="#" icon="trash"></vk-icon-button>
            </li>
            <li>
              <vk-icon-button href="#" icon="trash"></vk-icon-button>
            </li>
            <li>
              <vk-icon-button href="#" icon="trash"></vk-icon-button>
            </li>
          </vk-grid>
        </navbar-item>
      </template>
    </navbar-full>

    <navbar-full expanded class="uk-margin">
      <template slot="left">
        <navbar-item-logo href="#">Logo</navbar-item-logo>
      </template>

      <template slot="center">
        <navbar-nav>
          <navbar-nav-item title="Active" active href="#"></navbar-nav-item>
          <navbar-nav-item title="Parent" href="#"></navbar-nav-item>
          <navbar-nav-item title="Item" href="#"></navbar-nav-item>
          <navbar-nav-item title="Item" href="#"></navbar-nav-item>
        </navbar-nav>
      </template>

      <template slot="right">
        <navbar-item>
          <vk-grid tag="ul" gutter="small">
            <li>
              <vk-icon-button href="#" icon="trash"></vk-icon-button>
            </li>
            <li>
              <vk-icon-button href="#" icon="trash"></vk-icon-button>
            </li>
            <li>
              <vk-icon-button href="#" icon="trash"></vk-icon-button>
            </li>
          </vk-grid>
        </navbar-item>
      </template>
    </navbar-full>

  </div>
</template>

<script>
import * as components from '../'

export default {
  components
}
</script>
