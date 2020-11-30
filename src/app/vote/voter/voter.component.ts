import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {

	@Input() name: string;
	@Output() voted = new EventEmitter<boolean>();
	didVoted = false;

  constructor(
  	
  ) { }

  ngOnInit(): void {
  }

  vote(agreed: boolean) {
  	this.voted.emit(agreed);
  	this.didVoted = true;
  }

}
