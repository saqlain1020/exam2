import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './Components/layout/layout.component';
import { OrdersTableComponent } from './Components/orders-table/orders-table.component';
import { OrdersComponent } from './Components/orders/orders.component';


const routes: Routes = [
  { path: 'home', component: LayoutComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'orders-details', component: OrdersTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
