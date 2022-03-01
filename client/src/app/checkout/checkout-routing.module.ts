import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { CheckoutModule } from './checkout.module';
import { CheckoutSucessComponent } from './checkout-sucess/checkout-sucess.component';

const routes: Routes = [
  { path: '', component: CheckoutComponent },
  { path: 'sucess', component: CheckoutSucessComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutRoutingModule {}
