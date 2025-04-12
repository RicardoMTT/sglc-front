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
    const body = {
      correo:username,
      clave:password
    }
    return this.http.post(`${this.apiUrl}/ValidarLogin`,body);

  }

  register(
    username:string,password:string,email:string
  ){
    const body = {
      userName:username,
      email,
      clave:password,
      activo:'0',
      empresaId: 0,
      idPerfil: 0
    }

    return this.http.post(`${this.apiUrl}/InsertarUsuarioExterno`,body);

  }
}
