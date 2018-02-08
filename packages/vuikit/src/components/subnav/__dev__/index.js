import Default from './default.vue'
import { storiesOf } from '@storybook/vue'

storiesOf('Components', module)
  .add('Subnav', () => Default)
  .add('Subnav UI', () => require('./ui.vue').default)
