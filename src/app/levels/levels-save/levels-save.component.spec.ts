import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelsSaveComponent } from './levels-save.component';

describe('LevelsSaveComponent', () => {
  let component: LevelsSaveComponent;
  let fixture: ComponentFixture<LevelsSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelsSaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelsSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
