import { Item } from '../../Store/models/item.model';
import { AppState } from '../../app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-personalizza',
  templateUrl: './personalizza.component.html',
  styleUrls: ['./personalizza.component.scss']
})

export class PersonalizzaComponent implements OnInit {

  itemId: string;
  itemPrice: string;
  items: Observable<Item[]>;
  id = 0;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {

    this.items = this.store.select(state => state.item);
  }

  addToCart(itemType:any, itemColor:any, itemText:any, textColor:any, itemPrice:any) {
    if (itemType && itemColor) {
      alert('Articolo aggiunto al carrello!');
      this.id += 1;
      // console.log(itemColor + '' + itemType + '' + itemText + '' + textColor);
      this.store.dispatch({
        type: 'ADD_ITEM',
        payload: <Item> {
          id: this.id,
          itemType: itemType,
          itemColor: itemColor,
          itemText: itemText,
          textColor: textColor,
          itemPrice: itemPrice
        }
      });
    }
    else {
      alert('Per continuare, seleziona il colore!');
      return;
    }

  }

  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('itemType');
    this.itemPrice = this.route.snapshot.paramMap.get('itemPrice');
   }

  }



