import { Component, OnInit } from '@angular/core';

import { MissionService } from './mission.service';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css'],
  providers: [MissionService]
})
export class MissionComponent implements OnInit {

	astronauts = ['Lovell', 'Swigert', 'Haise'];
	history: string[] = [];
	missions = [
		'Fly to the Moon',
		'Fly to the Mars',
		'Fly to the Vegas',
	];
	nextMission = 0;


  constructor(
  	private missionService: MissionService
  ) {
  	missionService.missionConfirmed$.subscribe(astronaut => {
  		this.history.push('${astronaut} confirmed the mission');
  	});
  }

  ngOnInit(): void {
  }

  announce() {
  	const mission = this.missions[this.nextMission++];
  	this.missionService.announceMission(mission);
  	this.history.push(`Mission "${mission}" announced`);
  	if (this.nextMission >= this.missions.length) { this.nextMission = 0 };
  }
}
