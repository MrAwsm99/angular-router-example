import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-router';

  constructor(public dt:DataService){}


    ngOnInit(){
      this.dt.getdata().subscribe((data) => this.show(data));
      

    }
    dtdata:any;
    show(data:any){
      return this.dtdata = data;
    }
}
