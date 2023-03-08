import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DELETE_DIALOG } from 'src/app/shared-components/dialog/dialog.constants';
import { DatatableAction } from '../../../app/common/constants';
import { UserService } from '../../../app/services/users.service';
import { DialogComponent } from '../../../app/shared-components/dialog/dialog.component';
import { ViewConfig } from '../../common/view.config';
import { UserData } from '../user.model';
import { UsersDetailComponent } from '../users-detail/users-detail.component';
import { UserViewConfig } from './users-view.config';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.sass']
})
export class UsersViewComponent implements OnInit {

  loadingData = true
  searchValue!: string
  columnDefinition: ViewConfig[]
  dataSource!: MatTableDataSource<UserData>

  constructor(
    private userService: UserService,
    private router: Router,
    public dialog: MatDialog,
  ) {
    this.columnDefinition = UserViewConfig
  }
  
  ngOnInit(): void {
    this.loadUsers()
  }

  private loadUsers() {
    this.loadingData = true
    this.userService.getAllUsers().subscribe((users: UserData[]) => {
      this.loadingData = false
      this.dataSource = new MatTableDataSource(users);
    })
  }

  onSearch(value: string) {
    this.searchValue = value
  }

  newUser() {
    this.router.navigateByUrl('/users/save')
  }

  deleteUser(event: DatatableAction) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: DELETE_DIALOG,
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.deleteUser(event.data).subscribe(
          () => this.loadUsers())
      }
    })
  }

  openDetail(event: DatatableAction) {
    const dialogRef = this.dialog.open(UsersDetailComponent, {
      data: event.data,
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'delete') {
        this.deleteUser(event)
      } else if (result === 'edit') {
        this.router.navigateByUrl(`/users/save/${event.data}`)        
      }
    })
  }

  onActionEvent(event: DatatableAction) {
    switch (event.type) {
      case 'edit':
        this.router.navigateByUrl(`/users/save/${event.data}`)
        break
      case 'delete':
        this.deleteUser(event)
        break
      case 'view':
        this.openDetail(event)
        break
      default:
        break;
    }
  }
}
