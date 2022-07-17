import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserOperationsComponent } from './admin-user-operations.component';

describe('AdminUserOperationsComponent', () => {
  let component: AdminUserOperationsComponent;
  let fixture: ComponentFixture<AdminUserOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUserOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
