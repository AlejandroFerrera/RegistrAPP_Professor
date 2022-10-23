import { Injectable } from '@angular/core';
import { Section } from '../interfaces/sections';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SectionsService {
  constructor(private http: HttpClient) {}

  getProfessorSections(idProfesor: string): Observable<Section[]> {
    const sectionsURL =
      'https://registrapp.onrender.com/api/seccion/?asignatura__profesores__id=';

    return this.http.get<Section[]>(sectionsURL + idProfesor);
  }

  getSection(sectionId: string): Observable<Section[]> {
    const sectionURL =
      'https://registrapp.onrender.com/api/seccion/?id_seccion=';

    return this.http.get<Section[]>(sectionURL + sectionId);
  }
}
