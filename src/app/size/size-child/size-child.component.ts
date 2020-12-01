import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-size-child',
  templateUrl: './size-child.component.html',
  styleUrls: ['./size-child.component.css']
})
export class SizeChildComponent implements OnInit {

	@Input() size: number | string;
	@Output() sizeChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  dec() {
  	this.resize(-1);
  }

  inc() {
  	this.resize(+1);
  }

  resize(delta: number) {
  	this.size = Math.min(40, Math.max(8, +this.size + delta));
  	this.sizeChange.emit(this.size);
  }

}
