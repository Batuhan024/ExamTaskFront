import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true, 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule] 
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: string | null = null;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginError = 'Kullanıcı adı ve şifre boş bırakılamaz';
      return;
    }
    const { username, password } = this.loginForm.value;


    if (username === 'Batuhan' && password === '123') {

      localStorage.setItem('user', JSON.stringify({ username }));
      

      this.router.navigate(['/dashboard']);
    } else {

      this.loginError = 'Kullanıcı adı veya şifre hatalı';
    }
  }
  get f() {
    return this.loginForm.controls;
  }
}
