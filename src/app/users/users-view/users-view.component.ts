import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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

  columnDefinition: ViewConfig[]
  dataSource!: MatTableDataSource<UserData>

  constructor(private userService: UserService) {
    this.columnDefinition = UserViewConfig
  }
  
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((users: UserData[]) => {
      this.dataSource = new MatTableDataSource(users);
    })
  }
}
