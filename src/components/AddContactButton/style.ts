import { Link } from 'react-router-dom';
import styled from 'styled-components';
import variables from '../../styles/variables';

export const AddBtn = styled(Link)`
  background-color: ${variables.lightBrown};
  border: 2px solid ${variables.brown};
  border-radius: 30px;
  box-shadow: ${variables.brown} 4px 4px 0 0;
  color: ${variables.brown};
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  padding: 0 18px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  position: fixed;
  bottom: 40px;
  right: 40px;

  &:hover {
    background-color: #fff;
  }

  &:active {
    box-shadow: ${variables.brown} 2px 2px 0 0;
    transform: translate(2px, 2px);
  }
`;
