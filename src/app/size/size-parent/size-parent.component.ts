import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-size-parent',
  templateUrl: './size-parent.component.html',
  styleUrls: ['./size-parent.component.css']
})
export class SizeParentComponent implements OnInit {

	fontSizePx = 16;

  constructor() { }

  ngOnInit(): void {
  }

}
