import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { delay, of } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class AuthService{
  private apiUrl = 'https://signiabd.solarc.pe/api/Account';
  private http = inject(HttpClient);


  login(
    username:string,password:string
  ){
    // const params = new HttpParams();
    // params.set('UserName',username).set('UserPass',password);
    // return this.http.get(`${this.apiUrl}/ValidarLogin`,{
    //   params
    // });
    return of([]).pipe(delay(1500));
  }
}
