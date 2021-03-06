import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalizza',
  templateUrl: './personalizza.component.html',
  styleUrls: ['./personalizza.component.scss']
})
export class PersonalizzaComponent implements OnInit {

  colors:any;
  list:any;
  selected :any;
  constructor() {
    this.list = [
      { value: '1', name: 'FELPA'},
      { value: '2', name: 'T-SHIRT'},
      { value: '3', name: 'SCIARPA'},
      { value: '4', name: 'SCARPE'}
    ];
    this.colors = [
      { value: '1', bg: 'white' },
      { value: '2', bg: 'black' },
      { value: '3', bg: 'red' },
      { value: '4', bg: 'pink' },
      { value: '5', bg: 'green' }
    ];

  }
  select(item) {
      this.selected = item;
  };
  isActive(item) {
      return this.selected === item;
  };

  addToCart(data: any){
    console.log(data);
  }

  ngOnInit(): void {}

  }



