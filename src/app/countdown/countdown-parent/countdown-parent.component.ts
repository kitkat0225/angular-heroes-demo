import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { CountdownChildComponent } from '../countdown-child/countdown-child.component';

@Component({
  selector: 'app-countdown-parent',
  templateUrl: './countdown-parent.component.html',
  styleUrls: ['./countdown-parent.component.css']
})
export class CountdownParentComponent implements AfterViewInit {

	@ViewChild(CountdownChildComponent)
	private childComponent: CountdownChildComponent;

  constructor() { }

  ngAfterViewInit() {
  	setTimeout(() => {
  		this.seconds = () => this.childComponent.seconds
	}, 0);
  }

  start() {
  	this.childComponent.start();
  }

  stop() {
  	this.childComponent.stop();
  }

  seconds() {
  	return 0;
  }

}
