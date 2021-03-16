// Section 1
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Carrello } from '../models/carrello.model'

// Section 2
export const ADD_ITEM       = '[CARRELLO] Add'
export const REMOVE_ITEM    = '[CARRELLO] Remove'

// Section 3
export class AddToCart implements Action {
    readonly type = ADD_ITEM
    constructor(public payload: Carrello) {}
}

export class RemoveFromCart implements Action {
    readonly type = REMOVE_ITEM
    constructor(public payload: number) {}
}

// Section 4
export type Actions = AddToCart | RemoveFromCart
