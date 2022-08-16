import PortFolioMDXDocumentation from './PortFolioItem-MDX-Documentation.mdx';
// MDX 문법에서 뜨이ㅓ쓰기의 경우에는 "-" 붙여서 처리해야 한다.

import { PortFolioItem } from './PortFolioItem';
import apple from '../../assets/apple.jpg';
import cat from '../../assets/cat.jpg';
import bike from '../../assets/bike.jpg';
import boat from '../../assets/boat.jpg';
import boxing from '../../assets/boxing.jpg';
import soccer from '../../assets/soccer.jpg';

export default {
  title: 'Portfolio/PortFolioItem',
  component: PortFolioItem,
  parameters: {
    docs: {
      page: PortFolioMDXDocumentation,
    },
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: '1200px',
          backgroundColor: '#f1f1f1',
          padding: '18px 16px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <PortFolioItem {...args} />;

export const FirstPortFolio = Template.bind({});
FirstPortFolio.args = {
  title: 'Lorem Ipsum',
  content:
    'Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
  src: apple,
};
// 적용 안 되는 줄 알았는데 오타였네
FirstPortFolio.parameters = {
  backgrounds: {
    values: [
      { name: 'light', value: '#fff' },
      { name: 'black', value: '#000' },
    ],
  },
};

export const SecondPortFolio = Template.bind({});
SecondPortFolio.args = {
  ...FirstPortFolio.args,
  src: cat,
};
SecondPortFolio.parameters = {
  backgrounds: {
    values: [
      { name: 'light', value: '#fff' },
      { name: 'dark', value: '#000' },
    ],
  },
};

export const ThirdPortFolio = Template.bind({});
ThirdPortFolio.args = {
  ...FirstPortFolio.args,
  src: bike,
};

export const FourthPortFolio = Template.bind({});
FourthPortFolio.args = {
  ...FirstPortFolio.args,
  src: boat,
};

export const FifthPortFolio = Template.bind({});
FifthPortFolio.args = {
  ...FirstPortFolio.args,
  src: boxing,
};

export const SixthPortFolio = Template.bind({});
SixthPortFolio.args = {
  ...FirstPortFolio.args,
  src: soccer,
};
