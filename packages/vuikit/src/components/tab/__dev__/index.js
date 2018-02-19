import { storiesOf } from '@storybook/vue'

storiesOf('Components/Tab', module)
  .add('Default', () => require('./default').default)
  .add('Vertical', () => require('./vertical').default)
