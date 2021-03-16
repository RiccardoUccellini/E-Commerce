import { Action } from '@ngrx/store'
import { currentUser } from './../models/user.model'
import * as usersActions from './../actions/users.actions'

export function usersReducer(state: currentUser[] = [], action: usersActions.Actions) {

    switch(action.type) {
        case usersActions.ADD_USER:
            return [...state, action.payload];

        default:
            return state;
    }
}
