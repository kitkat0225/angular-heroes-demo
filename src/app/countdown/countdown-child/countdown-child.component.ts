import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown-child',
  templateUrl: './countdown-child.component.html',
  styleUrls: ['./countdown-child.component.css']
})
export class CountdownChildComponent implements OnDestroy {

	message = '';
	seconds = 11;
	intervalId = 0;

  constructor() { }

  ngOnDestroy(): void {
  	this.clearTimer();
  }

  start() {
  	this.countDown();
  }

  stop() {
  	this.clearTimer();
  	this.message = `Holding at T-${this.seconds} seconds`;
  }

  private clearTimer() {
  	clearInterval(this.intervalId);
  }

  private countDown() {
  	this.clearTimer();
  	this.intervalId = window.setInterval(() => {
  		this.seconds--;
  		if (this.seconds === 0) {
  			this.message = 'Blast Off!';
  		} else {
  			if (this.seconds < 0) {
  				this.seconds = 10;
  			}
  			this.message = `T-${this.seconds} seconds and counting`;
  		}
  	}, 1000);
  }

}
