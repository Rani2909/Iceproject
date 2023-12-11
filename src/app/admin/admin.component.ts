import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  public username = '';
  public password = '';
  public userIdInvalid = false;
  public pswrdInvalid = false;
  public userInvalid = false;
  public userValid = false;

  users = [
    { username: 'akila', password: 'password1' },
    { username: 'rani', password: 'password2' },
  ];

  onSubmit() {
    if (this.username === '' && this.password === '') {
      this.userIdInvalid = true;
      this.pswrdInvalid = true;
      return;
    } else if (this.username !== '' && this.password === '') {
      this.userIdInvalid = false;
      this.pswrdInvalid = true;
      return;
    } else if (this.username === '' && this.password !== '') {
      this.userIdInvalid = true;
      this.pswrdInvalid = false;
      return;
    } else {
      this.userIdInvalid = false;
      this.pswrdInvalid = false;
    }
    const user = this.users.find(
      (u) => u.username === this.username && u.password === this.password
    );
    this.userInvalid = user ? false : true;
    this.userValid = user ? true : false;
  }

}
