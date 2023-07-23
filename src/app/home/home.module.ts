import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ProjectsComponent } from './pages/projects-us/projects.component';
import { HomeRoutingModule } from './home-routing.module';
import { LayautpagecomponentComponent } from './layautpagecomponent.component';




@NgModule({
  declarations: [
    AboutUsComponent,
    ContactUsComponent,
    ProjectsComponent,
    LayautpagecomponentComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports:[
  ]
})
export class HomeModule { }
