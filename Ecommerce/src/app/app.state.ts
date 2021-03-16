import { currentUser } from './Store/models/user.model';
import { Carrello } from './Store/models/carrello.model';


export interface AppState {
  readonly currentUser: currentUser[];
  readonly carrello: Carrello[];
}
