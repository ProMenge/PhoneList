//ExternalDependencies

//InternalDependencies
import Contact from '../../components/Contact';
import * as S from './styles';

const ContactList = () => {
  return (
    <S.Container>
      <S.List>
        <li>
          <Contact />
        </li>
        <li>
          <Contact />
        </li>
        <li>
          <Contact />
        </li>
        <li>
          <Contact />
        </li>
        <li>
          <Contact />
        </li>
      </S.List>
    </S.Container>
  );
};

export default ContactList;
