import styled from 'styled-components';
import variables from '../../styles/variables';

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666666;
  textarea {
    resize: none;
    margin: 16px 0;
  }
`;

export const Options = styled.div`
  margin: 8px 0;
  display: flex;
  align-items: center;

  label {
    margin-right: 6px;
    color: ${variables.brown};
  }
  input {
    margin-right: 4px;
  }
`;
export const Option = styled.div`
  text-transform: capitalize;
  display: flex;
  text-align: center;
  align-items: center;
`;

export const Title = styled.h2`
  color: ${variables.brown};
  font-size: 24px;
  font-weight: bold;
  margin: 16px;
  text-shadow:
    0px 4px 3px rgba(0, 0, 0, 0.4),
    0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);
  margin-top: 16px;
  margin-left: 8px;
  background-color: ${variables.lightBrown};
  padding: 8px;
  max-width: 25%;
  box-shadow: ${variables.brown} 4px 4px 0;
`;

export const Subtitle = styled.h3`
  margin: 16px 0;
  font-size: 16px;
  font-weight: bold;
  color: ${variables.brown};
`;
