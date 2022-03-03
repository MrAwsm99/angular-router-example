import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  itemsInCart = [
    {"id":"1",
    "image":"http://drive.google.com/uc?export=view&id=1f-kz4tJTenPFK3sHkpI5rnEBMmBSGZTv",
    "jobTitleName":"Developer",
    "firstName":"Romin",
    "lastName":"Irani",
    "preferredFullName":"Romin Irani",
    "employeeCode":"E1",
    "region":"CA",
    "phoneNumber":"408-1234567",
    "emailAddress":"romin.k.irani@gmail.com"}
      ]

      addDetails(details:any){
        this.itemsInCart.push(details);

    }

}
