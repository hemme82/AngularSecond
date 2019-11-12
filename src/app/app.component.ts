import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'second-project';
  user: User;
  inputText: string = "initial Value";
  

  constructor(){
    this.user = new User();
    this.user.name = "Steve Bar";
    this.user.designation = "Software Engineer";
    this.user.address = "1000 Street City State";
    this.user.phone = [
      "123-123-1234",
      "234-234-2345"
    ];
  }
}
