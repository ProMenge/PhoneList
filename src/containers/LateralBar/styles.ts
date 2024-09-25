import styled from 'styled-components';
import variables from '../../styles/variables';
import { Link } from 'react-router-dom';

export const Aside = styled.aside`
  padding: 16px;
  background-color: ${variables.lightBrown};
  height: 100vh;
  border-right: 2px solid black;
`;

export const Filters = styled.div`
  display: flex;
  margin-top: 16px;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const returnBtn = styled(Link)`
  background-color: ${variables.lightBrown};
  border: 2px solid ${variables.brown};
  border-radius: 20px;
  box-shadow: ${variables.brown} 4px 4px 0 0;
  color: ${variables.brown};
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 16px;
  padding: 0 12px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    background-color: #fff;
  }

  &:active {
    box-shadow: ${variables.brown} 2px 2px 0 0;
    transform: translate(2px, 2px);
  }
`;
