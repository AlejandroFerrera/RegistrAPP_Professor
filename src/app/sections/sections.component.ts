import { Component, OnInit } from '@angular/core';
import { SectionsService } from '../services/sections.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css'],
})
export class SectionsComponent implements OnInit {
  dateTime: Date = new Date();
  sections: any[] = []

  constructor(private sectionService: SectionsService) {}

  ngOnInit(): void {

    this.sections = this.sectionService.getSections();

    timer(0, 1000).subscribe(() => {
      this.dateTime = new Date();
    });
  }
}