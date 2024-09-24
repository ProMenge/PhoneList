import styled from 'styled-components';
import variables from '../../styles/variables';

export const Aside = styled.aside`
  padding: 16px;
  background-color: ${variables.lightBrown};
  height: 100vh;
  border-right: 2px solid black;
`;
export const Campo = styled.input`
  border-radius: 8px;
  padding: 8px;
  background-color: #fff;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const Filters = styled.div`
  display: flex;
  margin-top: 16px;
  flex-wrap: wrap;
  flex-direction: column;
`;
