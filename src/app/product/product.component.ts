import { Component, OnInit } from '@angular/core';
import {Product} from "../model/Product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product:Product = new Product(0,"0","0",0);

  products: Product[] = [
    new Product(1,"Người yêu Mạnh","https://tinhayvip.com/wp-content/uploads/2022/06/vsbg-5.jpg",300),
    new Product(2,"Người yêu Sơn","https://tinhayvip.com/wp-content/uploads/2022/06/vsbg-09.jpg",310)]
  constructor() { }

  ngOnInit(): void {
  }

  createProduct(){
    let productNew = new Product(this.product.id,this.product.name,this.product.img,this.product.price);
    this.products.push(productNew);
  }

}
