import styled, { createGlobalStyle } from 'styled-components';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 232px auto;
`;

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`;

export const Button = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`;

export const SaveButton = styled(Button)`
  background-color: ${variables.green};
`;

export const Campo = styled.input`
  border-radius: 8px;
  padding: 8px;
  background-color: #fff;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
  margin: 8px 0;
  box-shadow:
    rgba(66, 40, 0, 0.4) 0px 5px,
    rgba(66, 40, 0, 0.3) 0px 10px,
    rgba(66, 40, 0, 0.2) 0px 15px,
    rgba(66, 40, 0, 0.1) 0px 20px,
    rgba(66, 40, 0, 0.05) 0px 25px;
`;

export default GlobalStyle;
