import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type itemType = {
  itemId: number;
  itemName: string;
  itemPrice: number;
  itemTotal: number;
};
export type stateType = {
  value: itemType[];
};
const initialState: stateType = {
  value: [],
};

export const orderSlice = createSlice({
  name: 'orderList',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<itemType>) => {
      state.value.push(action.payload);
    },
    remove: (state, action: PayloadAction<itemType>) => {
      state.value = state.value.filter((item) => item.itemId !== action.payload.itemId);
    },
  },
});
export const { add, remove } = orderSlice.actions;
export default orderSlice.reducer;
