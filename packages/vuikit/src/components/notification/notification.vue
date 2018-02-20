<template>
  <container :position="position">
    <message-transition>
      <message
        v-for="(msg, index) in $messages"
        :key="getMessageId(msg)"
        :status="msg.status"
        v-message-directive="msg"
        @close="() => triggerRemove(index)"
      >
        <slot :message="msg.message">
          {{ msg.message }}
        </slot>
        <message-close></message-close>
      </message>
    </message-transition>
  </container>
</template>

<script>
import Message from './elements/message'
import Container from './elements/container'
import MessageClose from './elements/close'
import MessageDirective from './directive'
import MessageTransition from './transition'

import { warn, tip } from 'vuikit/src/util/debug'
import { isObject, isString, assign } from 'vuikit/src/util/lang'

export default {
  name: 'Notification',
  components: {
    Container,
    Message,
    MessageClose,
    MessageTransition
  },
  directives: {
    MessageDirective
  },
  props: {
    timeout: {
      type: Number,
      default: 5000
    },
    messages: {
      type: Array,
      default: () => [],
      validator: val => {
        if (!val.every(m => isObject(m) || isString(m))) {
          warn('vk-notification -> each message is expected as Object or String')
          return false
        }

        return true
      }
    },
    status: Message.props.status,
    position: Container.props.position
  },
  computed: {
    $messages () {
      let messages = this.messages.map(val => {
        let msg = isString(val) ? { message: val } : val
        return assign({ status: this.status, timeout: this.timeout }, msg)
      })

      messages = this.removeDuplicates(messages)

      return messages
    }
  },
  methods: {
    triggerRemove (index) {
      const messages = [...this.$messages]
      messages.splice(index, 1)

      this.$emit('update:messages', messages)
    },
    removeDuplicates (values) {
      const messages = []

      const isDuplicated = msg => messages.find(m => {
        return this.getMessageId(m) === this.getMessageId(msg)
      })

      for (let i = 0; i < values.length; i++) {
        if (isDuplicated(values[i])) {
          tip('vk-notification -> duplicate messages are filtered out, consider adding a unique `key` to those.')
          continue
        }

        messages.push(values[i])
      }

      return messages
    },
    getMessageId (msg) {
      const validKeys = ['message', 'status', 'key', 'timeout']

      return Object.keys(msg)
        .filter(k => validKeys.find(k => k))
        .map(k => msg[k])
        .join(':')
    }
  }
}
</script>
