import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jogos } from './models/jogos.models';

@Injectable({
  providedIn: 'root'
})
export class JogosService {
 private apiUrl = 'assets/dados/dados.json'
  constructor(private http: HttpClient) { }

  getJogos(): Observable<Jogos[]>{
    return this.http.get<Jogos[]>(this.apiUrl)
  }
}
