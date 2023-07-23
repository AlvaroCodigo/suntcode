import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ContactUsComponent } from "./pages/contact-us/contact-us.component";
import { ProjectsComponent } from "./pages/projects-us/projects.component";
import { AboutUsComponent } from "./pages/about-us/about-us.component";
import { LayautpagecomponentComponent } from "./layautpagecomponent.component";

const routes : Routes = [
{
    // localhost:4200/home
    path:'',
    component:LayautpagecomponentComponent,
    children: [
        {
            path: 'about',
            component: AboutUsComponent
        },
        {
            path: 'contact',
            component: ContactUsComponent
        },
        {
            path: 'project',
            component: ProjectsComponent
        },
    ]
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }