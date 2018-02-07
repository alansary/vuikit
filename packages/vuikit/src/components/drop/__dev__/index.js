import { storiesOf } from '@storybook/vue'

storiesOf('Components/Drop', module)
  .add('Default', () => require('./default.vue').default)
  .add('Boundary', () => require('./boundary.vue').default)
