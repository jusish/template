import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavContentComponentComponent } from './sidenav-content-component.component';

describe('SidenavContentComponentComponent', () => {
  let component: SidenavContentComponentComponent;
  let fixture: ComponentFixture<SidenavContentComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavContentComponentComponent]
    });
    fixture = TestBed.createComponent(SidenavContentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
