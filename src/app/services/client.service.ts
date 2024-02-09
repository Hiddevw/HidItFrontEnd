import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class ClientService {
private baseUrl = 'http://localhost:8080/api/clients';

constructor(private http: HttpClient) {}

  getAllClients(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  getClientById(clientId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${clientId}`);
  }

  createClient(client: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, client);
  }

  updateClient(clientId: number, updatedClient: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${clientId}`, updatedClient);
  }

  deleteClient(clientId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${clientId}`);
  }
}
