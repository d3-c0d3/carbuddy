import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownnavComponent } from './dropdownnav.component';

describe('DropdownnavComponent', () => {
  let component: DropdownnavComponent;
  let fixture: ComponentFixture<DropdownnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
