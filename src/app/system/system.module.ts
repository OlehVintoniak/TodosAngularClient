import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {SystemComponent} from "./system.component";
import {SystemRoutingModule} from "./system-routing.module";
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule
  ],
  exports: [
    CommonModule
  ],
  declarations: [
    SystemComponent,
    HomePageComponent,
  ],
  providers: [

  ]
})
export class SystemModule {

}
