import { Injectable } from '@angular/core';
import {CLIENTES} from './cliente.json';
import {Cliente} from './cliente';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  getClientes(): Observable<Cliente[]> {
    return of(CLIENTES);
  }
  constructor() { }
}
