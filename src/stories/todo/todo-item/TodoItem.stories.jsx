import fetch from 'node-fetch';
import { TodoItem } from './TodoItem';

export default {
  title: 'Todo/TodoItem',
  component: TodoItem,
};

const Template = (args, { loaded: { todo } }) => (
  <TodoItem {...args} {...todo} />
);

export const FirstStory = Template.bind({});
FirstStory.loaders = [
  async () => ({
    todo: await (
      await fetch('https://jsonplaceholder.typicode.com/todos/1')
    ).json(),
  }),
];
