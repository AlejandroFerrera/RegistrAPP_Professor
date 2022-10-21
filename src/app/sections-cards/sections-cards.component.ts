import { Component, OnInit } from '@angular/core';
import { SectionsService } from '../services/sections.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Section } from '../interfaces/sections';

@Component({
  selector: 'app-sections',
  templateUrl: './sections-cards.component.html',
  styleUrls: ['./sections-cards.component.css'],
})
export class SectionsCardsComponent implements OnInit {
  sections: Section[] = [];

  constructor(
    private sectionService: SectionsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sectionService.getSections().subscribe((sections) => {
      sections.forEach((section) => {
        
        const newSection: Section = {
          id_seccion: section['id seccion'],
          nombre_seccion: section['nombre seccion'],
          cod_asignatura: section['codigo asignatura'],
          nombre_asignatura: section['nombre asignatura'],
          id_profesor: section['id_profesor'],
          nombre_profesor: section['nombre profesor'],
        };

        this.sections.push(newSection);
      });
    });
  }
}
