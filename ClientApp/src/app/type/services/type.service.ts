import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Type } from '../models/Type';

@Injectable({
  providedIn: 'root',
})
export class TypeService {
  private _baseURL: string = '';

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseURL = baseUrl;
  }

  public createType(type: Type): Observable<Type> {
    return this.http.post<Type>(`${this._baseURL}api/type`, type);
  }

  public getTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(`${this._baseURL}api/type`);
  }
}
