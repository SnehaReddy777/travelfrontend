import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
   public placename;
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.getplace()
  }
   getplace(){
   this.placename=this.dataservice.getdata()
   }
}
