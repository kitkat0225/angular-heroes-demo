import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../models/product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

	product;

  constructor(
  	private route: ActivatedRoute,
  	private cartService: CartService,
  ) { }

  ngOnInit(): void {
  	this.route.paramMap.subscribe(params => {
  		this.product = products[+params.get('productId')];
  	});
  }

  addToCart(product) {
  	this.cartService.addToCart(product);
  	alert("Added to Cart!");
  }

}
