import { screen, userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
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

export const EmptyForm = Template.bind({});
EmptyForm.args = {
  labels: ['Name', 'Email', 'Message'],
  onClickButton: () => {
    window.alert('전송이 완료되었습니다.');
  },
};

export const FilledForm = Template.bind({});
FilledForm.args = {
  ...EmptyForm.args,
};
FilledForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  for (let label of EmptyForm.args.labels) {
    await userEvent.type(canvas.getByTestId(label), label, { delay: 100 });
  }
  await userEvent.click(canvas.getByTestId('button'));

  await expect(
    canvas.getByText(
      'Everything is perfect, Your Message is sended! Have a good day!!'
    )
  ).toBeInTheDocument;
};

export const DelayedStory = Template.bind({});
DelayedStory.args = {
  ...EmptyForm.args,
};
DelayedStory.play = async () => {
  const values = {
    Name: 'Sanchez',
    Email: 'Sanchez@gmail.com',
    Message: 'Hello, World!',
  };
  for (let label of EmptyForm.args.labels) {
    await userEvent.type(screen.getByTestId(label), values[label], {
      delay: 100,
    });
  }
};
