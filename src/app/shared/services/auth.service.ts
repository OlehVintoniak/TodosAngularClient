import { BaseApi } from "../core/base.http.service";
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService extends BaseApi {

  private isAuthenticated: boolean = false;

  constructor(
    public http: Http
  ){
    super(http);
  }

  login(username: String, password: String): Observable<boolean> {
    const url: string = this.getUrl('token');

    const data = {
      email: username,
      password: password
    }
    const body =  JSON.stringify(data);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers:headers});
    return this.http.post(url, body, options)
      .pipe(map((res:Response) => {
        let data = res.json();
        if(data.access_token) {
          this.isAuthenticated = true;
          localStorage.setItem('token', data.access_token);
          return true;
        } else { 
          return false;
        }
    }));
  }


  register(data:any): Observable<any> {
    const url: string = this.getUrl("api/Account/Register");
    const body = JSON.stringify(data);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers:headers});
    return this.http.post(url,body,options)
      .pipe(map((res: Response)=> {
        if(res.status == 200) {
          return "OK";
        } else {
          return res.statusText;
        }
    }));
  }

  loginIfTokenExist() {
    if(window.localStorage['token']) {
      this.isAuthenticated = true;
    }
  }

  logOut() {
    this.isAuthenticated = false;
    window.localStorage.clear();
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

}