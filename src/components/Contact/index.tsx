//Externl Dependencies
import { useState } from 'react';
//Internal Dependendies
import * as enums from '../../utils/enums/Contact';
import * as S from './styles';
import { Button, SaveButton } from '../../styles';

const Contact = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <S.Card>
      <S.Tag category={enums.Category.PERSONAL}>
        {enums.Category.PERSONAL}
      </S.Tag>
      <S.Title>
        {isEditing && <em>Editing: </em>}
        Teste
      </S.Title>
      <S.Info>
        <i className="bi-telephone-fill"></i>
      </S.Info>
      <S.Info>
        <i className="bi-envelope-at-fill"></i>
      </S.Info>

      <S.ActionBar>
        {isEditing ? (
          <>
            <SaveButton onClick={() => setIsEditing(false)}>Save</SaveButton>
            <S.CancelRemoveButton onClick={() => setIsEditing(false)}>
              Cancel
            </S.CancelRemoveButton>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>Edit</Button>
            <S.CancelRemoveButton>Remove</S.CancelRemoveButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  );
};

export default Contact;
