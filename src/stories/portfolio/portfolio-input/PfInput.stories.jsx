import { screen, userEvent } from '@storybook/testing-library';
import { PfInput } from './PfInput';

export default {
  title: 'Portfolio/PfInput',
  component: PfInput,
}

const Template = (args) => <PfInput {...args} />

export const NameInput = Template.bind({});
NameInput.args = {
  label: 'Name',
}
NameInput.play = async () => {
  await userEvent.type(screen.getByTestId(NameInput.args.label), 'Sanchez');
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  label: 'Email',
}
EmailInput.play = async () => {
  await userEvent.type(screen.getByTestId(EmailInput.args.label), 'Sanchez.gmail.com');
};

export const MessageInput = Template.bind({});
MessageInput.args = {
  label: 'Message',
}
MessageInput.play = async () => {
  await userEvent.type(screen.getByTestId(MessageInput.args.label), 'Message');
};
