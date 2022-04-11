import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoxService {

  constructor(private foxHttp:HttpClient) { }

  getFoxes(){
    return this.foxHttp.get('https://randomfox.ca/floof/?ref=apilist.fun');
  }
}
