import { Item } from '../../Store/models/item.model';
import { currentUser } from '../../Store/models/user.model';
import { AppState } from '../../app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {

  userData: Observable<currentUser[]>;
  items: Observable<Item[]>;
  pageNum:number;

  constructor(private store: Store<AppState>) {

    this.items = this.store.select(state => state.item);

    this.pageNum = 1;
  }

  ngOnInit(): void {

  }

  choosePage(num: number) {
    this.pageNum = num;
  }

  deleteItem(id: number) {
    this.store.dispatch({
      type: 'REMOVE_ITEM',
      payload: <Item> {
        id: id
      }
    });
    alert("item deleted");
  }

}
