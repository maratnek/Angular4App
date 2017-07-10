import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor(public http:Http) {
    console.log('data service connected ...');
   }

  getPosts(){
    this.http.get('https://jsonplaceholder.typecode.com/posts');
  }

}
