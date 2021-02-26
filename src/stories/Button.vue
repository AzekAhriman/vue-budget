<template>
  <button type="button" :class="classes" @click="onClick">{{ label }}</button>
</template>

<script>
import './button.css';

export default {
  name: 'my-button',

  props: {
    label: {
      type: String,
      required: true,
    },
    red: {
      type: Boolean,
      default: false,
    },
    green: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    }
  },

  computed: {
    classes() {
      return {
        'storybook-button': true,
        'storybook-button--red': this.red,
        'storybook-button--green': this.green,
        [`storybook-button--${this.size}`]: true,
      };
    }
  },

  methods: {
    onClick() {
      this.$emit('onClick');
    },
  },
};
</script>
