import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/User';


@Injectable()
export class UserService {
  host: String = '//localhost:8000';
  userUrl: String = '/user';

  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.host + '' + this.userUrl + '/' + id);
  }

}
