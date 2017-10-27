import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {ContactService} from "../../services/contacts.services";
import {Router} from "@angular/router";
import {Contact} from "../about/model/model.contacts";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContacts:any;
  motCle:string="";
  currentPage:number=0;
  size:number=5;
  pages:Array<number>;
  constructor(public contactservice:ContactService,public router:Router) { }

  ngOnInit() {
    this.contacts();
  }

  contacts(){
    this.contactservice.getContacts()
      .subscribe(data=>{
        this.pageContacts=data;
        this.pages=new Array(data.totalPages);
        console.log(data.content);
      },err=>{console.log(err)})
  }
  chercher(){
    this.contactservice.searchContacts(this.motCle,this.currentPage,this.size)
      .subscribe(data=>{
        this.pageContacts=data;
        this.pages=new Array(data.totalPages);
        console.log(data.content);
      },err=>{console.log(err)})
  }
  gotoPage(i:number){
    this.currentPage=i;
    this.chercher();
  }

  onEditContact(id:number){
    this.router.navigate(['editcontact',id]);
  }
  onDeleteContact(c:Contact){
    let confirm=window.confirm("Etes-vous sûre de supprimer?");
    if(confirm==true){
      this.contactservice.deleteContact(c.id)
        .subscribe(data=>{
          this.pageContacts.content.splice(this.pageContacts.content.indexOf(c),1);
        },err=>{console.log(err)})
    }

  }
}
