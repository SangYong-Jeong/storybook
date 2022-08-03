// 여기서 확인할게 만약 갖고온 story에서 decorators가 적용되는지 check 필요
// -> 적용 안됨 

import { PortFolioSet } from './PortFolioSet';
import { FirstPortFolio, SecondPortFolio, ThirdPortFolio, FourthPortFolio, FifthPortFolio, SixthPortFolio } from '../portfolio-item/PortFolioItem.stories';

export default {
  title: 'PortFolioSet',
  component: PortFolioSet,
}

const Template = (args) => <PortFolioSet {...args} />;

export const FirstPortFolioSet = Template.bind({});
FirstPortFolioSet.args = {
  portfolioItems: [
    { ...FirstPortFolio.args },
    { ...SecondPortFolio.args },
    { ...ThirdPortFolio.args },
  ],
}

export const SecondPortFolioSet = Template.bind({});
SecondPortFolioSet.args = {
  portfolioItems: [
    { ...FourthPortFolio.args },
    { ...FifthPortFolio.args },
    { ...SixthPortFolio.args },
  ],
}