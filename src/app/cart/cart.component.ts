import { Component, OnInit } from '@angular/core';
import { CartService } from "../cart.service";
import { IPets } from '../IPets';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
pets: IPets[]=[];
checkoutForm = this.formbuild.group({
  name: '',
  address: ''
})
  constructor(private cartService: CartService, private formbuild: FormBuilder) { }
successInfo: string= "Your order has been submitted";
  onSubmit(){
    this.checkoutForm.value;
    (document.getElementById("success-Info")as HTMLElement).innerHTML = this.successInfo;
    (document.getElementById("success-Info")as HTMLElement).classList.add("alert-success");
    this.pets = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
    this.pets = this.cartService.getPets();
  }

}
