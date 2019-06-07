import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface iTrainees {name: string, firstname: string}

@Injectable({
  providedIn: 'root'
})

export class FormationService{

  constructor(private http: HttpClient) { }

  getTrainees(): Observable<iTrainees> {
    return this.http.get<iTrainees>('https://my-json-server.typicode.com/fredjammes/angular-formation-api/trainees')
  }
}