import { configureStore } from '@reduxjs/toolkit';
import radioReducer from '../reducer/RadioSlice';
import discountReducer from '../reducer/DisSlice';
import memoReducer from '../reducer/MemoSlice';

export const store = configureStore({
  reducer: {
    radio: radioReducer,
    discount: discountReducer,
    memo: memoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;