import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  BASE_URL = environment.BASE_URL;

  constructor(private httpClient: HttpClient) { }

  get<Type>(endpoint: string): Observable<Type> {
    return this.httpClient.get<any>(`${this.BASE_URL}/${endpoint}`)
  }
}
