import Default from './default.vue'
import { storiesOf } from '@storybook/vue'

storiesOf('Components', module)
  .add('Modal', () => Default)
  .add('Modal Center', () => require('./center.vue').default)
  .add('Modal Scrollbar', () => require('./scrollbar.vue').default)
  .add('Modal Sizes', () => require('./sizes.vue').default)
