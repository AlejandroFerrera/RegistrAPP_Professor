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
import { interval, Subscription } from 'rxjs';
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
  presentStudentsId: Number[] = [];

  sectionData = new MatTableDataSource();

  sectionColumns: string[] = [
    'Asignatura',
    'Seccion',
    'Horario',
    'Sala',
    'Estado',
  ];

  dataSource: any;
  displayedColumns: string[] = ['Nombre', 'Apellido', 'Fecha'];

  @ViewChild(MatSort) sort: MatSort | undefined;

  studentsSubscription: Subscription = new Subscription();
  sectionSubscription: Subscription = new Subscription();

  constructor(
    private studentsService: StudentsService,
    private sectionService: SectionsService,
    private route: ActivatedRoute
  ) {
    this.section_id = String(this.route.snapshot.paramMap.get('section_id'));
  }

  ngOnInit(): void {
    this.getSection();
    setInterval(() => this.getStudents(), 2000);
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
    if (this.section_id) {
      this.studentsService
        .getSectionAssistance(this.section_id)
        .subscribe((students) => {

          students.forEach((student: any) => {

            let studentId = student.idAlumno;
            let isInSection = this.presentStudentsId.find(id => id === studentId);

            if (isInSection) {
              return;
            }

            const newStudent: Student = {
              nombreAlumno: student.nombreAlumno,
              apellidoAlumno: student.apellidoAlumno,
              fechaClase: student.fechaClase,
            };
            this.tuitionData.push(newStudent);
            this.presentStudentsId.push(studentId);
          });

          this.dataSource = new MatTableDataSource(this.tuitionData);
        });
    }
  }
}
