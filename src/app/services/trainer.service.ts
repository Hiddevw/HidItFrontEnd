import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class TrainerService {
private baseUrl = 'http://localhost:8080/api/trainers';

constructor(private http: HttpClient) {}

  getAllTrainers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  getTrainerById(trainerId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${trainerId}`);
  }

  createTrainer(trainer: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, trainer);
  }

  updateTrainer(trainerId: number, updatedTrainer: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${trainerId}`, updatedTrainer);
  }

  deleteTrainer(trainerId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${trainerId}`);
  }
}
