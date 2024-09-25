import styled from 'styled-components';
import variables from '../../styles/variables';
export const Container = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 31.5% 31.5% 31.5%;
  grid-gap: 3%;
`;

export const Message = styled.p`
  color: ${variables.brown};
  font-size: 24px;
  font-weight: bold;
  text-shadow:
    0px 4px 3px rgba(0, 0, 0, 0.4),
    0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);
  margin-top: 16px;
  margin-left: 8px;
`;
