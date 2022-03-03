import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public dt:DataService){}


  ngOnInit(){
    this.dt.getdata().subscribe((data) => this.show(data));
    

  }
  dtdata:any;
  show(data:any){
    return this.dtdata = data;
  }
  details:any=[];
@Output() newItemEvent = new EventEmitter<any>();
addItem(dtdata: any){
  this.newItemEvent.emit(dtdata);
}
}
