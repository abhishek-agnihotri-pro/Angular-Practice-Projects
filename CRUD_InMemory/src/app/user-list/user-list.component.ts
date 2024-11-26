import { Component } from '@angular/core';
import { User } from '../Model/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  userlist:User[]
 
  constructor(private service:UserService){}
 
  ngOnInit(){
    this.userlist=this.service.getAllUsers();
    console.log(this.userlist);
  }
  deleteuser(id:number){
    if(confirm("Do you want to Delete?")){
      this.service.Removeuser(id);
      alert("record has been deleted successfully");
      this.userlist = this.service.getAllUsers();

    }

  }
}
