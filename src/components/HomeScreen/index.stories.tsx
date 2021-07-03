import { Meta } from '@storybook/react/types-6-0';
import { HomeScreen } from '.';

export default {
  title: `Menu Screens/HomeScreen`
} as Meta

const mockFunction = () => {};

export const Index = () => <HomeScreen onStartGameButtonClick={mockFunction} />