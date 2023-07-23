import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { Error404PagesComponent } from './error404-pages/error404-pages.component';
import { MAINTENANCEComponent } from './maintenance/maintenance.component';



@NgModule({
  declarations: [
    HeaderComponent,
    Error404PagesComponent,
    MAINTENANCEComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ], 
  exports: [
    Error404PagesComponent
  ]
})
export class SharedModule { }
