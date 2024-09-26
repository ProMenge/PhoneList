import styled from 'styled-components';
import * as enums from '../../utils/enums/Contact';
import variables from '../../styles/variables';
import { Button } from '../../styles';

type TagProps = {
  category?: enums.Category;
};

function returnsBackgroundColor(props: TagProps): string {
  if (props.category === enums.Category.FAMILY) return variables.red;
  if (props.category === enums.Category.PERSONAL) return variables.pumpkin;
  if (props.category === enums.Category.SERVICES) return variables.green;
  if (props.category === enums.Category.WORK) return variables.yellow;
  else {
    return '#ccc';
  }
}

// export const Card = styled.div`
//   background-color: #ecf0f1;
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//   padding: 16px;
//   margin-bottom: 32px;
//   border-radius: 16px;
//   max-width: 100%;
// `;

export const Card = styled.div`
  background-color: ${variables.lightBrown};
  box-shadow: ${variables.brown} 4px 4px 0 0;
  padding: 16px;
  margin-bottom: 32px;
  border: 2px solid ${variables.brown};
  border-radius: 16px;
  max-width: 100%;
  margin-top: 16px;
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-left: 8px;
  margin-bottom: 12px;
  color: ${variables.brown};
`;

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  background-color: ${(props) => returnsBackgroundColor(props)};
  border-radius: 8px;
  margin-bottom: 8px;
  display: inline-block;
`;

export const Icon = styled.i`
  margin-right: 8px;
  color: ${variables.brown};
  font-size: 20px;
`;

export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`;

export const CancelRemoveButton = styled(Button)`
  background-color: ${variables.red};
`;

export const Info = styled.div`
  font-size: 16px;
  margin: 4px 10px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export const contactData = styled.textarea`
  resize: none;
  border: none;
  font-weight: bold;
  font-size: 16px;
  background-color: transparent;
  text-align: left;
  max-height: 20px;
  width: 100%;
  vertical-align: middle;
`;
