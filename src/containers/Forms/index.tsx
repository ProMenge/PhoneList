import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../Redux/contacts/slice';
import { Form, Option, Options, Title } from './style';

import * as enums from '../../utils/enums/Contact';
import { Campo, MainContainer, SaveButton } from '../../styles';

const Forms = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState(``);
  const [telNumber, setTelNumber] = useState(Number);
  const [mail, setMail] = useState('');
  const [category, setCategory] = useState(enums.Category.PERSONAL);

  const registerContact = (event: FormEvent) => {
    event.preventDefault();

    dispatch(
      register({
        name,
        telNumber,
        mail,
        category,
      })
    );
    navigate('/');
  };

  return (
    <MainContainer>
      <Title>New task</Title>
      <Form onSubmit={registerContact}>
        <Campo
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Name"
          required
        />
        <Campo
          type="number"
          value={telNumber}
          onChange={(event) => setTelNumber(Number(event.target.value))}
          placeholder="(00)00000-0000"
          required
        />
        <Campo
          value={mail}
          onChange={(event) => setMail(event.target.value)}
          type="mail"
          placeholder="Mail"
          required
        />

        <Options>
          <p>Category</p>
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
