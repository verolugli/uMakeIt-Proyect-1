import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AdminComponent } from './admin/admin.component';
import { ModalhomeComponent } from './modalhome/modalhome.component';
import { OrdenComponent } from './orden/orden.component';
import { HistoriaComponent } from './historia/historia.component';
import { FormsModule } from '@angular/forms';

//firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from 'angularfire2';
//component
import { ProductsComponent } from './components/products/products.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuariosListComponent } from './components/usuarios/usuarios-list/usuarios-list.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductComponent } from './components/products/product/product.component';
import { UsuarioComponent } from './components/usuarios/usuario/usuario.component';
//service
import { ProductService } from './services/product.service';
import { UsuarioService } from './services/usuario.service';
//models
import { Usuario } from './models/usuario';
import { Product } from './models/product';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: SignInComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'orders', component: OrdenComponent },
  { path: 'history', component: HistoriaComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EncabezadoComponent,
    SignInComponent,
    AdminComponent,
    ModalhomeComponent,
    OrdenComponent,
    HistoriaComponent,
    ProductsComponent,
    UsuariosComponent,
    UsuariosListComponent,
    ProductListComponent,
    ProductComponent,
    UsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase1),
    AngularFirestoreModule, // caracteristicas de la base de datos
    AngularFireAuthModule, // funciones de autenticacion
    AngularFireStorageModule, // funciones de almacenamiento
    AngularFireDatabaseModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    AngularFontAwesomeModule,
    RouterModule.forRoot(
      appRoutes, 
      { enableTracing: true })
  ],
  providers: [
    UsuarioService,
    ProductService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalhomeComponent],
  exports: [RouterModule],
  
  
})
export class AppModule { }
