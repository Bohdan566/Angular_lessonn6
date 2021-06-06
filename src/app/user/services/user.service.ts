import { Injectable } from '@angular/core';

import {Observable} from "rxjs";
import {User} from "../models/user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.url);
  }

  getChosenUser(id: number): Observable<User>{
    return this.httpClient.get<User>(this.url + `/${id}`)
  }
}
