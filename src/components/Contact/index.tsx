//Externl Dependencies
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
//Internal Dependendies
import * as S from './styles';
import { Button, SaveButton } from '../../styles';
import ContactClass from '../../models/contact';
import { edit, remove } from '../../Redux/contacts/slice';

type Props = ContactClass;

const Contact = ({
  name,
  mail: originalMail,
  telNumber: originalTelNumber,
  category,
  id,
}: Props) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [mail, setEmail] = useState('');
  const [telNumber, setTelNumber] = useState<number>(originalTelNumber || 0);

  useEffect(() => {
    if (originalMail != null || originalTelNumber != null) {
      setEmail(originalMail);
      setTelNumber(originalTelNumber);
    }
  }, [originalMail, originalTelNumber]);

  const cancelEdit = () => {
    setIsEditing(false);
    setEmail(originalMail);
    setTelNumber(originalTelNumber);
  };

  return (
    <S.Card>
      <S.Tag category={category}>{category}</S.Tag>
      <S.Title>
        {isEditing && <em>Editing: </em>}
        {name}
      </S.Title>
      <S.Info>
        <S.Icon className="bi-telephone-fill" />
        <S.contactData
          disabled={!isEditing}
          value={telNumber}
          onChange={(event) => setTelNumber(Number(event.target.value))}
        />
      </S.Info>
      <S.Info>
        <S.Icon className="bi-envelope-at-fill" />
        <S.contactData
          disabled={!isEditing}
          value={mail}
          onChange={(event) => setEmail(event.target.value)}
        />
      </S.Info>

      <S.ActionBar>
        {isEditing ? (
          <>
            <SaveButton
              onClick={() => {
                dispatch(
                  edit({
                    name,
                    category,
                    mail,
                    telNumber,
                    id,
                  })
                );
                setIsEditing(false);
                console.log(telNumber);
              }}
            >
              Save
            </SaveButton>
            <S.CancelRemoveButton onClick={cancelEdit}>Cancel</S.CancelRemoveButton>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>Edit</Button>
            <S.CancelRemoveButton onClick={() => dispatch(remove(id))}>Remove</S.CancelRemoveButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  );
};

export default Contact;
