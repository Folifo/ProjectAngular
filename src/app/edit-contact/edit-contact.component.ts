import { Component, OnInit } from '@angular/core';
import {Contact} from "../about/model/model.contacts";
import {ActivatedRoute} from "@angular/router";
import {ContactService} from "../../services/contacts.services";

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
 mode:number=1;
  contact:Contact=new Contact();
  idContact:number;
  constructor(public activatedRoute:ActivatedRoute,public contactservice:ContactService) {
    this.idContact=activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.contactservice.getContact(this.idContact)
      .subscribe(data=>{
        this.contact=data;
        console.log(this.contact);
      },err=>{
        console.log(err);
      })
  }
updateContact(){
this.contactservice.update(this.contact)
  .subscribe(data=>{
    this.contact=data;
    this.mode=2;
  },err=>{
    console.log(err);
  })
}
}
