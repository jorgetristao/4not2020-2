import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  
  private apiServer = environment.apiServer

  constructor(private http: HttpClient) { }

  listar() {
      return this.http.get(this.apiServer + 'aluno').toPromise()
  }
}
