import Default from './default.vue'
import { storiesOf } from '@storybook/vue'

storiesOf('Components', module)
  .add('Notification', () => Default)
  .add('Notification Positions', () => require('./positions.vue').default)
  .add('Notification Slot', () => require('./slot.vue').default)
