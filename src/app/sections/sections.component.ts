import { Component, OnInit } from '@angular/core';
import { SectionsService } from '../services/sections.service';
import { timer } from 'rxjs';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css'],
})
export class SectionsComponent implements OnInit {
  dateTime: Date = new Date();
  state: any;

  nombreProfesor?: string;
  apellidoProfesor?: string;

  constructor(private sectionService: SectionsService, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.state = navigation?.extras.state as {
      idProfesor: string;
      nombre: string;
      apellido: string;
    };

    this.nombreProfesor = this.state.nombre;
    this.apellidoProfesor = this.state.apellido;
  }

  ngOnInit(): void {

    timer(0, 1000).subscribe(() => {
      this.dateTime = new Date();
    });
  }
}
