import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DELETE_DIALOG } from '../../../app/shared-components/dialog/dialog.constants';
import { DatatableAction } from '../../../app/common/constants';
import { UserService } from '../../../app/services/users.service';
import { DialogComponent } from '../../../app/shared-components/dialog/dialog.component';
import { ViewConfig } from '../../common/view.config';
import { UserData } from '../user.model';
import { UsersDetailComponent } from '../users-detail/users-detail.component';
import { UserViewConfig } from './users-view.config';
import { SearchData } from '../../../app/common/search.model';
import { getRole, RoleData } from '../../../app/common/role.model';
import { FilterConfig } from 'src/app/common/filter.config.model';
import { USER_FILTER_CONFIG } from './users-filter.config';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.sass']
})
export class UsersViewComponent implements OnInit {

  loadingData = true
  searchValue!: string
  userFilterConfig: FilterConfig[] = USER_FILTER_CONFIG
  columnDefinition: ViewConfig[] = UserViewConfig
  dataSource!: MatTableDataSource<UserData>

  constructor(
    private userService: UserService,
    private router: Router,
    public dialog: MatDialog,
  ) { }
  
  ngOnInit(): void {
    console.log(this.userFilterConfig)    
    this.loadUsers()
  }

  private loadUsers(role?: RoleData) {
    this.loadingData = true
    this.userService.getAllUsers(role).subscribe((users: UserData[]) => {
      this.loadingData = false
      this.dataSource = new MatTableDataSource(users);
    })
  }

  onSearch(search: SearchData) {
    switch (search.type) {
      case 'input':
        this.searchValue = search.value        
        break
      case 'select':
        this.loadUsers(getRole(search.value))
        break
      default:
        break
    }
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
