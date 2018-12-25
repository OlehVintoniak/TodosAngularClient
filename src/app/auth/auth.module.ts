import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";
import { AuthRoutingModule } from "./auth.routing.module";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AuthService } from "../shared/services/auth.service";
import { MatCardModule, MatInputModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports:[
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations:[
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [AuthService]
})
export class AuthModule {
}
