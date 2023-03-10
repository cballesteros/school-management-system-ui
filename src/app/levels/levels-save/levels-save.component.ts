import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { merge } from 'lodash';
import { LevelsService } from '../../../app/services/levels.service';
import { LevelData } from '../level.model';

@Component({
  selector: 'app-levels-save',
  templateUrl: './levels-save.component.html',
  styleUrls: ['./levels-save.component.sass']
})
export class LevelsSaveComponent implements OnInit {

  editMode = false
  levelId!: string
  levelData!: LevelData
  levelForm!: FormGroup

  constructor(
    private levelService: LevelsService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.levelId = params['levelId']
      if (this.levelId) {
        this.levelService.getLevel(this.levelId).subscribe(data => {
          this.editMode = true
          this.loadForm(data)
        })
      } else {
        this.editMode = false
        this.loadForm()
      }
    })
  }

  private loadForm(data?: LevelData) {
    if (data) {
      this.levelData = data
      this.levelForm = this.formBuilder.group({
        name: new FormControl(data.name),
        description: new FormControl(data.description),
      })
    } else {
      this.levelForm = this.formBuilder.group({
        name: new FormControl(),
        description: new FormControl(),
      })
    }
  }

  cancel() {
    this.router.navigateByUrl('/levels')
  }

  save() {
    const level: LevelData = merge(this.levelData, this.levelForm.value)
    if (this.editMode) {
      this.levelService.updateLevel(level).subscribe(() => {
        this.router.navigateByUrl('/levels/view')
      })
    } else {
      this.levelService.createLevel(level).subscribe(() => {
        this.router.navigateByUrl('/levels/view')
      })
    }
  }
}
