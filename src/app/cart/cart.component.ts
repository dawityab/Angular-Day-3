import { Component, OnInit } from '@angular/core';
import { CartService } from "../cart.service";
import { IPets } from '../IPets';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
pets: IPets[]=[];
checkoutForm = new FormGroup({
  name: new FormControl('',[Validators.required, Validators.minLength(4)]),
  address: new FormControl('',Validators.required)

})
  constructor(private cartService: CartService) { }
 
successInfo: string= "Your order has been submitted";
rejectInfo: string= "Invalid user information. Please check again";

onClick()
{

(document.getElementById("total1")as HTMLElement).innerHTML = `Total cost - ${this.cartService.total()} €`;
(document.getElementById("total1")as HTMLElement).classList.add("btn-warning");
// (document.getElementById("Checkout")as HTMLElement).style.display= 'none';
}

  onSubmit(){
    if(this.checkoutForm.valid){
      this.checkoutForm.value;
      
      (document.getElementById("total")as HTMLElement).innerHTML = `Total cost - ${this.cartService.total()} €`;
      (document.getElementById("total")as HTMLElement).classList.add("alert-warning");
      (document.getElementById("success-Info")as HTMLElement).innerHTML = this.successInfo;
      (document.getElementById("success-Info")as HTMLElement).classList.add("alert-success");
      this.pets = this.cartService.clearCart();
     
      this.checkoutForm.reset();
    }
    else{
      (document.getElementById("success-Info")as HTMLElement).innerHTML = this.rejectInfo;
      (document.getElementById("success-Info")as HTMLElement).classList.add("alert-danger");
      
    }
   
   
  }

  ngOnInit(): void {
    this.pets = this.cartService.getPets();
    
  }

}
