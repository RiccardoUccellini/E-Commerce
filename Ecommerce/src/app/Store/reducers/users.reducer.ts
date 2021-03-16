// product.reducer.ts
import { currentUser } from '../models/user.model';
export const ADD_USER = 'ADD_USER';
export function addUserReducer(state: currentUser[] = [], action: any) {
  switch (action.type) {
    case ADD_USER:
        return [...state, action.payload];
    default:
        return state;
    }
}
