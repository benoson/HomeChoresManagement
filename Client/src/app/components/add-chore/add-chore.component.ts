import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Chore from 'src/app/models/Chore';
import FamilyMember from 'src/app/models/FamilyMember';
import { ChoresService } from 'src/app/services/chores.service';
import { FamilyMembersService } from 'src/app/services/family-members.service';
import ChoreUtils from 'src/app/Utils/ChoreUtils';

@Component({
  selector: 'app-add-chore',
  templateUrl: './add-chore.component.html',
  styleUrls: ['./add-chore.component.css']
})
export class AddChoreComponent implements OnInit {

  public allFamilyMembers: FamilyMember[];
  public allChores: Chore[];

  public newChore: Chore;
  public choreValues: FormGroup;
  public descriptionInputField: FormControl;
  public familyMemberField: FormControl;

  constructor(
    private choresService: ChoresService,
    private familyMembersService: FamilyMembersService
  ) { }

  ngOnInit(): void {

    this.newChore = new Chore("", "");

    if (this.choresService.allChores === undefined) {
      this.getAllChoresFromServer();
    }
    if (this.familyMembersService.allFamilyMembers === undefined) {
      this.getAllFamilyMembersFromService();
    }

    this.initializeFormControlsValidations();
    this.initiateListeners();
  }

  private initiateListeners = (): void => {
    // listening for changes in the chores list
    this.choresService.allChoresListener.subscribe( (value: Chore[]) => {
      this.allChores = value;
    });

    // listening for changes in the family members list
    this.familyMembersService.allChoresListener.subscribe( (value: FamilyMember[]) => {
      this.allFamilyMembers = value;
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

  public onAddChoreClick = (): void => {
    this.assignFormControlsValues();
    // validating the chore data before sending it to the server
    try {
      ChoreUtils.validateChoreDescription(this.newChore.description);
      ChoreUtils.validateChoreFamilyMember(this.newChore.assignedFamilyMember);
      const observable = this.choresService.addNewChore(this.newChore);
      try {
        observable.subscribe( (succesfullServerResponse: Chore) => {
  
          console.log(succesfullServerResponse);
          
          // updating the chores service with the new chore
          const allChores = this.allChores;
          allChores.push(succesfullServerResponse);
          this.choresService.allChoresListener.next(allChores);
          this.clearFormInputs();
  
        }, badServerResponse => {
          alert(badServerResponse.error.errorMessage);
        });
      }
      catch (error) {
        alert(error.message);
      }
    }
    catch (error) {
      alert(error);
    }
  }

  private assignFormControlsValues = (): void => {
    this.newChore.description = this.descriptionInputField.value;
    this.newChore.assignedFamilyMember = this.familyMemberField.value;
  }

  private initializeFormControlsValidations = (): void => {
    // creating the validators of the form's fields
    this.descriptionInputField = new FormControl("", [Validators.required]);
    this.familyMemberField = new FormControl("", [Validators.required]);

    // creating a new form group
    this.choreValues = new FormGroup({
      description: this.descriptionInputField,
      familyMemberField: this.familyMemberField
    });
  }

  private clearFormInputs = () => {
    this.descriptionInputField.setValue(" ");
    this.familyMemberField.setValue(" ");
  }

}
