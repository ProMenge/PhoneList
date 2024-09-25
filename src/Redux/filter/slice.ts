import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as enums from '../../utils/enums/Contact';

type FilterState = {
  term?: string;
  criterion: 'category' | 'all';
  value?: enums.Category;
};

const initialState: FilterState = {
  term: '',
  criterion: 'all',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload;
    },
    changeFilter: (state, action: PayloadAction<FilterState>) => {
      state.criterion = action.payload.criterion;
      state.value = action.payload.value;
    },
  },
});

export const { changeTerm, changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
