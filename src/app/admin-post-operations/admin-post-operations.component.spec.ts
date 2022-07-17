import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostOperationsComponent } from './admin-post-operations.component';

describe('AdminPostOperationsComponent', () => {
  let component: AdminPostOperationsComponent;
  let fixture: ComponentFixture<AdminPostOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPostOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPostOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
