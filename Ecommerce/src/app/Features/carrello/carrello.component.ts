
import { Carrello } from '../../Store/models/carrello.model';
import { AppState } from '../../app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CarrelloActions from '../../Store/actions/carrello.actions';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {

  pageNum:number;
  carrello: Observable<Carrello[]>;

  constructor(private store: Store<AppState>) {

    this.carrello = this.store.select(state => state.carrello);

    this.pageNum = 1;
  }

  ngOnInit(): void {

  }

  deleteItem(index) {
    this.store.dispatch(new CarrelloActions.RemoveFromCart(index));
  }

  choosePage(num: number) {
    this.pageNum = num;
  }

}
