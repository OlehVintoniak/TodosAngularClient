import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class BaseApi {

  private baseUrl: string = "localhost/todo/";
  private options: RequestOptions;

  constructor(
    public http: Http
  ){

  }

  setAuthHeader() {
    const headers = new Headers();
    headers.append('Authorization', `bearer ${window.localStorage['token']}`);
    this.options = new RequestOptions({ headers:headers });
  }

  getUrl(url: string = "") : string {
    return this.baseUrl + url;
  }

  get(url: string = "") : Observable<any> {
    this.setAuthHeader();
    return this.http.get(this.getUrl(url), this.options)
        .pipe(map((response: Response) => response.json()));
  }

  post(url: string = "", data = {}) : Observable<any> {
    this.setAuthHeader();
    return this.http.post(this.getUrl(url), data, this.options)
      .pipe(map((response: Response) => response.json()));
  }

  put(url: string = "", data) : Observable<any> {
    this.setAuthHeader();
    return this.http.put(this.getUrl(url), data, this.options)
      .pipe(map((response: Response) => response.json()));
  }

  delete(url: string= "") : Observable<any> {
    this.setAuthHeader();
    return this.http.delete(this.getUrl(url), this.options)
      .pipe(map((response: Response) => response.json()));
  }
}