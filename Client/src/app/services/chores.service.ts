import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Chore from '../models/Chore';

@Injectable({
  providedIn: 'root'
})
export class ChoresService {

  public allChores: Chore[];
  public allChoresListener: Subject<Chore[]> = new Subject<Chore[]>();

  constructor(private http: HttpClient) { }

  public getAllChores = (): Observable<Chore[]> => {
    return this.http.get<Chore[]>("http://localhost:3001/chores/");
  };

  public addNewChore = (newChore: Chore): Observable<Chore> => {
    return this.http.post<Chore>("http://localhost:3001/chores/", newChore);
  };
}
