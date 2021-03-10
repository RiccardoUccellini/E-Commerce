import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list: any;
  private itemType: any;


  constructor() {
    this.list = [
      { value: '1', name: 'FELPA', img: "../../../assets/FELPA.png", price: 70},
      { value: '2', name: 'T-SHIRT', img: "../../../assets/T-SHIRT.png",price: 20},
      { value: '3', name: 'SCIARPA', img: "../../../assets/SCIARPA.png",price: "piero"},
      { value: '4', name: 'SCARPE', img: "../../../assets/SCARPE.png",price: "tonipigo97"}
    ];


  }

  ngOnInit(): void {
  }


}
