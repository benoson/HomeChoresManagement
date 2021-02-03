import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import FamilyMember from '../models/FamilyMember';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FamilyMembersService {

  public allFamilyMembers: FamilyMember[];
  public allChoresListener: Subject<FamilyMember[]> = new Subject<FamilyMember[]>();

  constructor(private http: HttpClient) { }

  public getAllFamilyMembers = (): Observable<FamilyMember[]> => {
    return this.http.get<FamilyMember[]>("http://localhost:3001/familyMembers/");
  };
}
