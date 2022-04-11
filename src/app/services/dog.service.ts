import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private dogHttp: HttpClient) { }


  getDogs(){
    return this.dogHttp.get('https://dog.ceo/api/breeds/image/random');
  }
}
