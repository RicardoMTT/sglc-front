import { Component, inject, OnInit, Signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [ReactiveFormsModule,RouterModule,CommonModule],
})
export class LoginComponent implements OnInit{
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  loginForm: FormGroup;
  showPassword = false;
  loading:boolean = false;

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }


  ngOnInit(): void {
    this.loadCredentials();
  }

  loadCredentials() {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    if (savedEmail && savedPassword) {
      this.loginForm.patchValue({
        email: savedEmail,
        password: savedPassword,
        rememberMe: true
      });
    }
  }

  onSubmit(): void {
    this.loading = true;
    if (this.loginForm.invalid) return;


    if (this.loginForm.valid) {
      const { email, password, rememberMe } = this.loginForm.value;

      if (this.loginForm.invalid) return;

      /**
       * Si el usuario marca "Recordarme", el email y la contraseña se guardan en localStorage.
       * Si no lo marca, cualquier dato almacenado previamente se borra.
       */
      if (rememberMe) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
      } else {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
      }


      this.authService.login(email,password).subscribe({
        next: (data:any) => {

          localStorage.setItem('user',JSON.stringify(data.data));
          this.loading = false;
          this.router.navigate(['/dashboard']);

        },
        error: (err) => {
          this.loading = false;
          console.error('Error en login:', err)
        },
      });
    }

  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  forgotPassword() {
    console.log('Forgot password clicked');
  }
}
