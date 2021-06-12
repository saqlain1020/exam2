import { Component, OnInit } from '@angular/core';
import { AppService } from './../../app.service';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css']
})
export class OrdersTableComponent implements OnInit {

  orders = this.appService.orders;
  constructor(private appService:AppService) { }

  ngOnInit(): void {
    console.log(this.appService.orders)
  }

}
