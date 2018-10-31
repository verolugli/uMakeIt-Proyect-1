import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
usuarioList: AngularFireList<any>;

//Vacio pero para poder seleccionar un usuario
selectedUsuario: Usuario = new Usuario();

  constructor(private firebase1 : AngularFireDatabase) { }
//Para obtener el usuario de la base de datos, coleccion de usuarios
  getUsuarios(){
    return this.usuarioList =  this.firebase1.list('Usuarios');
}

//Insertar usuario
insertUsuario(usuario: Usuario){
  this.usuarioList.push({
    name: usuario.name,
    password: usuario.password,
    address: usuario.address,
    phone: usuario.phone
  })

}

//Actualizar un usuario segun su key
updateUsuario(usuario: Usuario){

  this.usuarioList.update(usuario.key, {
    name: usuario.name,
    password: usuario.password,
    address: usuario.address,
    phone: usuario.phone
  });
}
//Eliminar un usuario
deleteUsuario(key: string){
  this.usuarioList.remove(key);
}
}
