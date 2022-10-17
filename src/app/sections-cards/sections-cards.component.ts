import { Component, OnInit } from '@angular/core';
import { SectionsService } from '../services/sections.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-sections',
  templateUrl: './sections-cards.component.html',
  styleUrls: ['./sections-cards.component.css'],
})
export class SectionsCardsComponent implements OnInit {

  sections: any[] = []

  constructor(private sectionService: SectionsService) {}

  ngOnInit(): void {

    this.sections = this.sectionService.getSections();


  }
}
