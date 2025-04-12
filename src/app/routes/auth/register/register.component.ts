import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports:[CommonModule,ReactiveFormsModule,RouterModule]
})
export class RegisterComponent {

  loading:boolean = false;
  showPassword:boolean = false;
  registroForm: FormGroup;
  mostrarPassword = false;
  mostrarRepetirPassword = false;

  constructor(private fb: FormBuilder,private authService:AuthService,private router:Router) {
    this.registroForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      aceptTyC: [false, [Validators.requiredTrue]]
    }, { validator: this.passwordsCoinciden });
  }

  passwordsCoinciden(group: FormGroup) {
    return group.get('password')?.value === group.get('confirmPassword')?.value
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
    this.loading = true;
    const {name,password,email} = this.registroForm.value;
    console.log(this.registroForm.value);

    this.authService.register(name,password,email).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/auth/login']);
      },
      error: (err) => {
        this.loading = false;
        console.error('Error en login:', err)
      },
    });

  }

}
