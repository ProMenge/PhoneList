import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../Redux/contacts/slice';
import { Form, Option, Options, Subtitle, Title } from './style';
import InputMask from 'react-input-mask';
import * as enums from '../../utils/enums/Contact';
import { Campo, MainContainer, SaveButton } from '../../styles';

const Forms = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [telNumber, setTelNumber] = useState('');
  const [mail, setMail] = useState('');
  const [category, setCategory] = useState(enums.Category.PERSONAL);
  const [emailError, setEmailError] = useState(''); // Estado para armazenar o erro de e-mail

  const registerContact = (event: FormEvent) => {
    event.preventDefault();

    // Verifica se o e-mail contém um '@'
    if (!mail.includes('@')) {
      setEmailError('Email must contain @'); // Define a mensagem de erro
      return;
    }

    setEmailError(''); // Limpa a mensagem de erro se o e-mail for válido

    dispatch(
      register({
        name,
        telNumber: Number(telNumber.replace(/\D/g, '')), // Remover a máscara antes de enviar para o estado
        mail,
        category,
      })
    );
    navigate('/');
  };

  return (
    <MainContainer>
      <Title>New Contact</Title>
      <Form onSubmit={registerContact}>
        <Campo
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Name"
          required
        />
        {/* Máscara para o número de telefone */}
        <Campo
          as={InputMask}
          mask="(99) 99999-9999"
          value={telNumber}
          onChange={(event) => setTelNumber(event.target.value)}
          placeholder="(00) 00000-0000"
          required
        />
        <Campo
          value={mail}
          onChange={(event) => setMail(event.target.value)}
          type="string"
          placeholder="Mail"
          required
        />
        {/* Exibe a mensagem de erro em vermelho abaixo do campo de e-mail */}
        {emailError && <p style={{ color: 'red', marginTop: '8px' }}>{emailError}</p>}

        <Subtitle>Category</Subtitle>
        <Options>
          {Object.values(enums.Category).map((category) => (
            <Option key={category}>
              <input
                value={category}
                type="radio"
                name="category"
                id={category}
                onChange={(event) => setCategory(event.target.value as enums.Category)}
              />
              <label htmlFor={category}>{category}</label>
            </Option>
          ))}
        </Options>
        <SaveButton type="submit">Register</SaveButton>
      </Form>
    </MainContainer>
  );
};

export default Forms;
