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
    // add: (state, action: PayloadAction<itemType>) => {
    //   state.value.push(action.payload);
    // },
    add: (state, action: PayloadAction<itemType>) => {
      const existingItem = state.value.find((item) => item.itemId === action.payload.itemId);
      if (existingItem) {
        existingItem.itemTotal += action.payload.itemTotal;
      } else {
        state.value.push(action.payload);
      }
    },
    remove: (state, action: PayloadAction<itemType>) => {
      state.value = state.value.filter((item) => item.itemId !== action.payload.itemId);
    },
    removeAll: (state) => {
      state.value = state.value = [];
    },
  },
});
export const { add, remove, removeAll } = orderSlice.actions;
export default orderSlice.reducer;
