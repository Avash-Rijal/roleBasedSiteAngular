import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarPrototypeComponent } from './nav-bar-prototype.component';

describe('NavBarPrototypeComponent', () => {
  let component: NavBarPrototypeComponent;
  let fixture: ComponentFixture<NavBarPrototypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarPrototypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarPrototypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
