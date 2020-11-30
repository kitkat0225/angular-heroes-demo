import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionComponent } from './mission.component';
import { MissionItemComponent } from './mission-item/mission-item.component';

@NgModule({
  declarations: [
  	MissionItemComponent,
  	MissionComponent, 
],
  imports: [
    CommonModule
  ],
  exports: [
  	MissionItemComponent,
  	MissionComponent,
  ]
})
export class MissionModule { }
