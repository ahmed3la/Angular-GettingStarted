import { ProductService } from './product-service';
import { Component, OnInit } from '@angular/core';

import { IProduct } from './IProduct';

@Component({
  selector: 'pm-product',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']

})
export class ProductListComponent implements OnInit {
  pageTitel = 'Prodect List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  _listFilter: string;
  filterProducts: IProduct[];
  errorMessage: string;
  products: IProduct[];

  constructor(private productService: ProductService) {
    // this._productService = productService;

    this.listFilter = '';
  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filterProducts = this.products;

      },
      error: err => this.errorMessage = err
    });

  }

  prformFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLowerCase().indexOf(filterBy) !== -1);
  }

  toggelmage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    this.pageTitel = `Product List: ${message} `;
  }

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filterProducts = this.listFilter ? this.prformFilter(this.listFilter) : this.products;
  }




}
