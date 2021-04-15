import { Carrello } from './../../Store/models/carrello.model';

import { Subscription } from 'rxjs';
import { AppState } from '../../app.state';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CarrelloActions from '../../Store/actions/carrello.actions';
import { currentUser } from 'src/app/Store/models/user.model';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {

  pageNum:number;
  carrello: Observable<Carrello[]>;
  userData: Observable<currentUser[]>;
  subscription=new Subscription();
  prodotti:Carrello[]=[];
  totale: number;
  
  

  constructor(private store: Store<AppState>) {

    this.carrello = this.store.select(state => state.carrello);
    this.userData = this.store.select(state => state.users);
    console.log(this.userData);

    this.pageNum = 1;
  
  }

  ngOnInit(): void { 
    this.subscription.add(this.store.pipe(select(this.carrello)

    ).subscribe(prodotti => {

      this.prodotti=prodotti;

    }));

    //prezzo

    this.calcolaPrezzo();

  }



  calcolaPrezzo(){

    this.prodotti.forEach(prodotto => {

      console.log(prodotto.itemPrice)

      this.totale+=prodotto.itemPrice;

    });
   
  }

  deleteItem(index) {
    this.store.dispatch(new CarrelloActions.RemoveFromCart(index));
  }

  choosePage(num: number) {
    this.pageNum = num;
  }

  



  
}
