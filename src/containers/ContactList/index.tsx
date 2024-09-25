//ExternalDependencies
import { useSelector } from 'react-redux';
//InternalDependencies
import { RootState } from '../../Redux/store';
import Contact from '../../components/Contact';
import * as S from './styles';

const ContactList = () => {
  const { itens } = useSelector((state: RootState) => state.contacts);
  const { term, criterion, value } = useSelector((state: RootState) => state.filter);

  const filterContact = () => {
    let filteredContacts = itens;
    if (term !== undefined) {
      filteredContacts = filteredContacts.filter(
        (item) => item.name.toLowerCase().search(term.toLocaleLowerCase()) >= 0
      );

      if (criterion === 'category') {
        filteredContacts = filteredContacts.filter((item) => item.category === value);
      }
      return filteredContacts;
    } else {
      return itens;
    }
  };

  const showFilterResults = (quantity: number) => {
    let message = '';
    const complement = term !== undefined && term.length > 0 ? `e "${term}"` : ``;

    if (criterion === 'all') {
      message = `${quantity} contact(s) found as: All ${complement}`;
    } else {
      message = `${quantity} contacts(s) found as: "${`${criterion}: ${value}`}" ${complement}`;
    }
    return message;
  };

  const contacts = filterContact();
  const message = showFilterResults(contacts.length);

  return (
    <S.Container>
      <S.Message>{message}</S.Message>
      <S.List>
        {contacts.map((t) => (
          <li key={t.telNumber}>
            <Contact name={t.name} mail={t.mail} telNumber={t.telNumber} category={t.category} />
          </li>
        ))}
      </S.List>
    </S.Container>
  );
};

export default ContactList;
