import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminOrderDetailsComponent } from './admin-order-details/admin-order-details.component';
import { CommonserviceService } from '../commonservice.service';
import { UpdateProductComponent } from './update-product/update-product.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminOrderDetailsComponent,
    UpdateProductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CommonserviceService]
})
export class AdminModule { }
