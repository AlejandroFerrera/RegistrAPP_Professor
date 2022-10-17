import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SectionsService {
  private sections = [
    {
      cod: 'PGY4121',
      title: 'Programación de aplicaciones móviles',
      section: '002V',
      color: 'primary',
      hex: '#428cff',
    },
    {
      cod: 'PGY4121',
      title: 'Programación de aplicaciones móviles',
      section: '003V',
      color: 'primary',
      hex: '#428cff',
    },
    {
      cod: 'PGY2121',
      title: 'Programación de escritorio',
      section: '002V',
      color: 'warning',
      hex: '#ffd534',
    },
    {
      cod: 'PGY1121',
      title: 'Programación de algoritmos',
      section: '002V',
      color: 'tertiary',
      hex: '#6a64ff',
    },
  ];

  constructor() {}

  getSections() {
    return [...this.sections];
  }
}
