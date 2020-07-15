import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private data = {};  
  
  setdata(value) {  
    this.data= value;  
  }  
  
  getdata() {  
    return this.data;  
  }  
}
