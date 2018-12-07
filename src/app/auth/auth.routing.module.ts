import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {AuthComponent} from "./auth.component";

const routes: Routes = [
  { path:'', component: AuthComponent, children:[
      { path:'login', component: LoginComponent },
      { path:'registration', component: RegisterComponent }
    ]},
];

@NgModule({
  imports:[
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule {

}