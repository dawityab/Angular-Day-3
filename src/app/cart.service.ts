import { Injectable } from '@angular/core';
import { IPets } from './IPets';

@Injectable({
  providedIn: 'root'
})
export class CartService {
pets: IPets[] = [];
  constructor() { }

  addToCart(pet:IPets){
    this.pets.push(pet);
  }
  getPets(){
     
    return this.pets;
  }
  sum : any = 0;
  total(){
   
    for(let val of this.pets)
        this.sum = this.sum + val.price;
        return this.sum;
    
  }
  
  clearCart(){
    this.pets = [];
    return this.pets;
  }
}
