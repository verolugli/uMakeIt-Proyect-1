import { Component, OnInit } from '@angular/core';
//Product class
import { Product } from '../../../models/product';
//Service
import { ProductService } from '../../../services/product.service';
import { NgForm } from '@angular/forms'; 
 
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {

      this.productService.getProducts();
      this.resetForm();

  }
  //Agregar dato y al mismo tiempo dejar vacio los espacios
  onSubmit(productoForm: NgForm){
      if(productoForm.value.$key == null)
        this.productService.insertProduct(productoForm.value);
     else
      this.productService.updateProduct(productoForm.value);

    this.resetForm(productoForm);
  }

  resetForm(productoForm?: NgForm){
      if(productoForm != null)
      productoForm.reset();
      this.productService.selectedProducto = new Product();
  }

}
