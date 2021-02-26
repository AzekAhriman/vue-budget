import MyButton from './Button.vue';

export default {
  title: 'Example/Button',
  component: MyButton,
  argTypes: {
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="onClick" v-bind="$props" />',
});

export const Red = Template.bind({});
Red.args = {
  red: true,
  label: 'Button',
};

export const Green = Template.bind({});
Green.args = {
  green: true,
  label: 'Button',
};
