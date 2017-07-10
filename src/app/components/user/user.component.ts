import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;

  user_component = "Hello Design ZM";
  constructor() {
    console.log('consturctor run ...');
  }

  ngOnInit() {
    console.log('ngOnInit run ...');
    this.name = 'Steve Smmith';
    this.age = 25;
    this.address = {
      street:'50 Main st',
      city: 'Boston',
      state: 'MA'
    }
  }

}


interface Address{
  street: string;
  city:string;
  state:string;
}
