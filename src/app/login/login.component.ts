import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
  ]);
  password = new FormControl('', [Validators.required]);

  getErrorEmailMessage() {
    if (this.email.hasError('required')) {
      return 'Debe introducir un correo';
    }

    return this.email.hasError('pattern') ? 'Correo no válido' : '';
  }

  getErrorPasswordMessage() {
    if (this.password.hasError('required')) {
      return 'Debe introducir una contraseña';
    }
    return '';
  }

  constructor() {}

  ngOnInit(): void {}
}
