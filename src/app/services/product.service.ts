import { Injectable } from '@angular/core';
//mport { firebase1 } from "./app.config";
import { Product } from '../models/product';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore'; 

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 productList: AngularFireList<any>;
 selectedProducto: Product = new Product();
 

  constructor(private firebase1 : AngularFireDatabase) { }

  //Para obtener los productos de la base de datos, coleccion de productos
  getProducts(){
      return this.productList =  this.firebase1.list('Products');
  }

  insertProduct(product: Product){
    this.productList.push({
      name: product.name,
      quantity: product.quantity,
      price: product.price,
    })
  }
  
  updateProduct(product: Product){

    this.productList.update(product.key, {
      name: product.name,
      quantity: product.quantity,
      price: product.price,
    });
  }
  
  deleteProduct($key: string){
    this.productList.remove($key);
  }
}
