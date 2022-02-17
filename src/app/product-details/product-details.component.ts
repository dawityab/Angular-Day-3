import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { CartService } from '../cart.service';
import { pets } from '../pets';
import { IPets } from '../IPets';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  pet: IPets = {} as IPets;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }
  

    successInfo: string = "Your Pet has been added to the cart!";
    addToCart()
      {
        this.cartService.addToCart(this.pet);
        (document.getElementById("success-Info")as HTMLElement).innerHTML = this.successInfo;
        (document.getElementById("success-Info")as HTMLElement).classList.add("alert-success");
      
      }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['petId'];
      this.pet = pets[this.id];

    })
  }

}
