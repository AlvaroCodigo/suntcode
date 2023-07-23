import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Error404PagesComponent } from "./shared/error404-pages/error404-pages.component";
import { MAINTENANCEComponent } from "./shared/maintenance/maintenance.component";

const routes : Routes = [
{
    path: 'home',
    loadChildren: () => import('./home/home.module').then (m => m.HomeModule),
//  component: LayautpagecomponentComponent,
},
{
    path: '404',
    component: Error404PagesComponent,
}
,
{
    path: 'MAINTENANCE',
    component: MAINTENANCEComponent,
},
{
    path: '',
    redirectTo:'home',
    pathMatch: "full"
}
,
{
    path: '**',
    redirectTo: '404'
}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }