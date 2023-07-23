import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SuntcodeComponent } from "./pages/suntcode/suntcode.component";
import { ProjectsComponent } from "./projects.component";


const routes : Routes = [
{
    path:'project',
    component:ProjectsComponent,
    children: [
        {
            path: 'suntcode',
            component: SuntcodeComponent
        },
        
    ]
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectRoutingModule { }