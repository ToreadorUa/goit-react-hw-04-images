const { styled } = require('styled-components');
// const { App } = require('./App');

export const Appp = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;
export const Message = styled.div`
font-size: 20px;
font-weight: 700;
position: absolute;
top: 50%;
left:50%;
transform: translate(-50%,-50%);
`