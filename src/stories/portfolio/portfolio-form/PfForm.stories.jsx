import { screen, userEvent, fireEvent } from '@storybook/testing-library';
import { PfForm } from './PfForm';

export default {
  title: 'Portfolio/PfForm',
  component: PfForm,
  decorators: [
    (Story) => (
      <div style={{ margin: '3rem' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <PfForm {...args} />;

export const FirstStory = Template.bind({});
FirstStory.args = {
  labels: ['Name', 'Email', 'Message'],
};
FirstStory.play = async () => {
  const values = {
    Name: 'Sanchez',
    Email: 'Sanchez@gmail.com',
    Message: 'Hello, World!',
  };
  for (let label of FirstStory.args.labels) {
    await userEvent.type(screen.getByTestId(label), values[label]);
  }
};

export const DelayedStory = Template.bind({});
DelayedStory.args = {
  ...FirstStory.args,
};
DelayedStory.play = async () => {
  const values = {
    Name: 'Sanchez',
    Email: 'Sanchez@gmail.com',
    Message: 'Hello, World!',
  };
  for (let label of FirstStory.args.labels) {
    await userEvent.type(screen.getByTestId(label), values[label], {
      delay: 100,
    });
  }
};
