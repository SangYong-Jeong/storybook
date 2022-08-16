import { PfSelect } from './PfSelect';
import { screen, userEvent } from '@storybook/testing-library';

export default {
  title: 'Portfolio/PfSelect',
  argTypes: {
    label: { name: 'number', type: { name: 'number' } },
  },
  component: PfSelect,
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Template = (args) => <PfSelect {...args} />;

export const PfSelectFirstStory = Template.bind({});
PfSelectFirstStory.args = {
  options: ['One Item', 'Another Item', 'Yet another item'],
};
PfSelectFirstStory.play = async () => {
  const select = screen.getByRole('listbox');

  await userEvent.selectOptions(select, ['One Item']);
  await sleep(2000);

  await userEvent.selectOptions(select, ['Another Item']);
  await sleep(2000);

  await userEvent.selectOptions(select, ['Yet another item']);
};
