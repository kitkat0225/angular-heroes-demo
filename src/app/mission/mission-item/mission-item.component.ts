import { Component, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { MissionService } from '../mission.service';

@Component({
  selector: 'app-mission-item',
  templateUrl: './mission-item.component.html',
  styleUrls: ['./mission-item.component.css']
})
export class MissionItemComponent implements OnDestroy {

	@Input() astronaut: string;
	
	mission = '<no mission announced>';
	confirmed = false;
	announced = false;
	subscription: Subscription;

  constructor(private missionService: MissionService) {
  	this.subscription = missionService.missionAnnounced$.subscribe(
  		mission => {
  			this.mission = mission;
  			this.announced = true;
  			this.confirmed = false;
  		}
  	);
  }

  ngOnDestroy() {
  	this.subscription.unsubscribe();
  }

  confirm() {
  	this.confirmed = true;
  	this.missionService.confirmMission(this.astronaut);
  }

}
