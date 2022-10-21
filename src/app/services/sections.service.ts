import { Injectable } from '@angular/core';
import { Section } from '../interfaces/sections';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SectionsService {
  sectionsURL = 'https://registrapp.onrender.com/api/seccion/?asignatura__profesores__id=4';

  constructor(private http: HttpClient) {}

  getSections(): Observable<any[]> {
    return this.http.get<any[]>(this.sectionsURL);
  }
}
