import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";



@Injectable({
  providedIn: 'root'
})
export class ApiService{
  private apiUrl = 'https://signiabd.solarc.pe/api/Modulo';
  private http = inject(HttpClient);


  getModules(
  ){
    return this.http.post(`${this.apiUrl}/ObtenerModulos`,{});
  }



  store(
    data:any
  ){
    return this.http.post(`${this.apiUrl}/InsertarModulo`,data);
  }
}
