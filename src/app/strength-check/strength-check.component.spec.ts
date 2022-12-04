import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthCheckComponent } from './strength-check.component';

describe('StrengthCheckComponent', () => {
  let component: StrengthCheckComponent;
  let fixture: ComponentFixture<StrengthCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrengthCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrengthCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
