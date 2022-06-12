import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requirement } from '../state/requirements.state';

@Injectable({
  providedIn: 'root',
})
export class RequirementsRequestService {
  private apiURL: string;

  constructor(private client: HttpClient, @Inject('BASE_URL') baseURL: string) {
    this.apiURL = baseURL;
  }

  getRequirements(): Observable<Requirement[]> {
    return this.client.get<Requirement[]>(this.apiURL + `api/requirement`);
  }
}
