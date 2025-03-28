import { CommonModule } from '@angular/common';
import { Component, inject, Signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
// import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports:[CommonModule,ReactiveFormsModule,RouterModule]
})
export class RegisterComponent {


  showPassword:boolean = false;
  registroForm: FormGroup;
  mostrarPassword = false;
  mostrarRepetirPassword = false;

  constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      nombres: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmarPassword: ['', [Validators.required]],
      terminos: [false, [Validators.requiredTrue]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      aceptTyC: [false, [Validators.requiredTrue]]
    }, { validator: this.passwordsCoinciden });
  }

  passwordsCoinciden(group: FormGroup) {
    return group.get('password')?.value === group.get('confirmarPassword')?.value
      ? null : { mismatch: true };
  }

  toggleMostrarPassword() {
    this.mostrarPassword = !this.mostrarPassword;
  }

  toggleMostrarRepetirPassword() {
    this.mostrarRepetirPassword = !this.mostrarRepetirPassword;
  }

  registrar() {
    if (this.registroForm.valid) {
      console.log('Formulario válido', this.registroForm.value);
    }
  }


  togglePasswordVisibility(){}
  onSubmit(){

  }
}
