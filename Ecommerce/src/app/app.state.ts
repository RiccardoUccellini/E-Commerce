import { Item } from './Store/models/item.model';

export interface AppState {
  readonly item: Item[];
}
