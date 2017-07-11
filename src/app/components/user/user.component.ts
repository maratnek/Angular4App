import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

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
  hobbies:string[];
  hello: any;
  posts:Post[];
  isEdit:boolean;

  user_component = "Hello Design ZM";

  constructor(private dataService:DataService) {
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
    };
    this.hobbies = ['Write code', 'Watch movies', 'Listen to music'];
    this.hello = 'hello';
    this.isEdit = false;

    this.dataService.getPosts().subscribe((posts)=>{
        this.posts = posts;
    });
  }

  onClick(){
    this.name='Brad Travercy';
    this.hobbies.push('New Hobby');
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for (let i = 0; i < this.hobbies.length; i++) {
      if(hobby == this.hobbies[i])
        this.hobbies.splice(i,1);
    }
  }

}

interface Address{
  street: string;
  city:string;
  state:string;
}

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
