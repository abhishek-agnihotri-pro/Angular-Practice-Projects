import { Injectable } from '@angular/core';
import { User } from './Model/User';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  users:User[]=[
    {id:1,firstname:'bill',lastname:'james',email:'new1@histor.com',profession:'developer'},
    {id:2,firstname:'drill',lastname:'sames',email:'new1@histor.com',profession:'deeloper'}
  ]
    constructor() { }
    getAllUsers():User[]
    {
      return this.users;
    }
    getUserById(Id:number):any
    {
      let userlist:User[]=this.getAllUsers();
      return userlist.find(u=>u.id==Id);
    }
    AddnewUser(newuser:User)
    {
      let users = this.users;
      users.push(newuser);
    }
    Updateuser(user:any)
    {
      let i = this.users.findIndex(u=>u.id==user.id)
      this.users.splice(i,1)
      this.users.push(user)
    }
    Removeuser(id:number)
    {
      let index = this.getAllUsers().findIndex(u=>u.id==id)
      this.users.splice(index,1)
    }
}