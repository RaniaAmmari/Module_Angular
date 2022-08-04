import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
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
