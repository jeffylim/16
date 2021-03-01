import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWorker } from '../models';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  private readonly URL: string = 'http://localhost:3000/workers';

  constructor(private http: HttpClient) {}

  getWorker(): Promise<any> {
    return this.http.get(this.URL).toPromise();
  }

  postWorker(data: IWorker): Promise<object> {
    return this.http.post(this.URL, data).toPromise();
  }

  updateWorker(data: IWorker): Promise<object> {
    return this.http.put(`${this.URL}/${data.id}`, data).toPromise();
  }

  deleteWorker(id: number): Promise<object> {
    return this.http.delete(`${this.URL}/${id}`).toPromise();
  }
}
