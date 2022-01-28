import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../interfaces/Card.inteface';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  private myAppUrl = "https://localhost:5001/";
  private myApiUrl = 'api/Tarjeta/'

  constructor(private http: HttpClient) { }

  getListTarjetas(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  deleteTarjeta(id: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id)
  }

  saveTarjeta(card: Card): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, card);
  }

  updateTarjeta(id:number, card:Card): Observable<any>{
    return this.http.put(this.myAppUrl + this.myApiUrl+id,card)
  }

}
