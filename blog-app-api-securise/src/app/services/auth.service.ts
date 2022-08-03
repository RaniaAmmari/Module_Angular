import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
    
  constructor(private http: HttpClient) {}
  
  login(userForm :FormGroup) {
     this.http.post('http://127.0.0.1:8000/api/login_check',userForm)
    .subscribe(response => {
                // login successful if there's a jwt token in the response
                if (response) {
                    localStorage.setItem('jwt', JSON.stringify(response));
                }
            })
        ;
}
}