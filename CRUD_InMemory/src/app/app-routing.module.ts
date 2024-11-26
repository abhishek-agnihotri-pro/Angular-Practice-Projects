import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: "",redirectTo:"home",pathMatch:"full"},
  {path: "home",component:HomeComponent},
  {path: "addnew",component:UserAddComponent},
  {path: "useredit/:id", component:UserEditComponent},
  {path: "userlist", component:UserListComponent},
  // {path: "userform", component:UserformComponent},
  // {path: "userlist", component:MyuserlistComponent},
  {path: "**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
