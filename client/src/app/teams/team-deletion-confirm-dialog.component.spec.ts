import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDeletionConfirmDialogComponent } from './team-deletion-confirm-dialog.component';

describe('TeamDeletionConfirmDialogComponent', () => {
  let component: TeamDeletionConfirmDialogComponent;
  let fixture: ComponentFixture<TeamDeletionConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamDeletionConfirmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDeletionConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
