import { Component, OnInit } from '@angular/core';
import { SectionsService } from '../services/sections.service';
import { BehaviorSubject, timer } from 'rxjs';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css'],
})
export class SectionsComponent implements OnInit {
  dateTime: Date = new Date();
  state?: any;

  nombreProfesor$: BehaviorSubject<string> = new BehaviorSubject('');
  apellidoProfesor$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    console.log(navigation);
    this.state = navigation?.extras.state as {
      idProfesor: string;
      nombre: string;
      apellido: string;
    };
  }

  ngOnInit(): void {
    if (this.state) {
      this.nombreProfesor$.next(this.state.nombre);
      this.apellidoProfesor$.next(this.state.apellido);
    }

    timer(0, 1000).subscribe(() => {
      this.dateTime = new Date();
    });
  }
}
