import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCommentOperationComponent } from './admin-comment-operation.component';

describe('AdminCommentOperationComponent', () => {
  let component: AdminCommentOperationComponent;
  let fixture: ComponentFixture<AdminCommentOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCommentOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCommentOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
