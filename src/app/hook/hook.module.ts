import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HookChildComponent } from './hook-child/hook-child.component';
import { HookParentComponent } from './hook-parent/hook-parent.component';



@NgModule({
  declarations: [HookChildComponent, HookParentComponent],
  imports: [
    CommonModule
  ],
  exports: [
  	HookChildComponent,
  	HookParentComponent,
  ]
})
export class HookModule { }
