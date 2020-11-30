import { Component, OnInit } from '@angular/core';
import { Product, products } from '../models/product';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

	products = products;

  constructor() { }

  ngOnInit(): void {
  }

  share() {
  	console.log("It's a test");
  }

  OnNotifytest() {
  	alert("Notified");
  }

}
