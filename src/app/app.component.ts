import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModalhomeComponent } from './modalhome/modalhome.component';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User, firestore } from 'firebase';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  modalRef: BsModalRef;
  user: Observable<any[]>;
  constructor(private modalService: BsModalService) {}

  openModal(){
    this.modalRef = this.modalService.show(ModalhomeComponent);

  }
  ngOnInit(){

  
  }

  

}
