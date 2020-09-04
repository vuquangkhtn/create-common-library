import React from 'react'
import styled from 'styled-components';

const StyledExample = styled.div`
  margin: 2em;
  padding: 0.5em;
  border: 2px solid #000;
  font-size: 2em;
  text-align: center;
`;

const Example = ({ text }) => {
return <StyledExample>Example Component: {text}</StyledExample>
}

export default Example
