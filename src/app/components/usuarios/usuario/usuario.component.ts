import { Component, OnInit } from '@angular/core';
//Class Usuario
import { Usuario } from '../../../models/usuario';
//Service
import { UsuarioService } from '../../../services/usuario.service';
import { NgForm } from '@angular/forms'; 
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsuarios();
    this.resetForm();
  }
  //Agregar dato y al mismo tiempo dejar vacio los espacios
  onSubmit(usuarioForm: NgForm){
    this.usuarioService.insertUsuario(usuarioForm.value);
    this.resetForm(usuarioForm);
}

  resetForm(usuarioForm?: NgForm){
    if(usuarioForm != null)
    usuarioForm.reset();
    this.usuarioService.selectedUsuario =  new Usuario();
}

}
