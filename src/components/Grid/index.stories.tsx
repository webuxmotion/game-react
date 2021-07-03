import { Meta } from '@storybook/react/types-6-0';
import { Grid } from '.';
import { gridCoordsList } from '../../util/gridCoordsList';

export default {
  title: `Small Components/Grid`
} as Meta

console.log(gridCoordsList);

export const Index = () => <Grid />