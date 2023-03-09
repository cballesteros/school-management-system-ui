import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  hide: boolean = true
  success: boolean = true
  loginForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    if (await this.authService.loggedIn()) {
      this.router.navigate(['home'])
    } else {
      this.loadForm()
    }
  }
  
  private loadForm() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  login() {
    if (this.loginForm.valid) {
      this.authService.login({...this.loginForm.value})
        .then(() => this.router.navigateByUrl('/home'))
        .catch(() => this.success = false)
    } else {
      this.loginForm.get('username')?.markAsTouched()
      this.loginForm.get('password')?.markAsTouched()
    }
  }
}
