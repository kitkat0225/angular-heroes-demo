import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizeChildComponent } from './size-child/size-child.component';
import { SizeParentComponent } from './size-parent/size-parent.component';



@NgModule({
  declarations: [SizeChildComponent, SizeParentComponent],
  imports: [
    CommonModule
  ],
  exports: [
  	SizeChildComponent,
  	SizeParentComponent,
  ]
})
export class SizeModule { }
