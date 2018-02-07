import { storiesOf } from '@storybook/vue'

storiesOf('Core/Drop', module)
  .add('Default', () => require('./default.vue').default)
  .add('Positions', () => require('./positions.vue').default)
