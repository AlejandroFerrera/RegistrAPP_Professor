import { NONE_TYPE } from '@angular/compiler';
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
import { GetusersService } from '../services/getusers.service';

@Component({
  selector: 'app-section-assistence',
  templateUrl: './section-assistence.component.html',
  styleUrls: ['./section-assistence.component.css'],
})
export class SectionAssistenceComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  sectionData = new MatTableDataSource([
    {
      asignatura: 'Programación de aplicaciones móviles',
      seccion: '005V',
      horario: '19:01-20:20',
      sala: 'T505',
      estado: 'Programada',
    },
  ]);
  sectionColumns: string[] = [
    'Asignatura',
    'Seccion',
    'Horario',
    'Sala',
    'Estado',
  ];

  dataSource: any;
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'email',
    'age',
    'weight',
  ];

  @ViewChild(MatSort) sort: MatSort | undefined;

  newSubscription: Subscription = new Subscription();

  constructor(private userService: GetusersService) {}

  ngOnInit(): void {
    this.newSubscription = this.userService.getUsers().subscribe((response) => {
      this.dataSource = new MatTableDataSource<any>(response.users);
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {
    this.newSubscription = this.userService.getUsers().subscribe((response) => {
      this.dataSource = new MatTableDataSource<any>(response.users);
      this.dataSource.sort = this.sort;
    });
  }

  ngOnDestroy() {
    this.newSubscription.unsubscribe();
  }
}
