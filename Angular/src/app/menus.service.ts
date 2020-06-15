import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MenusService {
  getAll(){
    return this.http.get('http://localhost:3000/order');
  }
  add(c)
  {
    return this.http.post('http://localhost:3000/order',c);
  }
  getById(key){
    return this.http.get("http://localhost:3000/order/getById?key="+key);
  }

  constructor(private http:HttpClient) { }
  
}
