import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  apiUrl ='https://registrapp.onrender.com/api/matricula/?seccion__id_seccion='

  constructor(private http: HttpClient) { }

  getSectionTuition(sectionId: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + sectionId);
  }
}
