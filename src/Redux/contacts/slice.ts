import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Contact from '../../models/contact';

type ContactState = {
  itens: Contact[];
};

const initialState: ContactState = {
  itens: [],
};

const contactState = createSlice({
  name: `contacts`,
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((contact) => contact.telNumber !== action.payload);
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.itens.findIndex((c) => c.telNumber === action.payload.telNumber);
      if (contactIndex >= 0) {
        state.itens[contactIndex] = action.payload;
      }
    },
    register: (state, action: PayloadAction<Contact>) => {
      // Busca no array `state.itens` se já existe um contato com o mesmo nome ou número de telefone.
      const contactAlreadyExists = state.itens.find(
        (contact) =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase() || // Compara os nomes de forma case-insensitive.
          contact.telNumber === action.payload.telNumber // Verifica se o número de telefone já existe.
      );

      // Se o contato já existir (mesmo nome ou mesmo número de telefone), exibe um alerta.
      if (contactAlreadyExists) {
        alert(`Contact with this name/number already exists`);
      } else {
        // Cria um novo contato com os dados fornecidos pelo usuário, sem alterar o número de telefone.
        const newContact = {
          ...action.payload, // Copia todos os dados fornecidos no payload, incluindo o número de telefone inserido.
        };

        // Adiciona o novo contato ao array `state.itens`.
        state.itens.push(newContact);
      }
    },
  },
});
