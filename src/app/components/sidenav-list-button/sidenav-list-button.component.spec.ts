import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavListButtonComponent } from './sidenav-list-button.component';

describe('SidenavListButtonComponent', () => {
  let component: SidenavListButtonComponent;
  let fixture: ComponentFixture<SidenavListButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavListButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavListButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
