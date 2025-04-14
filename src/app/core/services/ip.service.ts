import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpService {
  private ip$!: Observable<string>;

  constructor(private http: HttpClient) {}

  getIp(): Observable<string> {
    if (!this.ip$) {
      this.ip$ = this.http.get<{ ip: string }>('https://api.ipify.org/?format=json')
      .pipe(
        map(res => res.ip),
        shareReplay(1), // Almacena el valor para futuras suscripciones
      );
    }

    return this.ip$.pipe(
      // Si deseas devolver solo el string de IP:
      // map(response => response.ip)
    );
  }
}
