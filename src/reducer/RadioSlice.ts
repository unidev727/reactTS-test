import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RadioState {
  selectedOption: string;
}

const initialState: RadioState = {
  selectedOption: 'option1',
};

const radioSlice = createSlice({
  name: 'radio',
  initialState,
  reducers: {
    selectOption: (state, action: PayloadAction<string>) => {
      state.selectedOption = action.payload;
    },
  },
});

export const { selectOption } = radioSlice.actions;
export default radioSlice.reducer;