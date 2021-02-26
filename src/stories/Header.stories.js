import MyHeader from './Header';

export default {
  title: 'Example/Header',
  component: MyHeader,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyHeader },
  template:
    '<my-header :edit="edit" :name="name" @addExpenses="addExpenses" @saveChanges="saveChanges" @cancelChanges="cancelChanges" @nextMonth="nextMonth" />',
});

export const Home = Template.bind({});
Home.args = {
  edit: false,
  name: "Home",
};

export const Edit = Template.bind({});
Edit.args = {
  edit: true,
  name: "Edit",
};
