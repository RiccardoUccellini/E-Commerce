import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Store/models/item.model';
import { ItemsService } from '../../services/items/items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list: any;
  private itemType: any;


  constructor(private ItemsService: ItemsService) {

    this.ItemsService.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.list = data;
    })

  }

  ngOnInit(): void {
  }


}

