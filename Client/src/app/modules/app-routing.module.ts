import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddChoreComponent } from '../components/add-chore/add-chore.component';
import { ManagementTableComponent } from '../components/management-table/management-table.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: ManagementTableComponent},
  {path:'addChores', component: AddChoreComponent},
  {path: '**', component: ManagementTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
