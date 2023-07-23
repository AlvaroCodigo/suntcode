import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuntcodeComponent } from './pages/suntcode/suntcode.component';
import { ProjectRoutingModule } from './projects-routing.module';



@NgModule({
  declarations: [
    SuntcodeComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ]
})
export class PagesModule { }
