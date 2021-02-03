import { Component, OnInit } from '@angular/core';
import Chore from 'src/app/models/Chore';
import FamilyMember from 'src/app/models/FamilyMember';
import { ChoresService } from 'src/app/services/chores.service';
import { FamilyMembersService } from 'src/app/services/family-members.service';

@Component({
  selector: 'app-management-table',
  templateUrl: './management-table.component.html',
  styleUrls: ['./management-table.component.css']
})
export class ManagementTableComponent implements OnInit {

  public allChores: Chore[];

  constructor(
    private choresService: ChoresService,
    private familyMembersService: FamilyMembersService
  ) { }

  ngOnInit(): void {
    this.getAllChoresFromServer();
    this.getAllFamilyMembersFromService();

    // listening for changes in the chores list
    this.choresService.allChoresListener.subscribe( (value: Chore[]) => {
      this.allChores = value;
    });
  }

  private getAllChoresFromServer = (): void => {
    const observable = this.choresService.getAllChores();
    try {
      observable.subscribe( (succesfullServerResponse: Chore[]) => {
        this.choresService.allChoresListener.next(succesfullServerResponse);
      }, badServerResponse => {
        alert(badServerResponse.error.errorMessage)
      });
    }
    catch (error) {
      alert(error.message);
    }
  }

  private getAllFamilyMembersFromService = (): void => {
    const observable = this.familyMembersService.getAllFamilyMembers();
    try {
      observable.subscribe( (succesfullServerResponse: FamilyMember[]) => {
        this.familyMembersService.allChoresListener.next(succesfullServerResponse);
      }, badServerResponse => {
        alert(badServerResponse.error.errorMessage)
      });
    }
    catch (error) {
      alert(error.message);
    }
  }
}
