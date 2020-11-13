import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  infoLogin: any;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  getErrorMessageMail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessagePass() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }
  }

  onClickSubmit() {
    if (this.email.status == 'VALID' && this.password.value != '') {
      this.infoLogin = {
        email: this.email.value,
        pass: this.password.value
      }
      // console.log('mail', this.email.value);
      // console.log('pass', this.password.value)
      this.http.post<any>('https://jsonplaceholder.typicode.com/posts', this.infoLogin)
        .subscribe(data => {
          console.log('log', data)
        })
    }
  }





}
