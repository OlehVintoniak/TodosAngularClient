import { Component, OnInit } from '@angular/core';
import { AuthService } from "./shared/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ){  }

  ngOnInit(): void {
    this.authService.loginIfTokenExist();
    this.router.navigate(['/system/home']);
  }
}