import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  private apiUrl = 'http://localhost:3000/auth';
  private http = inject(HttpClient);


  login(

  ){
    return this.http.post(`${this.apiUrl}/login`, {});
  }
}
