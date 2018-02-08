import { storiesOf } from '@storybook/vue'

storiesOf('Components', module)
  .add('Drop', () => require('./default.vue').default)
  .add('Drop With Boundaries', () => require('./boundary.vue').default)
