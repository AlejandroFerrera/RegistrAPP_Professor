import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Section } from '../interfaces/sections';
import { SectionsService } from '../services/sections.service';
import { StudentsService } from '../services/students.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../interfaces/student';

@Component({
  selector: 'app-section-assistence',
  templateUrl: './section-assistence.component.html',
  styleUrls: ['./section-assistence.component.css'],
})
export class SectionAssistenceComponent implements OnInit, OnDestroy {
  section?: Section;
  section_id?: string;
  tuitionData: Student[] = [];

  sectionData = new MatTableDataSource();

  sectionColumns: string[] = [
    'Asignatura',
    'Seccion',
    'Horario',
    'Sala',
    'Estado',
  ];

  dataSource: any;
  displayedColumns: string[] = ['Nombre', 'Apellido', 'Asistencia'];

  @ViewChild(MatSort) sort: MatSort | undefined;

  studentsSubscription: Subscription = new Subscription();
  sectionSubscription: Subscription = new Subscription();

  constructor(
    private studentsService: StudentsService,
    private sectionService: SectionsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getSection();
    this.getStudents();
  }

  ngOnDestroy() {
    this.studentsSubscription.unsubscribe();
  }

  getSection() {
    const sectionId = String(this.route.snapshot.paramMap.get('section_id'));

    this.sectionService.getSection(sectionId).subscribe((section) => {
      this.section = section[0];
      this.sectionData.data = [
        {
          asignatura: this.section.nombreAsignatura,
          seccion: this.section.codigoAsignatura,
          horario: 'Horario',
          sala: 'T505',
          estado: 'programada',
        },
      ];
    });
  }

  getStudents() {
    const sectionId = String(this.route.snapshot.paramMap.get('section_id'));
    this.studentsService.getSectionTuition(sectionId).subscribe((tuition) => {

      console.log(tuition)

      tuition.forEach((student: any) => {
        const newStudent: Student = {
          nombre: student.nombreAlumno,
          apellido: student.apellidoAlumno,
          estaPresente: false,
        };
        this.tuitionData.push(newStudent);
      });

      console.log(this.tuitionData)

      this.dataSource = new MatTableDataSource(this.tuitionData);
    });
  }
}
