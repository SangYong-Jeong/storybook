import { PfInput } from './PfInput';

export default {
  title: 'PfInput',
  component: PfInput,
}

const Template = (args) => <PfInput {...args} />

export const NameInput = Template.bind({});
NameInput.args = {
  label: 'Name',
}


export const EmailInput = Template.bind({});
EmailInput.args = {
  label: 'Email',
}

export const MessageInput = Template.bind({});
MessageInput.args = {
  label: 'Message',
}