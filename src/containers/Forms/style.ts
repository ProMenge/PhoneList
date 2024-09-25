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
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  label {
    margin-right: 6px;
  }
  input {
    margin-right: 3px;
  }
`;
export const Option = styled.div`
  display: inline;
  text-transform: capitalize;
`;

export const Title = styled.h2`
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
