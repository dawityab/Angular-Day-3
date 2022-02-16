import { Component, OnInit } from '@angular/core';
import { pets } from '../pets';
import { IPets } from '../IPets';
 
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
pets : IPets [] = pets;
  constructor() { }

  ngOnInit(): void {
  }

}
