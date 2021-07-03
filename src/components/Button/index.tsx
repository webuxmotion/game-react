import { FC } from 'react';
import { Button as StyledButton } from './styles';

export const Button: FC = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>{children}</StyledButton>
  )
}