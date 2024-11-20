import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  products:any[]=[]
  constructor(public http : HttpClient)
  {

      this.http.get("https://fakestoreapi.com/products").subscribe((res:any)=>
      {
        this.products=res;
      })
      
    
  }

  cart:any[]=[]

  add(cartobj:any)
  {
    this.cart.push(cartobj)
  }
  
  remove(index:number)
  {
    this.cart.splice(index,1)
  }
}
