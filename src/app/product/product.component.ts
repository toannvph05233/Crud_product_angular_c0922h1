import { Component, OnInit } from '@angular/core';
import {Product} from "../model/Product";
import {FormControl, FormGroup, Validators} from "@angular/forms";
declare var $:any;



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  formCreate : FormGroup = new FormGroup({
    id: new FormControl("0", [Validators.required,Validators.max(50)]),
    name: new FormControl("0"),
    img: new FormControl("0"),
    price: new FormControl("0"),
  })

  products: Product[] = [
    new Product(1,"Người yêu Mạnh","https://tinhayvip.com/wp-content/uploads/2022/06/vsbg-5.jpg",300),
    new Product(2,"Người yêu Sơn","https://tinhayvip.com/wp-content/uploads/2022/06/vsbg-09.jpg",310)]
  constructor() { }

  ngOnInit(): void {
  }

  createProduct(){
    this.products.push(this.formCreate.value)
    $('#myModal').modal('hide');

  }

}
