import { Component, OnInit } from '@angular/core';
//Service
import { ProductService } from '../../../services/product.service';
//Class Producto
import { Product } from '../../../models/product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[];
  
  constructor(
    private productService: ProductService
  ) { }
   
  ngOnInit() {
    this.productService.getProducts()
    .snapshotChanges().subscribe(item => {
      this.productList=[];
      item.forEach(elemento => {
        let x = elemento.payload.toJSON();
        x["$key"] = elemento.key;
        this.productList.push(x as Product);
      })
    })
  }
  onEdit(product: Product){
      this.productService.selectedProducto = Object.assign({},product);
  }
  onDelete($key: string){
    this.productService.deleteProduct($key);
  }

}
