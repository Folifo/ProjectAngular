import { Component, OnInit } from '@angular/core';
import {Contact} from "../about/model/model.contacts";
import {ContactService} from "../../services/contacts.services";

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  contact:Contact=new Contact();
  mode:number=1;
  constructor(public contactsServices:ContactService) { }

  ngOnInit() {
  }
saveContact(){
  this.contactsServices.save(this.contact)
    .subscribe(data=>{
      this.contact=data;
      this.mode=2;
      console.log(data);
    },err=>{console.log(err)})

}
  newcontact(){
    this.mode=1;
    this.contact=new Contact();
  }
}
