import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MemoState {
  memoContent: string;
}

const initialState: MemoState = {
  memoContent: '',
};

const memoSlice = createSlice({
  name: 'memo',
  initialState,
  reducers: {
    setMemo: (state, action: PayloadAction<string>) => {
      state.memoContent = action.payload;
    },
  },
});

export const { setMemo } = memoSlice.actions;
export default memoSlice.reducer;