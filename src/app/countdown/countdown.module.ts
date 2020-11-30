import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownChildComponent } from './countdown-child/countdown-child.component';
import { CountdownParentComponent } from './countdown-parent/countdown-parent.component';



@NgModule({
  declarations: [CountdownChildComponent, CountdownParentComponent],
  imports: [
    CommonModule
  ],
  exports: [
  	CountdownChildComponent,
  	CountdownParentComponent,
  ]
})
export class CountdownModule { }
