// Section 1
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { currentUser } from '../models/user.model'

// Section 2
export const ADD_USER = '[USERS] Add'

// Section 3
export class AddUser implements Action {
    readonly type = ADD_USER
    constructor(public payload: currentUser) {}
}


// Section 4
export type Actions = AddUser
