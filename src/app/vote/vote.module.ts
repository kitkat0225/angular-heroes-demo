import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoterComponent } from './voter/voter.component';
import { VotetakerComponent } from './votetaker/votetaker.component';



@NgModule({
  declarations: [VoterComponent, VotetakerComponent],
  imports: [
    CommonModule
  ],
  exports: [
  	VoterComponent,
  	VotetakerComponent,
  ]
})
export class VoteModule { }
