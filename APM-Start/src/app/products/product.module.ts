import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from '../product-list/product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe'; 
import { ProductDetailGuard } from '../product-detail.guard';

import { BrowserModule } from '@angular/platform-browser';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild([{ path: 'products', component: ProductListComponent },
    {
      path: 'products/:id',
      canActivate: [ProductDetailGuard],
      component: ProductDetailComponent
    }]),
    SharedModule
  ]
})
export class ProductModule { }
