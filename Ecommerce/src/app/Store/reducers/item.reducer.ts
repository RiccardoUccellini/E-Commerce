// product.reducer.ts
import { Item } from '../models/item.model';
export const ADD_ITEM = 'ADD_ITEM';
export function addItemReducer(state: Item[] = [], action: any) {
  switch (action.type) {
    case ADD_ITEM:
        return [...state, action.payload];
    default:
        return state;
    }
}
