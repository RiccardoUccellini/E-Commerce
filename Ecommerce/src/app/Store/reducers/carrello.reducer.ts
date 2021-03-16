import { Action } from '@ngrx/store'
import { Carrello } from './../models/carrello.model'
import * as CarrelloActions from './../actions/carrello.actions'

// // Section 1
// const initialState: Carrello = {
//   id: 0,
//   itemType: 'Nessun articolo presente',
//   itemColor: '',
//   itemText: '',
//   textColor: '',
//   itemPrice: ''
// }

// Section 2
export function carrelloReducer(state: Carrello[] = [], action: CarrelloActions.Actions) {

    // Section 3
    switch(action.type) {
        case CarrelloActions.ADD_ITEM:
            return [...state, action.payload];

        case CarrelloActions.REMOVE_ITEM:
          const array = [...state];
          array.splice(action.payload, 1);
          return array;

        default:
            return state;
    }
}
