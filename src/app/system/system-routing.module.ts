import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/services/auth.guard';
import { SystemComponent } from "./system.component";
import { CommonModule } from "@angular/common";
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
    { path: '', component: SystemComponent, canActivate: [AuthGuard], children: [
      { path:'home', component: HomePageComponent, canActivate: [AuthGuard] }
    ]}
]

@NgModule({
  imports: [
      RouterModule.forChild(routes),
      CommonModule
    ],
  exports: [
      RouterModule
    ]
})
export class SystemRoutingModule {
}