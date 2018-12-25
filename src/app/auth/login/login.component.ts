import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from "@angular/forms";

import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private form: FormGroup;

  constructor(
    private router:Router,
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      "email": new FormControl(),
      "password": new FormControl()
    });
  }

  openRegistrationPage() {
    this.router.navigate(['/registration']);
  }

  onSubmit() {
    const formData = this.form.value;
    this.authService.login(formData.email, formData.password)
      .subscribe((res:boolean) => {
        if (res) {
          this.router.navigate(['system/home']);
        }
      });
  }
}
