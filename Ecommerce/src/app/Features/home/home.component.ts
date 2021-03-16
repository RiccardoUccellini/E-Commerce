import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items/items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list: any;
  private itemType: any;


  constructor(private ItemsService: ItemsService, private router: Router) {

    this.ItemsService.sendGetRequest().subscribe((data: any[])=>{
      this.list = data;
    })

  }

  ngOnInit(): void {
  }

  redirect(type, price) {
    this.router.navigateByUrl("/personalizza/"+type+"/"+price);
  }

}

