import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyInfoService {
  constructor(private _http: HttpClient) {
   }
  public getUserDetails(): Observable<any> {
    const url = 'https://iam-atts-default-rtdb.firebaseio.com/myInfo.json';
    return this._http.get<any>(url);
  }
}
