import { Component, OnInit, Input } from '@angular/core';
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
    
    const idProfesor = localStorage.getItem('idProfesor');

    if (idProfesor) {
      this.sectionService.getSections(idProfesor).subscribe((sections) => {
        this.sections = sections;
      });
    }
  }
}
