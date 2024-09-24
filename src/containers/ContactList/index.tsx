//ExternalDependencies
import { useSelector } from 'react-redux';
//InternalDependencies
import { RootState } from '../../Redux/store';
import Contact from '../../components/Contact';
import * as S from './styles';

const ContactList = () => {
  const { itens } = useSelector((state: RootState) => state.contacts);
  return (
    <S.Container>
      <S.List>
        {itens.map((t) => (
          <li key={t.telNumber}>
            <Contact name={t.name} mail={t.mail} telNumber={t.telNumber} category={t.category} />
          </li>
        ))}
      </S.List>
    </S.Container>
  );
};

export default ContactList;
