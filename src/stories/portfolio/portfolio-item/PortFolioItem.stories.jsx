import { PortFolioItem } from './PortFolioItem';
import apple from '../../assets/apple.jpg';
import cat from '../../assets/cat.jpg';
import bike from '../../assets/bike.jpg';
import boat from '../../assets/boat.jpg';
import boxing from '../../assets/boxing.jpg';
import soccer from '../../assets/soccer.jpg';

// 모든 스토리에 똑같은 args를 할당하러면, 아래의 export default 하는 객체 안에 args로 특정 arg를 집어넣으면 된다. -> 대부분의 스토리에서 같은 args를 사용한다면, 컴포넌트 레벨에서 args를 정의하고 일부분만 다르게 해서 overwrite하면 좋다.
export default {
  title: 'PortFolioItem',
  component: PortFolioItem,
  parameters: {
    backgrounds: {
      values: [
        {name: 'red', value: '#f00'},
        {name: 'green', value: '#0f0'},
        {name: 'blue', value: '#00f'},
      ],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '1200px', backgroundColor: '#f1f1f1', padding: '18px 16px' }}><Story /></div>
    )
  ]
}

const Template = (args) => <PortFolioItem {...args} />;

export const FirstPortFolio = Template.bind({});
FirstPortFolio.args = {
  title: 'Lorem Ipsum',
  content: 'Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
  src: apple
}
// 적용 안 되는 줄 알았는데 오타였네
FirstPortFolio.parameters = {
  backgrounds: {
    values: [
      { name: 'light', value: '#fff' },
      { name: 'black', value: '#000' },
    ],
  },
}

export const SecondPortFolio = Template.bind({});
SecondPortFolio.args = {
  ...FirstPortFolio.args,
  src: cat
}
SecondPortFolio.parameters = {
  backgrounds: {
    values: [
      { name: 'light', value: '#fff' },
      { name: 'dark', value: '#000' },
    ]
  }
}

export const ThirdPortFolio = Template.bind({});
ThirdPortFolio.args = {
  ...FirstPortFolio.args,
  src: bike,
}

export const FourthPortFolio = Template.bind({});
FourthPortFolio.args = {
  ...FirstPortFolio.args,
  src: boat,
}

export const FifthPortFolio = Template.bind({});
FifthPortFolio.args = {
  ...FirstPortFolio.args,
  src: boxing
}

export const SixthPortFolio = Template.bind({});
SixthPortFolio.args = {
  ...FirstPortFolio.args,
  src: soccer
}