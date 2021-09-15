import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LoginResponse } from '../components/others/interfaces';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _http: HttpClient
  ) { }

  api_url: string = 'http://ef61f3ac-2222-4b8e-8404-859115358e27.mock.pstmn.io'
  login(user: string , password: string) : Observable<LoginResponse>{
    password = btoa(password)
    return this._http.post<LoginResponse>( `${this.api_url}/auth/login`, {
      user: user,
      password: password
    })
  }
}
