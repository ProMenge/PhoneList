import styled from 'styled-components';
import variables from '../../styles/variables';

type Props = {
  active: boolean;
};

export const Card = styled.div<Props>`
  padding: 12px;
  background-color: ${(props) => (props.active ? '#FFF' : '#fbeee0')};
  border: 2px solid #422800;
  color: #422800;
  border-radius: 8px;
  transform: ${(props) => (props.active ? 'scale(1.1)' : '')};
  box-shadow: ${variables.brown} 4px 4px 0 0;
  cursor: pointer;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;

  &:hover {
    background-color: #fff;
  }

  &:active {
    box-shadow: ${variables.brown} 2px 2px 0 0;
    transform: translate(2px, 2px);
  }
`;

export const Label = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
