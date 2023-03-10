import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DatatableAction } from '../../../app/common/constants';
import { DialogComponent } from '../../../app/shared-components/dialog/dialog.component';
import { LEVEL_DELETE_DIALOG } from '../../../app/shared-components/dialog/dialog.constants';
import { SearchData } from '../../../app/common/search.model';
import { ViewConfig } from '../../../app/common/view.config';
import { LevelData } from '../level.model';
import { LevelViewConfig } from './levels-view.config';
import { LevelsService } from '../../../app/services/levels.service';
import { FilterConfig } from '../../../app/common/filter.config.model';
import { LEVEL_FILTER_CONFIG } from './levels-filter.config';

@Component({
  selector: 'app-levels-view',
  templateUrl: './levels-view.component.html',
  styleUrls: ['./levels-view.component.sass']
})
export class LevelsViewComponent implements OnInit {

  loadingData = true
  searchValue!: string
  levelFilterConfig: FilterConfig[] = LEVEL_FILTER_CONFIG
  columnDefinition: ViewConfig[] = LevelViewConfig
  dataSource!: MatTableDataSource<LevelData>

  constructor(
    public dialog: MatDialog,
    private levelService: LevelsService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadLevels()
  }

  private loadLevels() {
    this.loadingData = true
    this.levelService.getAllLevels().subscribe((levels: LevelData[]) => {
      this.loadingData = false
      this.dataSource = new MatTableDataSource(levels)
    })
  }

  onSearch(search: SearchData) {
    switch (search.type) {
      case 'input':
        this.searchValue = search.value        
        break
      default:
        break
    }
  }

  onActionEvent(event: DatatableAction) {
    switch (event.type) {
      case 'edit':
        this.router.navigateByUrl(`/users/save/${event.data}`)
        break
      case 'delete':
        this.deleteGrade(event)
        break
      case 'view':
        this.openDetail(event)
        break
      default:
        break;
    }
  }

  newGrade() {
    this.router.navigateByUrl('/levels/save')
  }

  deleteGrade(event: DatatableAction) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: LEVEL_DELETE_DIALOG,
    })

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     this.userService.deleteUser(event.data).subscribe(
    //       () => this.loadUsers())
    //   }
    // })
  }

  openDetail(event: DatatableAction) {
    // const dialogRef = this.dialog.open(UsersDetailComponent, {
    //   data: event.data,
    // })

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result === 'delete') {
    //     this.deleteUser(event)
    //   } else if (result === 'edit') {
    //     this.router.navigateByUrl(`/users/save/${event.data}`)        
    //   }
    // })
  }
}
