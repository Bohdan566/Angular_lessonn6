import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./components/users/users.component";
import {UserComponent} from "./components/user/user.component";
import {ChosenUserComponent} from "./components/chosen-user/chosen-user.component";
import {UserResolveService} from "./services/user-resolve.service";

const routes: Routes = [{
  path: '', component: UsersComponent, resolve : {usersData: UserResolveService}, children: [{
    path: ':id', component: ChosenUserComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
