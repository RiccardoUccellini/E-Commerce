import { Item } from '../../Store/models/item.model';
import { AppState } from '../../app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-personalizza',
  templateUrl: './personalizza.component.html',
  styleUrls: ['./personalizza.component.scss']
})
export class PersonalizzaComponent implements OnInit {

  list: any;
  items: Observable<Item[]>;
  constructor(private store: Store<AppState>) {
    this.list = [
      { value: '1', name: 'FELPA'},
      { value: '2', name: 'T-SHIRT'},
      { value: '3', name: 'SCIARPA'},
      { value: '4', name: 'SCARPE'}
    ];

    this.items = this.store.select(state => state.item);
  }

  addToCart(itemType:any, itemColor:any, itemText:any, textColor:any) {
    if (itemType && itemColor) {
      alert('Articolo aggiunto al carrello!');
      console.log(itemColor + '' + itemType + '' + itemText + '' + textColor);
    this.store.dispatch({
      type: 'ADD_ITEM',
      payload: <Item> {
        itemType: itemType,
        itemColor: itemColor,
        itemText: itemText,
        textColor: textColor
      }
    });
    }
    else {
      alert('Per continuare, seleziona articolo e colore!');
      return;
    }

  }

  ngOnInit() {}

  }



