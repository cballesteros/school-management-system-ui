import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DatatableAction } from 'src/app/common/constants';
import { UserService } from 'src/app/services/users.service';
import { ViewConfig } from '../../common/view.config';
import { UserData } from '../user.model';
import { UserViewConfig } from './users-view.config';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.sass']
})
export class UsersViewComponent implements OnInit {

  searchValue!: string
  columnDefinition: ViewConfig[]
  dataSource!: MatTableDataSource<UserData>

  constructor(private userService: UserService, private router: Router) {
    this.columnDefinition = UserViewConfig
  }
  
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((users: UserData[]) => {
      this.dataSource = new MatTableDataSource(users);
    })
  }

  onSearch(value: string) {
    this.searchValue = value
  }

  newUser() {
    this.router.navigateByUrl('/users/save')
  }

  onActionEvent(event: DatatableAction) {
    console.log(event)    
    switch (event.type) {
      case 'edit':
        this.router.navigateByUrl(`/users/save/${event.data}`)
        break;    
      default:
        break;
    }
  }
}
