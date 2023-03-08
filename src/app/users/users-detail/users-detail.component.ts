import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RoleData } from 'src/app/common/role.model';
import { USER_TYPES_SELECT } from '../../../app/common/constants';
import { UserService } from '../../../app/services/users.service';
import { UserData } from '../user.model';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.sass']
})
export class UsersDetailComponent implements OnInit {

  loading = true
  userData!: UserData

  constructor(
    private userService: UserService,
    public dialogRef: MatDialogRef<UsersDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public userId: string,
  ) {}

  ngOnInit(): void {
    if (this.userId) {
      this.userService.getUserData(this.userId)
        .subscribe(data => {
          this.userData = data
          this.loading = false
        })
    } else {
      this.dialogRef.close()
    }
  }

  getRole(role: RoleData): string {
    return USER_TYPES_SELECT.find(item => item.value === role.toString())?.viewValue || ''
  }

}
