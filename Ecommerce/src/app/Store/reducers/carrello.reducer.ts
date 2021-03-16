import { Action } from '@ngrx/store'
import { Carrello } from './../models/carrello.model'
import * as CarrelloActions from './../actions/carrello.actions'

export function carrelloReducer(state: Carrello[] = [], action: CarrelloActions.Actions) {

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
