//Externl Dependencies
import { useState } from 'react';
import { useDispatch } from 'react-redux';
//Internal Dependendies
import * as S from './styles';
import { Button, SaveButton } from '../../styles';
import ContactClass from '../../models/contact';
import { remove } from '../../Redux/contacts/slice';

type Props = ContactClass;

const Contact = ({ name, mail, telNumber, category }: Props) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <S.Card>
      <S.Tag category={category}>{category}</S.Tag>
      <S.Title>
        {isEditing && <em>Editing: </em>}
        {name}
      </S.Title>
      <S.Info>
        <S.Icon className="bi-telephone-fill" />
        {telNumber}
      </S.Info>
      <S.Info>
        <S.Icon className="bi-envelope-at-fill" />
        {mail}
      </S.Info>

      <S.ActionBar>
        {isEditing ? (
          <>
            <SaveButton onClick={() => setIsEditing(false)}>Save</SaveButton>
            <S.CancelRemoveButton onClick={() => setIsEditing(false)}>Cancel</S.CancelRemoveButton>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>Edit</Button>
            <S.CancelRemoveButton onClick={() => dispatch(remove(telNumber))}>
              Remove
            </S.CancelRemoveButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  );
};

export default Contact;
