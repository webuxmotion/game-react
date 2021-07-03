import { Meta } from '@storybook/react/types-6-0';
import { MenuScreen } from '.';

export default {
  title: `Small Components/MenuScreen`
} as Meta;

export const Index = () => <MenuScreen>
  <div>child1</div>
  <div>child2</div>
  <div>child2</div>
</MenuScreen>