import Default from './default.vue'
import { storiesOf } from '@storybook/vue'

storiesOf('Components', module)
  .add('Table', () => Default)
  .add('Table Select', () => require('./select.vue').default)
  .add('Table Sort', () => require('./sort.vue').default)
  .add('Table Tree', () => require('./tree.vue').default)
