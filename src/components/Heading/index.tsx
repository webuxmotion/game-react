import { FC } from 'react';
import { Heading as StyledHeading } from './styles';

export const Heading: FC = ({ children }) => {
  return (
    <StyledHeading>{children}</StyledHeading>
  )
}