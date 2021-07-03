import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { Heading } from '.';
import { space } from '../../styles/space';

export default {
  title: `Small Components/Heading`
} as Meta

const Layout = styled.div`
  background-color: ${props => props.theme.color.black};
  padding: ${space(10)};
`;

export const Index = () => <Layout>
  <Heading>Game Over</Heading>
</Layout>;