import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';

import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userlog',
  templateUrl: './userlog.component.html',
  styleUrls: ['./userlog.component.css']
})
export class UserlogComponent implements OnInit {

  userForm!: FormGroup;


  constructor(private formBuilder: FormBuilder ,  private router: Router ,private authService: AuthService) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      username: [null , [Validators.required]],
      password: [null, [Validators.required]]
    });

  }
  onSubmitForm() {
    this.authService.login(this.userForm.value);
    this.router.navigateByUrl('/article');
}
}
