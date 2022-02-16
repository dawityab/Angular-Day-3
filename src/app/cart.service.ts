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
  clearCart(){
    this.pets = [];
    return this.pets;
  }
}
