import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  phoneNumber: string;
  smsCode: string;

  isCodeSent: boolean;
  error: any;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLoginClick() {
    this.loginService.startAuth(this.phoneNumber).subscribe(
      result => {
        this.isCodeSent = result.success && !result.is_blocked;

        if (result.error_message) {
          this.error = result.error_message;
        }
      },
      err =>
        this.error = err
    );
  }

  onSendCodeClick() {
    this.loginService.completeAuth(this.phoneNumber, this.smsCode).subscribe(
      result => {
        console.log('auth-result', result);
        if (result.success) {
          this.router.navigate(['main']);
        }
      }
    );
  }
}
