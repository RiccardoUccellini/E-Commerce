import { Item } from '../../Store/models/item.model';
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

  items: Observable<Item[]>;

  constructor(private store: Store<AppState>) {

    this.items = this.store.select(state => state.item);
  }

  ngOnInit(): void {
  }

}
