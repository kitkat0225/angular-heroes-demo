import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hook-parent',
  templateUrl: './hook-parent.component.html',
  styleUrls: ['./hook-parent.component.css']
})
export class HookParentComponent implements OnInit {

	major = 1;
	minor = 23;

  constructor() { }

  ngOnInit(): void {
  }

  newMinor() {
  	this.minor ++;
  }

  newMajor() {
  	this.major ++;
  	this.minor = 0;
  }

}
