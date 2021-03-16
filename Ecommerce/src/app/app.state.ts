import { Item } from './Store/models/item.model';
import { currentUser } from './Store/models/user.model';


export interface AppState {
  readonly item: Item[];
  readonly currentUser: currentUser[];
}
