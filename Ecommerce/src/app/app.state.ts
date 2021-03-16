import { currentUser } from './Store/models/user.model';
import { Carrello } from './Store/models/carrello.model';


export interface AppState {
  readonly users: currentUser[];
  readonly carrello: Carrello[];
}
