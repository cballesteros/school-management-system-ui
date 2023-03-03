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
  userCtrl = new FormControl('', Validators.required);
  passwordCtrl = new FormControl('', Validators.required);

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.authService.loggedIn) {
      this.router.navigate(['home'])
    }
    this.loginForm = this.formBuilder.group({
      userCtrl: this.userCtrl,
      passwordCtrl: this.passwordCtrl
    })
  }

}
