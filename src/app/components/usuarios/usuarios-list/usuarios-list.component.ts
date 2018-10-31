import { Component, OnInit } from '@angular/core';
//Service
import { UsuarioService } from '../../../services/usuario.service';
//Class Usuario
import { Usuario } from '../../../models/usuario';
@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit {
  usuarioList: Usuario[];

  constructor( private usuarioService: UsuarioService) { }
  
  ngOnInit() {

    this.usuarioService.getUsuarios()
    .snapshotChanges().subscribe(item => {
      this.usuarioList=[];
      item.forEach(elemento => {
        let x = elemento.payload.toJSON();
        x["$key"] = elemento.key;
        this.usuarioList.push(x as Usuario);
      })

    })

  }
  onEdit(product: Usuario){
    this.usuarioService.selectedUsuario = Object.assign({},product);
}
onDelete($key: string){
  this.usuarioService.deleteUsuario($key);
}


}
