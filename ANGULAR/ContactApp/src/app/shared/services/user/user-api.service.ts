import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contact} from '../../models/contact';

@Injectable({
  providedIn: 'root'
})
export class UserAPIService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Contact[]> {
    return this.http.get<Contact[]> ('http://jsonplaceholder.typicode.com/users');
  }
}
