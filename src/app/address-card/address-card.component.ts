import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  
  @Input("user") user: User;///input variable. "name" in parenthesis needs to be same name as app.component.html
  isCollapsed : boolean = true;
  constructor() {
    
   }

  toggleCollapse(){
     this.isCollapsed = !this.isCollapsed;//easy way to change boolean true/false
   }

  ngOnInit() {
    }
  }


