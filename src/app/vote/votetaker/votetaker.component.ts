import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votetaker',
  templateUrl: './votetaker.component.html',
  styleUrls: ['./votetaker.component.css']
})
export class VotetakerComponent implements OnInit {

	agreed = 0;
	disagreed = 0;
	names = ['WWW', 'kkk', 'MMM'];

  constructor() { }

  ngOnInit(): void {
  }

  onVoted(agreed: boolean) {
  	agreed? this.agreed++ : this.disagreed++;
  }

}
