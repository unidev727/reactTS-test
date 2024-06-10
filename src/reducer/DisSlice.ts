import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DisState {
  btnState: boolean;
  inputedContent: string;
}

const initialState: DisState = {
  btnState: false,
  inputedContent: '',
};

const discountSlice = createSlice({
  name: 'discount',
  initialState,
  reducers: {
    setContent: (state, action: PayloadAction<string>) => {
      state.inputedContent = action.payload;
    },
    setBtnState: (state, action: PayloadAction<boolean>) => {
      state.btnState = action.payload;
    },
  },
});

export const { setContent, setBtnState } = discountSlice.actions;
export default discountSlice.reducer;