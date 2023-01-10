import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import categoryReducer from './reducers/categoryReducer';
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';
import userReducer from './reducers/userReducer';

export const store = configureStore({
  reducer: {
    productReducer,
    categoryReducer,
    cartReducer,
    userReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
