import { Injectable } from '@angular/core';
import { Section } from '../interfaces/sections';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SectionsService {
  sectionsURL =
    'https://registrapp.onrender.com/api/seccion/?asignatura__profesores__id=';

  constructor(private http: HttpClient) {}

  getSections(idProfesor: string): Observable<Section[]> {
    return this.http.get<Section[]>(this.sectionsURL + idProfesor);
  }
}
