import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../Model/User';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
  emailPattern ="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  userform:FormGroup
  user:User

  constructor(private service:UserService, private router:Router,private activeroute:ActivatedRoute){}

  ngOnInit(){
    let id = this.activeroute.snapshot.params['id'];
    this.user = this.service.getUserById(id);
    console.log(this.user)
    this.userform = new FormGroup({
    id:new FormControl(this.user?.id),
     firstname: new FormControl(this.user?.firstname, [Validators.required, Validators.minLength(4)]),
     lastname: new FormControl(this.user?.lastname,[Validators.required,Validators.minLength(4)]),
     email: new FormControl(this.user?.email,[Validators.email]),
     profession: new FormControl(this.user?.profession,[Validators.required,Validators.pattern(this.emailPattern)]),
  
   })
  }

  submit(){
    console.log(this.userform.value);
    this.service.Updateuser(this.userform.value)
    this.router.navigate(["userlist"])
  }
  get Id()
  {
    return this.userform.controls['id']
  }
  get Firstname()
  {
    return this.userform.controls['firstname']
  }
  get Lastname()
  {
    return this.userform.controls['lastname']
  }
  get Email()
  {
    return this.userform.controls['email']
  }
  get Profession()
  {
    return this.userform.controls['profession']
  }

}

