import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private catHttp: HttpClient) { }

  getCats() {
    return this.catHttp.get('https://cat-fact.herokuapp.com/facts');
  }
}
