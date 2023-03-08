import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
import { ID_TYPES_SELECT, SelectValue, USER_TYPES_SELECT } from 'src/app/common/constants';
import { UserService } from 'src/app/services/users.service';
import { UserData } from '../user.model';
import { merge } from 'lodash';

@Component({
  selector: 'app-users-save',
  templateUrl: './users-save.component.html',
  styleUrls: ['./users-save.component.sass']
})
export class UsersSaveComponent implements OnInit {

  userId!: string
  userData!: UserData
  userForm!: FormGroup
  idTypeOptions: SelectValue[] = ID_TYPES_SELECT
  userTypeOptions: SelectValue[] = USER_TYPES_SELECT
  
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['userId']
      if (this.userId) {
        this.userService.getUserData(this.userId).subscribe(data => {
          this.loadForm(data)
        })
      } else {
        this.loadForm()
      }
    })
  }

  private loadForm(data?: UserData) {
    if (data) {
      this.userData = data
      this.userForm = this.formBuilder.group({
        idType: new FormControl(data.idType),
        idNumber: new FormControl(data.idNumber),
        username: new FormControl(data.username),
        password: new FormControl(data.password),
        email: new FormControl(data.email),
        firstName: new FormControl(data.firstName),
        secondName: new FormControl(data.secondName),
        lastName: new FormControl(data.lastName),
        secondLastName: new FormControl(data.secondLastName),
        role: new FormControl(data.role),
      })
    } else {
      this.userForm = this.formBuilder.group({
        idType: new FormControl(ID_TYPES_SELECT[0].value, []),
        idNumber: new FormControl(),
        username: new FormControl(),
        password: new FormControl(),
        email: new FormControl(),
        firstName: new FormControl(),
        secondName: new FormControl(),
        lastName: new FormControl(),
        secondLastName: new FormControl(),
        role: new FormControl(USER_TYPES_SELECT[0].value),
      })
    }
  }

  setUserNameAndPassword() {
    const name = this.userForm.get('firstName')?.value
    const lastName = this.userForm.get('lastName')?.value
    const idNumber = this.userForm.get('idNumber')?.value
    const username = `${name}.${lastName}`
    if (username?.length > 5) {          
      this.userForm.get('username')?.setValue(username)
      this.userForm.get('password')?.setValue(`${lastName}${idNumber}`)
    }
  }

  cancel() {
    this.router.navigateByUrl('/users')
  }

  save() {
    const user: UserData = merge(this.userData, this.userForm.value)
    if (this.userId) {
      this.userService.updateUser(user).subscribe(() => {
        this.router.navigateByUrl('/users/view')
      })
    } else {
      this.userService.createUser(user).subscribe(() => {
        this.router.navigateByUrl('/users/view')
      })
    }
  }

}
