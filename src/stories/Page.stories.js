import MyPage from './Page';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Example/Page',
  component: MyPage,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyPage },
  template:
    '<my-page :edit="edit" :name="name" @addExpenses="addExpenses" @saveChanges="saveChanges" @cancelChanges="cancelChanges" @nextMonth="nextMonth" />',
});

export const Home = Template.bind({});
Home.args = {
  ...HeaderStories.Home.args,
};

export const Edit = Template.bind({});
Edit.args = {
  ...HeaderStories.Edit.args,
};
