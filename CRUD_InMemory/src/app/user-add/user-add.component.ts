import { Component } from '@angular/core';
import { User } from '../Model/User';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {
newuser:User
constructor(private service:UserService,private router:Router) {}
  Onsubmit(form:any)
  {
    this.newuser=form;
    console.log(this.newuser);
    this.service.AddnewUser(this.newuser)
    alert('record added successfully')
    this.router.navigate(['userlist'])
  }
 
}