import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAllPostsComponent } from './user-all-posts.component';

describe('UserAllPostsComponent', () => {
  let component: UserAllPostsComponent;
  let fixture: ComponentFixture<UserAllPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAllPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAllPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
