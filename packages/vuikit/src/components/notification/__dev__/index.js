import { storiesOf } from '@storybook/vue'

storiesOf('Components/Notification', module)
  .add('Default', () => require('./default').default)
  .add('Positions', () => require('./positions').default)
  .add('Slot', () => require('./slot').default)
