import styled from "styled-components"

const Div = styled.div`
  background: ${props => props.theme.color.black};
  color: ${props => props.theme.color.white};
`;

export const MyComponent = () => <Div>MyComponent Placeholder</Div>