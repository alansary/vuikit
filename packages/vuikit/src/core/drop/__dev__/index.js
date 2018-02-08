import { storiesOf } from '@storybook/vue'

storiesOf('Core', module)
  .add('Drop', () => require('./default.vue').default)
  .add('Drop Positions', () => require('./positions.vue').default)
