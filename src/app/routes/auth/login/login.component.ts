import { Component, inject, OnInit, Signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [ReactiveFormsModule,RouterModule],
})
export class LoginComponent implements OnInit{
  private fb = inject(FormBuilder);
  loginForm: FormGroup;
  showPassword = false;

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
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
    if (this.loginForm.invalid) return;

    if (this.loginForm.valid) {
      const { email, password, rememberMe } = this.loginForm.value;

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

      console.log('Iniciando sesión con:', email, password);
      // Aquí iría la lógica para autenticar al usuario (API, JWT, etc.)

      // if (this.loginForm.invalid) return;

      // const { email, password } = this.loginForm.value;

      // this.authService.login(email, password).subscribe({
      //   next: () => this.router.navigate(['/dashboard']),
      //   error: (err) => console.error('Error en login:', err),
      // });
    }

  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  forgotPassword() {
    console.log('Forgot password clicked');
  }
}
