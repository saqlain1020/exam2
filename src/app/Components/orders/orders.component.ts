import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  myGroup: FormGroup =
     this.formBuilder.group(
      {
        Name : new FormControl(''),
        Address : new FormControl(''),
        Image : new FormControl(''),
        Item : new FormControl(''),
        Qty : new FormControl(''),

      }
    );




  constructor(private appService: AppService,private formBuilder: FormBuilder,) { }

  ngOnInit(): void {

  }

  onSubmit(){
    this.appService.orders.push(this.myGroup.value)
    console.log(this.appService.orders)
  }

}
