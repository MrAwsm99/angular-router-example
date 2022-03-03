import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'aboutus', component:AboutusComponent},
  {path: 'contactus', component:ContactusComponent},
  {path: 'products', component:ProductsComponent},
  {path: 'cart', component:CartComponent},
  {path: '**', component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
