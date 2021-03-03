import { createFeatureSelector } from '@ngrx/store';
import * as authentication from '../store/reducers/authentication.reducer';

export interface AppState {
  authenticationState: authentication.State;
}

export const reducers = {
  authentication: authentication.reducer
};

export const selectAuthenticationState = createFeatureSelector<AppState>('authentication');