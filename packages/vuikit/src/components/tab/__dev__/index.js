import Default from './default.vue'
import { storiesOf } from '@storybook/vue'

storiesOf('Components', module)
  .add('Tab', () => Default)
  .add('Tab Vertical', () => require('./vertical.vue').default)
